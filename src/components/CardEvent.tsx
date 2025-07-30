import Image from "next/image"

interface CardEventProps {
    imageUrl: string
    title: string
    description: string
}

export default function CardEvent({ imageUrl, title, description }: CardEventProps) {
    const [firstWord, ...rest] = title.split(" ");

    return (
        <div className="bg-[#FCF8F3] w-full max-w-[285px] h-[446px] shadow-md">
            <div className="w-full h-[300px] relative">
                <Image
                    src={imageUrl}
                    alt="card do evento"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="p-4">
                <p className="font-neulisSansMedium text-[#5182E5] uppercase text-start leading-tight">
                    {firstWord}
                    <br />
                    {rest.join(" ")}
                </p>
                <p className="font-medium text-[#292A1C] mt-4">{description}</p>
            </div>
        </div>
    );
}
