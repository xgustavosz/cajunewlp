import Image from "next/image"
import Link from "next/link"

interface CardClassProps {
    title: string
    buttonLink: string
    imageUrl: string
}

export default function CardClass({ title, buttonLink, imageUrl }: CardClassProps) {
    return (
        <div className="relative w-[280px] h-[446px] rounded-md overflow-hidden">
            <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover"
                priority
            />

            <div className="absolute flex flex-col items-center bottom-0 left-0 w-full px-10 py-6 bg-[#3A222F] max-h-56 h-full text-white">
                <Image
                    src={"/caju-logo03.svg"}
                    alt={"Logo Caju"}
                    width={24}
                    height={34}
                />
                <p className="font-cursiveBold text-center text-[1.25rem] text-[#DA8331] mt-[10px] mb-[28px]">{title}</p>
                <Link href={buttonLink} className="inline-block w-full text-center mt-2 bg-[#DA8331] text-white px-4 py-2 rounded-sm hover:bg-[#A24154] transition-colors">
                    Saiba mais
                </Link>
            </div>
        </div>
    )
}
