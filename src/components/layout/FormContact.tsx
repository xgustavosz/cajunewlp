import Link from "next/link";
import Container from "../Container"
import Image from "next/image"

interface FormContactProps {
    isPage?: boolean;
}
export default function FormContact({ isPage }: FormContactProps) {
    return (
        <div className="relative bg-[#FCF8F3] py-[60px] overflow-hidden">
            <div className="absolute top-[-270px] left-1/2 -translate-x-1/2 z-0 w-[1440px] h-[894px]">
                <Image
                    src="/caju-logo-transparente.png"
                    alt="Logo Caju"
                    width={1440}
                    height={894}
                    className="object-contain"
                />
            </div>
            <Container>
                <div className="relative z-10">
                    <p className="uppercase font-medium text-[#3A222F]">Nosso contato</p>
                    <p className="text-[#A24154] font-medium text-[2.5rem] max-w-[663px]">Preencha o formulário e a gente entra em contato com você.</p>
                </div>

                <div className="relative z-10 flex flex-col md:flex-row gap-4 justify-center lg:justify-between items-center mt-[70px]">

                    {!isPage && <Image src="/bailarina-caju.png" alt="Bailarina" width={474} height={633} className="hidden lg:block" />}

                    {isPage && (
                        <div className="flex flex-col gap-[30px] text-[#292A1C] text-[1.125rem] mb-10 md:mb-0">
                            <div>
                                <p className="font-cursiveMedium text-[1.375rem] text-[#5182E5]">Escola CAJU</p>
                                <p className="text-xl">Rua General Osório, 1306</p>
                                <p className="text-xl">Centro - Pelotas - RS</p>
                            </div>

                            <div>
                                <p><strong>Telefone:</strong> (13) 8166-3998</p>
                                <p><strong>Email:</strong> e-mail@e-email</p>
                            </div>

                            <div>
                                <p>Siga-nos</p>
                                <Link href="https://www.instagram.com/cajudanca/" target="_blank">
                                    <Image
                                        src="/instagramIcon.svg"
                                        alt="Logo Instagram"
                                        width={25}
                                        height={25}
                                    />
                                </Link>
                            </div>
                        </div>
                    )}

                    <div className="p-[50px] bg-white shadow-2xl max-w-[679px] w-full">
                        <p className="font-cursiveMedium text-[#5182E5] text-2xl">Vamos dançar juntos?</p>
                        <p className="text-[#3A222F]">Preencha com seus dados e venha descobrir o seu ritmo com a CAJU.</p>
                        <div className="mt-10">
                            <input type="text" placeholder="Nome" className="w-full h-[50px] bg-[#FCF8F3] mb-4 px-[30px]" />
                            <input type="email" placeholder="E-mail" className="w-full h-[50px] bg-[#FCF8F3] mb-4 px-[30px]" />
                            <input type="tel" placeholder="Telefone" className="w-full h-[50px] bg-[#FCF8F3] mb-4 px-[30px]" />
                            <textarea placeholder="Mensagem" className="w-full h-[100px] bg-[#FCF8F3] mb-4 px-[30px] resize-none py-[15px]"></textarea>
                            <button className="bg-[#DA8331] cursor-pointer hover:bg-[#A24154] text-white w-full h-[50px] font-medium transition-colors">Enviar</button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}