import Link from "next/link";
import CardEvent from "../CardEvent";
import Container from "../Container";
import Image from "next/image";

export default function Event() {
    const events = [
        {
            imageUrl: "/eventImage01.jpg",
            title: "Equipe de competições",
            description: "Dança, equipe e superação"
        },
        {
            imageUrl: "/eventImage02.jpg",
            title: "Festa da família",
            description: "Dança, amor e conexão"
        },
        {
            imageUrl: "/eventImage03.jpg",
            title: "Aulas especiais e temáticas",
            description: "Diversão, afeto e aprendizado"
        },
        {
            imageUrl: "/eventImage04.jpg",
            title: "Espetáculo de encerramento",
            description: "Arte, magia e celebração"
        },
    ];

    return (
        <div className="relative bg-white overflow-hidden">
            {/* Grafismos que somem em telas pequenas */}
            <div className="hidden md:block absolute top-[330px] right-[-220px] z-0">
                <Image
                    src="/grafismo-03.png"
                    alt="Grafismo"
                    width={633}
                    height={349}
                    className="rotate-[-100deg]"
                />
            </div>
            <div className="hidden md:block absolute top-[200px] left-[-50px] z-0">
                <Image
                    src="/grafismo-04.png"
                    alt="Grafismo"
                    width={537}
                    height={424}
                    className="rotate-[-100deg]"
                />
            </div>

            <Container>
                <div className="flex flex-col items-center gap-8 py-16 relative z-10">
                    <div className="text-center px-4">
                        <p className="text-lg font-medium uppercase">Nossos eventos</p>
                        <p className="relative text-[1.625rem] font-medium">
                            <Image
                                src="/caju-decoration.svg"
                                alt="Caju Ícone"
                                width={63}
                                height={37}
                                className="absolute top-[-25px] hidden lg:block transform right-[-32px] lg:translate-x-0"
                            />
                            Vem ver os eventos que enchem nosso ano de energia e alegria.
                        </p>
                    </div>

                    {/* Grade responsiva dos cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-10 px-4">
                        {events.map((event, index) => (
                            <CardEvent
                                key={index}
                                imageUrl={event.imageUrl}
                                title={event.title}
                                description={event.description}
                            />
                        ))}
                    </div>

                    <Link
                        href="#"
                        className="text-center text-[#DA8331] font-medium underline"
                    >
                        Veja programação completa
                    </Link>
                </div>
            </Container>
        </div>
    );
}
