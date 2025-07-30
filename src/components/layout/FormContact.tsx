import Container from "../Container"
import Image from "next/image"

export default function FormContact() {
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

                <div className="relative z-10 flex gap-4 justify-center lg:justify-between items-center mt-[70px]">
                    <Image src="/bailarina-caju.png" alt="Bailarina" width={474} height={633} className="hidden lg:block" />
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