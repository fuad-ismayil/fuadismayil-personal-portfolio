import { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import emailjs from '@emailjs/browser'
import Turnstile from 'react-turnstile'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const validationSchema = Yup.object({
    name: Yup.string()
        .trim()
        .min(2, 'Name must be at least 2 characters')
        .max(50, 'Name must be less than 50 characters')
        .matches(
            /^[A-Za-z](?:[A-Za-z\s'_-]*[A-Za-z])$/,
            'Name must start and end with a letter and contain only valid characters'
        )
        .required('Name is required'),

    email: Yup.string()
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,

            'Please enter a valid email address'
        )
        .required('Email is required'),
    subject: Yup.string()
        .trim()
        .min(3, 'Subject must be at least 3 characters')
        .max(100, 'Subject must be less than 100 characters')
        .matches(
            /^(?!.*(.)\1{5,})[A-Za-z0-9](?:[A-Za-z0-9\s.,!?'"’\-()]*[A-Za-z0-9])?$/,
            'Subject looks invalid or spammy'
        )
        .matches(/[A-Za-z]/, 'Subject must contain at least one letter')
        .required('Subject is required'),

    message: Yup.string()
        .trim()
        .min(10, 'Message must be at least 10 characters')
        .max(2000, 'Message must be less than 2000 characters')
        .matches(/\p{L}{3,}/u, 'Message must contain at least one word with 3+ letters')
        .matches(/^(?!.*(.)\1{9,}).*$/s, 'Message looks spammy (too many repeated characters)')
        .required('Message is required')

})

const RATE_LIMIT_MS = 30000
const MESSAGE_MAX_LENGTH = 2000

const Contact: React.FC = () => {
    const [turnstileToken, setTurnstileToken] = useState<string | null>(null)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
    const [statusMessage, setStatusMessage] = useState('')
    const [lastSubmitTime, setLastSubmitTime] = useState<number>(0)
    const [cooldownRemaining, setCooldownRemaining] = useState<number>(0)
    const [turnstileKey, setTurnstileKey] = useState<number>(0)

    useEffect(() => {
        if (cooldownRemaining > 0) {
            const timer = setTimeout(() => {
                setCooldownRemaining(prev => Math.max(0, prev - 1))
            }, 1000)
            return () => clearTimeout(timer)
        }
    }, [cooldownRemaining])

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: ''
        },
        validationSchema,
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: async (values, { resetForm }) => {
            const now = Date.now()
            if (now - lastSubmitTime < RATE_LIMIT_MS) {
                const secondsRemaining = Math.ceil((RATE_LIMIT_MS - (now - lastSubmitTime)) / 1000)
                setCooldownRemaining(secondsRemaining)
                setSubmitStatus('error')
                setStatusMessage(`Please wait ${secondsRemaining} seconds before submitting again`)
                return
            }

            if (!turnstileToken) {
                setSubmitStatus('error')
                setStatusMessage('Please complete the verification')
                return
            }

            setSubmitStatus('idle')

            try {
                await emailjs.send(
                    import.meta.env.VITE_EMAILJS_SERVICE_ID,
                    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                    {
                        name: values.name,
                        email: values.email,
                        subject: values.subject,
                        message: values.message,
                        'cf-turnstile-response': turnstileToken
                    },
                    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
                )

                setSubmitStatus('success')
                toast.success('Message sent successfully! I\'ll get back to you soon.', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                })
                resetForm()
                setTurnstileToken(null)
                setLastSubmitTime(Date.now())
                setCooldownRemaining(RATE_LIMIT_MS / 1000)
                setTurnstileKey(prev => prev + 1)
            } catch {
                setSubmitStatus('error')
                setStatusMessage('Failed to send message. Please try again later.')
            }
        }
    })

    const handleTurnstileSuccess = (token: string) => {
        setTurnstileToken(token)
    }

    const handleTurnstileExpire = () => {
        setTurnstileToken(null)
    }

    const handleTurnstileError = () => {
        setTurnstileToken(null)
    }

    const isFormValid = formik.isValid && formik.dirty && turnstileToken !== null && cooldownRemaining === 0
    const isDisabled = !isFormValid || formik.isSubmitting

    return (
        <section className="contact-form px-4">
  <h1 className="text-center text-[48px] font-bold mb-12">
    C
    <span className="underline decoration-4 decoration-[#FDC435] underline-offset-[20px]">
      ontact M
    </span>
    e
  </h1>

  {/* Layout: stacked on phones, parallel on tablets+ */}
  <div className="mx-auto max-w-6xl grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
    {/* Left: Form */}
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-base font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          {...formik.getFieldProps("name")}
          placeholder="Your Name"
          className={`px-3 py-2 rounded-md border text-sm ${
            formik.touched.name && formik.errors.name ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:border-[#FDC435] transition-colors`}
        />
        {formik.touched.name && formik.errors.name && (
          <span className="text-red-500 text-sm">{formik.errors.name}</span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-base font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          {...formik.getFieldProps("email")}
          placeholder="your.email@example.com"
          className={`px-3 py-2 rounded-md border text-sm ${
            formik.touched.email && formik.errors.email ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:border-[#FDC435] transition-colors`}
        />
        {formik.touched.email && formik.errors.email && (
          <span className="text-red-500 text-sm">{formik.errors.email}</span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="subject" className="text-base font-medium">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          {...formik.getFieldProps("subject")}
          placeholder="Subject"
          className={`px-3 py-2 rounded-md border text-sm ${
            formik.touched.subject && formik.errors.subject
              ? "border-red-500"
              : "border-gray-300"
          } focus:outline-none focus:border-[#FDC435] transition-colors`}
        />
        {formik.touched.subject && formik.errors.subject && (
          <span className="text-red-500 text-sm">{formik.errors.subject}</span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="text-base font-medium">
          Message
        </label>
        <textarea
          id="message"
          {...formik.getFieldProps("message")}
          placeholder="Your message..."
          rows={4}
          className={`px-3 py-2 rounded-md border text-sm ${
            formik.touched.message && formik.errors.message
              ? "border-red-500"
              : "border-gray-300"
          } focus:outline-none focus:border-[#FDC435] transition-colors resize-none`}
        />
        {formik.touched.message && formik.errors.message && (
          <span className="text-red-500 text-sm">{formik.errors.message}</span>
        )}
        <span className="text-gray-500 text-sm text-right">
          {formik.values.message.length}/{MESSAGE_MAX_LENGTH}
        </span>
      </div>

      <div className="flex justify-center">
        <Turnstile
          key={turnstileKey}
          sitekey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
          onSuccess={handleTurnstileSuccess}
          onExpire={handleTurnstileExpire}
          onError={handleTurnstileError}
        />
      </div>

      {submitStatus === "error" && (
        <div className="p-3 rounded-md text-center text-sm bg-red-100 text-red-700">
          {statusMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={isDisabled}
        className={`mt-2 px-6 py-2.5 font-semibold h-[43px] w-[250px] mx-auto rounded-md transition-colors cursor-pointer text-sm
          ${
            isDisabled
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-[#FDC435] text-black hover:bg-[#e5b030]"
          }`}
      >
        {formik.isSubmitting
          ? "Sending..."
          : cooldownRemaining > 0
            ? `Wait ${cooldownRemaining}s`
            : "Send Message"}
      </button>
    </form>

    <div className="w-full overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
      <iframe
        title="Google Maps - Azerbaijan Technical University"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5592.857350319558!2d49.82094893695827!3d40.372640114411716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dc397d94dc3%3A0x617bc46b47244c00!2sAz%C9%99rbaycan%20Texniki%20Universiteti!5e0!3m2!1saz!2saz!4v1768578258528!5m2!1saz!2saz"
        className="h-[320px] w-full md:h-[520px] lg:h-[520px]"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </div>

  <ToastContainer />
</section>

    )
}

export default Contact