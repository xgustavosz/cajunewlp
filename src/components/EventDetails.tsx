import Image from "next/image"
import Container from "./Container"

interface EventDetailsProps {
    firstTitle: string
    secondTitle: string
    firstDescription: string
    secondDescription?: string
    isFirst?: boolean
    reverse?: boolean
    imageStartIndex: number
}

export default function EventDetails({ firstTitle, secondTitle, firstDescription, secondDescription, reverse, isFirst, imageStartIndex }: EventDetailsProps) {
    return (
        <div className={reverse ? "bg-white" : "bg-[#FCF8F3]"}>
            <Container>
                <div className={` flex flex-col ${reverse ? "lg:flex-row" : "lg:flex-row-reverse"} justify-center items-center gap-14 my-14 lg:my-[114px]`}>
                    <div className="max-w-[700px] lg:max-w-[500px]">
                        <p className={`${isFirst ? "block" : "hidden"} font-cursiveMedium text-[#3A222F] uppercase`}>Nossos eventos</p>
                        <div className="font-cursiveBold text-[3.875rem]">
                            <h2 className="text-[#A24154]">{firstTitle}</h2>
                            <h2 className="relative inline-block text-[#DA8331]">
                                {secondTitle}
                                <Image
                                    src="/caju-decoration.svg"
                                    alt="Decoração Caju"
                                    width={64}
                                    height={37}
                                    className="absolute bottom-14 right-[-30px]"
                                />
                            </h2>
                        </div>

                        <div className="flex flex-col gap-4 text-[#292A1C] text-xl">
                            <p>{firstDescription}</p>
                            <p>{secondDescription}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 lg:gap-2 w-full">
                        {Array.from({ length: 4 }).map((_, i) => {
                            const imageNumber = String(imageStartIndex + i).padStart(2, "0")
                            return (
                                <div key={i} className="w-full aspect-[3/2] relative rounded-md overflow-hidden">
                                    <Image
                                        src={`/event-image${imageNumber}.jpg`}
                                        alt={`Imagem evento ${secondTitle}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Container>
        </div>
    )
}