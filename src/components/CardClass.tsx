import Image from "next/image"
import Link from "next/link"

interface CardClassProps {
    title: string
    buttonLink: string
    imageUrl: string
    cardStyle?: number
}

export default function CardClass({ title, buttonLink, imageUrl, cardStyle = 1 }: CardClassProps) {
    const words = title.split(" ")

    let firstLine = ""
    let secondLine = ""

    if (words.length === 2) {
        firstLine = words[0]
        secondLine = words[1]
    } else if (words.length >= 3) {
        firstLine = words.slice(0, 2).join(" ")
        secondLine = words.slice(2).join(" ")
    } else {
        firstLine = words[0]
    }

    return (
        <div className="relative w-[280px] h-[446px] rounded-md overflow-hidden">
            {cardStyle === 1 && (
                <Image
                    src="/grafismo-06.png"
                    alt="Grafismo"
                    width={366}
                    height={577}
                    className="object-cover absolute top-[-40px] left-[-20px] rotate-[-40deg] w-[366px] h-[577px] z-20"
                />
            )}
            {cardStyle === 2 && (
                <Image
                    src="/grafismo-02.png"
                    alt="Grafismo"
                    width={459}
                    height={503}
                    className="object-cover absolute rotate-[-120deg] right-[-100px] w-[459px] h-[503px] z-20"
                />
            )}

            <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover"
                priority
            />

            <div className="absolute flex flex-col items-center bottom-0 left-0 w-full px-10 py-6 max-h-52 h-full text-white">
                {cardStyle === 1 && (
                    <>
                        <div className="absolute bg-[#3A222F] top-[0px] left-[-20px] w-[160px] h-[80px]" />
                        <div className="absolute bg-[#3A222F] top-[-10px] right-[60px] w-[90px] h-[80px]" />
                        <div className="absolute bg-[#3A222F] top-[20px] right-[40px] w-[110px] h-[80px]" />
                        <div className="absolute bg-[#3A222F] bottom-0 w-full h-[135px]" />
                    </>
                )}
                {cardStyle === 2 && (
                    <>
                        <div className="absolute bg-[#3A222F] top-[0px] left-[-20px] w-[160px] h-[80px]" />
                        <div className="absolute bg-[#3A222F] top-[-10px] right-[60px] w-[90px] h-[80px]" />
                        <div className="absolute bg-[#3A222F] top-[20px] right-[40px] w-[110px] h-[80px]" />
                        <div className="absolute bg-[#3A222F] bottom-0 w-full h-[135px]" />
                    </>
                )}


                <Image
                    src={"/caju-logo03.svg"}
                    alt={"Logo Caju"}
                    width={24}
                    height={34}
                    className="absolute bottom-[140px] z-20"
                />
                <p className="absolute leading-[20px] bottom-[60px] z-20 font-cursiveBold text-center text-[1.25rem] text-[#DA8331] mt-[10px] mb-[28px]">
                    {firstLine} <br /> {secondLine}
                </p>
                <Link href={buttonLink} className="absolute bottom-[20px] z-20 max-w-[200px] inline-block w-full text-center mt-2 bg-[#DA8331] text-white px-4 py-2 rounded-sm hover:bg-[#A24154] transition-colors">
                    Saiba mais
                </Link>
            </div>
        </div>
    )
}
