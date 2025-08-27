import Image from 'next/image'
import Container from '../Container'
import Link from 'next/link'

export default function Footer() {
    return (
        <div className='relative bg-[#3A222F] overflow-hidden'>
            <div className='md:block hidden absolute left-[60%] -translate-x-1/2 top-[-310px]'>
                <Image
                    src="/grafismo-02.png"
                    alt="Grafismo"
                    width={352}
                    height={386}
                />
            </div>
            <div className='md:block hidden absolute right-[-60px] bottom-[-230px]'>
                <Image
                    src="/grafismo-05.png"
                    alt="Grafismo"
                    width={352}
                    height={386}
                    className='rotate-100'
                />
            </div>

            <Container>
                <div className='flex flex-col md:flex-row justify-between items-center md:items-start gap-12 py-[60px] md:py-[85px] text-white'>
                    <address className="not-italic flex flex-col items-center md:items-start max-w-full md:max-w-[296px] text-lg">
                        <p className="text-[#FFC945] uppercase font-bold">Onde estamos</p>
                        <div className="h-[5px] w-[71px] bg-[#A24154] my-6" />

                        <p className="font-medium">Escola CAJU</p>

                        <div className='flex gap-2'>
                            <Image
                                src="/mapIcon.svg"
                                alt="Pin Icon"
                                width={14}
                                height={14}
                            />
                            <p>R. Gen. Osório, 1306 - Centro,</p>
                        </div>
                        <p>Pelotas - RS, 96020-000</p>

                        <div className="mt-6 flex flex-col gap-1">
                            <p>
                                Whatsapp:{" "}
                                <a href="https://wa.me/555381663998" className="hover:text-[#FFC945] hover:underline transition-colors" target="_blank" rel="noopener noreferrer">
                                    (53) 8166-3998
                                </a>
                            </p>
                            <p>
                                Email:{" "}
                                <a href="mailto:caju@cajudanca.com" className="hover:text-[#FFC945] hover:underline transition-colors">
                                    caju@cajudanca.com
                                </a>
                            </p>
                        </div>
                    </address>

                    <div className='flex-col items-center self-center hidden md:flex'>
                        <Image
                            src="/caju-logo.svg"
                            alt="Logo Caju"
                            width={275}
                            height={275}
                        />
                        <Link href="https://www.brainny.cc">
                            <Image
                                src="/brainny-logo.svg"
                                alt="Logo Brainny"
                                width={86}
                                height={46}
                                className="cursor-pointer"
                            />
                        </Link>
                    </div>

                    <div className='flex flex-col items-center md:items-start text-lg'>
                        <p className='text-[#FFC945] uppercase font-bold'>Social</p>
                        <div className='h-[5px] w-[71px] bg-[#A24154] my-6' />
                        <div className='relative z-10 flex items-center gap-2 mb-11'>
                            <Image
                                src="/instagramIcon.svg"
                                alt="Logo Instagram"
                                width={25}
                                height={25}
                            />
                            <Link className='underline hover:text-[#FFC945] transition-colors' href='https://www.instagram.com/cajudanca/'>@cajudanca</Link>
                        </div>
                        <p className='relative font-cursiveBold text-[#FFC945] max-w-[170px] text-center md:text-start'>
                            <Image
                                src="/underline.svg"
                                alt="Underline"
                                width={74}
                                height={7}
                                className="absolute bottom-[0] left-1/2 -translate-x-1/2 md:left-[0] transform md:translate-x-0"
                            />
                            Viva Experiências, crie memórias e dance com o seu coração
                        </p>
                    </div>

                    <div className='flex flex-col items-center self-center md:hidden'>
                        <Image
                            src="/caju-logo.svg"
                            alt="Logo Caju"
                            width={275}
                            height={275}
                        />
                        <Link href="https://www.brainny.cc">
                            <Image
                                src="/brainny-logo.svg"
                                alt="Logo Brainny"
                                width={86}
                                height={46}
                                className="cursor-pointer"
                            />
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}
