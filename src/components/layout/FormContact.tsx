"use client"

import { useState } from "react"
import Link from "next/link"
import Container from "../Container"
import Image from "next/image"

interface FormContactProps {
    isPage?: boolean;
}

export default function FormContact({ isPage }: FormContactProps) {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")
    const [mensagem, setMensagem] = useState("")

    const formatarTelefone = (valor: string) => {
        const apenasNumeros = valor.replace(/\D/g, "")
        if (apenasNumeros.length <= 10) {
            return apenasNumeros
                .replace(/^(\d{2})(\d)/, "($1) $2")
                .replace(/(\d{4})(\d)/, "$1-$2")
        } else {
            return apenasNumeros
                .replace(/^(\d{2})(\d)/, "($1) $2")
                .replace(/(\d{5})(\d)/, "$1-$2")
        }
    }

    const handleSubmit = () => {
        const numeroWhatsApp = "5553981663998"
        const texto = `Nome: ${nome}
Email: ${email}
Celular: ${telefone}
Mensagem: ${mensagem}`
        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`
        window.open(url, "_blank")
    }

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
                    <p className="text-[#A24154] font-medium text-[2.5rem] max-w-[663px]">
                        Preencha o formulário e a gente entra em contato com você.
                    </p>
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
                                <p><strong>Telefone:</strong> (53) 8166-3998</p>
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
                            <input
                                type="text"
                                placeholder="Nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, ""))}
                                className="w-full h-[50px] bg-[#FCF8F3] mb-4 px-[30px]"
                            />
                            <input
                                type="email"
                                placeholder="E-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full h-[50px] bg-[#FCF8F3] mb-4 px-[30px]"
                            />
                            <input
                                type="tel"
                                placeholder="Telefone"
                                value={telefone}
                                onChange={(e) => setTelefone(formatarTelefone(e.target.value))}
                                maxLength={15}
                                className="w-full h-[50px] bg-[#FCF8F3] mb-4 px-[30px]"
                            />
                            <textarea
                                placeholder="Mensagem"
                                value={mensagem}
                                onChange={(e) => setMensagem(e.target.value)}
                                className="w-full h-[100px] bg-[#FCF8F3] mb-4 px-[30px] resize-none py-[15px]"
                            ></textarea>
                            <button
                                onClick={handleSubmit}
                                className="bg-[#DA8331] cursor-pointer hover:bg-[#A24154] text-white w-full h-[50px] font-medium transition-colors"
                            >
                                Enviar
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
