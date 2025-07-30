import Image from 'next/image'

interface CardHeaderProps {
    title: string
    description: string
    icon: string
    titleBold?: boolean
}

export default function CardHeader({ title, description, icon, titleBold }: CardHeaderProps) {
    const iconMap: Record<CardHeaderProps['icon'], string> = {
        heart: '/heartIcon.svg',
        star: '/starIcon.svg',
        eye: '/eyeIcon.svg',
    }

    return (
        <div className="flex flex-col justify-between items-start w-56 h-40 bg-[#FCF8F3] rounded-3xl p-8 shadow-sm">
            <Image
                src={iconMap[icon]}
                alt={`Ícone de ${icon}`}
                width={25}
                height={25}
            />
            <p className={`${titleBold ? 'font-bold' : 'font-medium'} mt-3 mb-2`}>{title}</p>
            <p>{description}</p>
        </div>
    )
}
