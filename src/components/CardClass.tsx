import Image from "next/image"
import Link from "next/link"

interface CardClassProps {
  title: string
  buttonLink: string
  imageUrl: string
  cardStyle: number
}

export default function CardClass({
  title,
  buttonLink,
  imageUrl,
  cardStyle,
}: CardClassProps) {
  const styleIndex = ((cardStyle - 1) % 4) + 1

  const words = title.split(" ")
  const firstLine = words.length >= 2 ? words.slice(0, 2).join(" ") : words[0]
  const secondLine = words.length >= 2 ? words.slice(2).join(" ") : ""

  return (
    <div className="relative w-[280px] h-[446px] rounded-md overflow-hidden">
      <Image
        src={imageUrl}
        alt={title}
        fill
        className={`object-cover ${styleIndex === 1 ? "pb-30" : "pb-40"}`}
        priority
      />

      <div className="absolute flex flex-col items-center bottom-0 left-0 w-full px-10 py-6 max-h-52 h-full text-white">
        <Image
          src={`/card-layout-0${styleIndex}.png`}
          alt="Card Layout"
          width={283}
          height={210}
          className="absolute bottom-0 z-20"
        />

        <Image
          src="/caju-logo03.svg"
          alt="Logo Caju"
          width={24}
          height={34}
          className="absolute bottom-[140px] z-20"
        />

        <p className="absolute leading-[20px] bottom-[60px] z-20 font-cursiveBold text-center text-[1.25rem] text-[#DA8331] mt-[10px] mb-[28px]">
          {firstLine} <br /> {secondLine}
        </p>

        <Link
          href={buttonLink}
          className="absolute bottom-[20px] z-20 max-w-[200px] inline-block w-full text-center mt-2 bg-[#DA8331] text-white px-4 py-2 rounded-sm hover:bg-[#A24154] transition-colors"
        >
          Saiba mais
        </Link>
      </div>
    </div>
  )
}
