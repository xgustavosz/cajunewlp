import Image from "next/image";

interface PageTitleProps {
    title: string
}

export default function PageTitle({ title }: PageTitleProps) {
    return (
        <div className="relative flex items-center justify-center bg-[#292A1C] h-[160px] md:h-[260px] overflow-hidden">
            {/* Grafismo esquerdo */}
            <Image
                src="/grafismo-06.png"
                alt="Grafismo"
                className="absolute rotate-[15deg] top-[-30px] md:top-[-90px] left-[-50px] md:left-[-55px] w-[180px] md:w-[320px] h-auto"
                width={320}
                height={504}
            />

            {/* Grafismo direito superior */}
            <Image
                src="/grafismo-02.png"
                alt="Grafismo"
                className="absolute right-0 md:right-10 top-[-150px] md:top-[-260px] w-[180px] md:w-[320px] h-auto"
                width={320}
                height={504}
            />

            {/* Grafismo direito inferior */}
            <Image
                src="/grafismo-07.png"
                alt="Grafismo"
                className="absolute rotate-[100deg] right-[-60px] md:right-[-80px] bottom-[-100px] md:bottom-[-140px] w-[200px] md:w-[361px] h-auto"
                width={361}
                height={304}
            />

            <h1 className="relative font-cursiveBold text-5xl md:text-7xl text-[#FFC945]">
                <Image
                    src="/caju-decoration.svg"
                    alt="Logo Caju"
                    className="absolute rotate-[-50deg] left-[-15px] md:left-[-35px] top-[-25px] md:top-[-45px] w-[40px] md:w-[79px] h-auto"
                    width={79}
                    height={46}
                />
                {title}
            </h1>
        </div>
    );
}
