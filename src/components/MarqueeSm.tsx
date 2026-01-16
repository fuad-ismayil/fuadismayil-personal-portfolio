/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils"
import { Marquee } from "./ui/marquee"

const reviews = [
    {
        name: "Elvin",
        username: "@elvin_tech",
        body: "Layihənin həm dizaynı, həm də kod tərəfi çox səliqəlidir. Gözlədiyimdən daha sürətli və keyfiyyətli nəticə aldım.",
        img: "https://avatar.vercel.sh/elvin",
    },
    {
        name: "Rüstəm",
        username: "@rustam_dev",
        body: "React və Tailwind istifadəsi mükəmməldir. Kodlar təmiz, performans isə pik səviyyədədir. Əla iş!",
        img: "https://avatar.vercel.sh/rustam",
    },
    {
        name: "Fərid",
        username: "@farid_design",
        body: "Dizayndakı ən kiçik detalları belə koda dəqiqliklə köçürür. Belə developerlə işləmək böyük rahatlıqdır.",
        img: "https://avatar.vercel.sh/farid",
    },
    {
        name: "Tural",
        username: "@tural_c",
        body: "Problem həll etmə bacarığı çox yüksəkdir. Ən qəliz CSS və JS məsələlərini qısa müddətdə həll etdi.",
        img: "https://avatar.vercel.sh/tural",
    },
    {
        name: "Zaur",
        username: "@zaur_v",
        body: "İstifadəçi təcrübəsinə (UX) verdiyi önəm saytın hər yerindən hiss olunur. Çox peşəkar yanaşmadır.",
        img: "https://avatar.vercel.sh/zaur",
    },
    {
        name: "Nicat",
        username: "@nicat_web",
        body: "Modern texnologiyalarla işləmək bacarığı sayəsində ortaya çox müasir bir məhsul çıxdı. Şiddətlə tövsiyə edirəm.",
        img: "https://avatar.vercel.sh/nicat",
    },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string
  name: string
  username: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-fit cursor-pointer overflow-hidden rounded-xl border p-4 sm:w-36",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  )
}

export function MarqueeSm() {
  return (
    <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden">
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
    </div>
  )
}
