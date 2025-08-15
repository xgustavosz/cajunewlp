import Image from "next/image"
import Link from "next/link"

interface CardClassProps {
  title: string
  buttonLink: string
  imageUrl: string
}

export default function CardClass({
  title,
  buttonLink,
  imageUrl,
}: CardClassProps) {

  return (
    <div className="relative w-[280px] h-[446px] rounded-md overflow-hidden">
      <Image
        src={imageUrl}
        alt={title}
        fill
        className={`object-cover`}
        priority
      />

      <div className="absolute flex flex-col items-center bottom-0 left-0 w-full px-10 py-6 max-h-52 h-full text-white">
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
