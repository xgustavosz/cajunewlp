import Image from "next/image"

interface ClassAboutProps {
    title: string
    firstText: string
    secondText?: string
    imageUrl: string
    reverse?: boolean
    btnFunction?: () => void
}

export default function ClassAbout({ title, firstText, secondText, imageUrl, reverse }: ClassAboutProps) {
    return (
        <div className={`relative flex ${reverse ? "justify-end" : "justify-start"}`}>
            <div className="pt-10">
                <Image className="shadow-2xl shadow-[#00000054]" src={imageUrl} alt="Imagem da turma" width={818} height={474} />
            </div>
            <div className={`absolute z-10 bottom-0 ${reverse ? "right-[650px]" : "left-[650px]"} bg-[#FFC945] max-w-[549px] p-10 shadow-[#00000054] shadow-lg`}>
                <p className="font-cursiveMedium text-[#5182E5] text-[1.625rem]">{title}</p>

                <div className="font-neulisSansMedium flex flex-col text-[#292A1C] gap-4">
                    <p>
                        {firstText}
                    </p>

                    <p>
                        {secondText}
                    </p>
                </div>

                <button className="bg-[#DA8331] cursor-pointer hover:bg-[#A24154] text-white w-full h-[50px] font-medium transition-colors mt-10">Horários e infos da turma</button>
            </div>
        </div>
    )
}