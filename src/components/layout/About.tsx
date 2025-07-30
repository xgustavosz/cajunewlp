import Image from "next/image"
import Container from "../Container"

export default function About() {
    return (
        <div className="py-36 relative">
            <Container>
                <h1 className="uppercase font-neulisSansMedium text-center lg:text-start">Sobre a Caju</h1>
                <div className="flex items-center lg:items-start flex-col lg:flex-row space-x-16">
                    <div className="relative flex flex-col mx-auto items-center lg:items-start">
                        <p className="relative font-neulisSansMedium mb-10 text-4xl text-[#A24154] text-center lg:text-start">
                            <Image
                                src="/caju-decoration.svg"
                                alt="Caju Ícone"
                                width={63}
                                height={37}
                                className="absolute top-[-30px] hidden lg:block transform -translate-x-1/2 left-[380px] lg:translate-x-0"
                            />
                            Onde a dança é abrigo, expressão e encontro
                        </p>
                        <button className="relative z-10 bg-[#DA8331] max-w-60 w-full text-white px-4 py-2 rounded-sm cursor-pointer hover:bg-[#A24154] transition-colors">Veja mais</button>
                    </div>

                    <div className="hidden lg:block absolute left-[-120px] bottom-[-100px]">
                        <Image
                            src="/grafismo-02.png"
                            alt="Grafismo"
                            width={556}
                            height={610}
                            className="rotate-[-120deg] scale-x-[-1] z-0"
                        />
                    </div>

                    <div className="hidden lg:block absolute right-[-120px] top-[-120px]">
                        <Image
                            src="/grafismo-01.png"
                            alt="Grafismo"
                            width={326}
                            height={405}
                        />
                    </div>

                    <div className="font-neulisSansMedium flex flex-col gap-6 max-w-[688px] w-full text-[1.375rem] mt-14 text-center lg:text-start lg:mt-0">
                        <p>
                            A CAJU nasceu de um sonho que começou ainda na infância da professora Julia Caldeira — com um par de sapatilhas nos pés
                            e o coração cheio de vontade de dançar. Com o tempo, essa paixão se transformou em vocação: Julia passou a ensinar, coreografar e viver a dança em sua forma mais verdadeira.
                            Foi desse amor profundo que, em setembro de 2024, a CAJU ganhou vida em Pelotas.
                        </p>
                        <p>Mais do que uma escola, a CAJU é um espaço de acolhimento, expressão e liberdade. Aqui, cada passo é uma forma de se conectar consigo mesmo e com os outros, em um ambiente seguro, afetuoso e cheio de arte. Nossa missão é inspirar pessoas a dançar com o corpo, a mente e o coração.</p>
                        <p>Na CAJU, acreditamos que a dança transforma. Por isso, construímos um lugar onde cada movimento conta uma história e cada aluno é protagonista da sua própria jornada artística.</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}