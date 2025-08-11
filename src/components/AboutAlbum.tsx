import Image from "next/image";
import Container from "./Container";

export default function AboutAlbum() {
    return (
        <div className="bg-[#CAD36B] pt-10 pb-[118px] px-4 md:px-10">
            <Container>
                <div className="text-center mb-10">
                    <p className="text-[1.25rem] uppercase font-medium text-[#3A222F] tracking-wider">Do sonho à cena</p>
                    <p className="text-[2rem] font-semibold text-[#A24154]">
                        Aqui, cada imagem tem alma, ritmo e história.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4">
                    <Image
                        src="/about-image01.jpg"
                        alt="Album Caju"
                        width={407}
                        height={320}
                        className="rounded-md object-cover w-full h-full"
                    />

                    <Image
                        src="/about-image03.jpg"
                        alt="Album Caju"
                        width={407}
                        height={560}
                        className="hidden md:flex rounded-md object-cover w-full h-full md:row-span-2"
                    />

                    <Image
                        src="/about-image04.jpg"
                        alt="Album Caju"
                        width={407}
                        height={320}
                        className="rounded-md object-cover w-full h-full"
                    />

                    <Image
                        src="/about-image03.jpg"
                        alt="Album Caju"
                        width={407}
                        height={560}
                        className="flex md:hidden rounded-md object-cover w-full h-full md:row-span-2"
                    />

                    <Image
                        src="/about-image02.jpg"
                        alt="Album Caju"
                        width={407}
                        height={320}
                        className="rounded-md object-cover w-full h-full"
                    />

                    <Image
                        src="/about-image05.jpg"
                        alt="Album Caju"
                        width={407}
                        height={320}
                        className="rounded-md object-cover w-full h-full"
                    />
                </div>

            </Container>
        </div>
    );
}
