import Image from "next/image"
import ClassAbout from "./ClassAbout"
import Container from "./Container"

export default function ClassDetails() {
    const classData = [
        {
            title: "Cajuzinho Class",
            firstText: "Essa metodologia abrange as turminhas de dança para crianças entre 2 e 4 anos. Nessa aula, nossos pequenos bailarinos são convidados a explorar o universo da dança de forma lúdica e divertida.",
            secondText: "A aula mescla músicas de Ballet e Jazz com brincadeiras que desenvolvem a coordenação, ritmo, expressão corporal e facial. Tudo isso em aulas envolventes, que transformam a criança em protagonista e as divertem em um ambiente acolhedor e criativo.",
            imageUrl: "/class-image01.jpg"
        },
        {
            title: "Petit Caju",
            firstText: "Essa é a turma para crianças de 5 a 7 anos que desejam dar os primeiros passos em um mundo mais dinâmico e expressivo. Os pequenos terão a oportunidade de dar início a uma nova variedade de passos de dança, enquanto aprimoram sua flexibilidade e coordenação.",
            secondText: "Ainda mantendo o foco no universo lúdico, cada aula é envolvida por temas criativos e brincadeiras que estimulam a imaginação e a expressão, desenvolvendo não apenas suas habilidades de dança, mas também a confiança e a alegria de se mover.",
            imageUrl: "/class-image02.jpg"
        },
        {
            title: "Jazz Dance - Preparatório",
            firstText: "É nessa turma que iniciamos os primeiros anos no Jazz Dance (8-9 anos). Aprofundamos um pouco mais da técnica, aprendendo sobre contagem musical, ondulações, passagens, saltos e piruetas mais elaboradas.",
            secondText: "Essa fase é perfeita para desenvolver a confiança, preparando para novos desafios dentro da dança, então as aulas são projetadas para estimular a curiosidade. Nessa idade também é possível iniciar o caminho nas competições e festivais de Dança.",
            imageUrl: "/class-image03.jpg"
        },
        {
            title: "Jazz Dance - Júnior",
            firstText: "No Jazz Júnior, bailarinos e bailarinas dos 10 aos 11 anos começam a colocar em prática tudo o que aprenderam nos anos preparatórios.",
            secondText: "O trabalho da técnica é mais presente, junto com exercícios de força, flexibilidade, resistência e equilíbrio. Juntando tudo com a potência do Jazz, é nessa faixa etária que coreografias mais elaboradas e desafiadoras começam a surgir.",
            imageUrl: "/class-image02.jpg"
        },
        {
            title: "Jazz Dance - Infanto-Juvenil",
            firstText: "No nível Infanto-Juvenil (12 a 13 anos), os bailarinos continuam com o trabalho do Jazz Júnior. A técnica é inteiramente presente nas aulas, mas ainda mantendo o desenvolvimento evolutivo de cada artista.",
            imageUrl: "/class-image03.jpg"
        },
        {
            title: "Jazz Dance - Juvenil",
            firstText: "Para o Juvenil (14 a 16 anos), além do trabalho de técnica e capacidades físicas em sala de aula, também começamos a explorar as vertentes do Jazz. Coreografias com temáticas mais profundas, aulas de nível técnico que acompanhe a faixa etária dos bailarinos e trabalho em outras modalidades que complementam o Jazz Dance.",
            imageUrl: "/class-image02.jpg"
        },
        {
            title: "Jazz Dance - Avançado",
            firstText: "No Jazz Avançado, o trabalho com as vertentes do Jazz é concretizado e trabalhado em sala de aula. As aulas são coreografadas de forma técnica, acompanhando o nível da turma e a dinâmica de exercícios de força, flexibilidade e potência são mais frequentes.",
            imageUrl: "/class-image03.jpg"
        },
        {
            title: "Jazz Dance - Adulto Iniciante",
            firstText: "Nessa novidade para 2025, a turma de Jazz Adulto Iniciante explora a técnica do Jazz de forma suave e envolvente, criando um ambiente inspirador. Cada aula será uma jornada, permitindo que você se conecte com o ritmo e a expressão pessoal, enquanto aprende os fundamentos técnicos dessa modalidade.",
            secondText: "Mesmo que você não tenha nenhuma experiência com a dança, guiaremos você nesse caminho, fazendo com que a experiência seja tão prazerosa quanto a própria dança.",
            imageUrl: "/class-image02.jpg"
        },
    ]

    const grafismos = [
        {
            src: "/grafismo-04.png",
            alt: "Grafismo",
            width: 522,
            height: 412,
            className: "absolute top-[-180px] right-0 rotate-[230deg]"
        },
        {
            src: "/grafismo-05.png",
            alt: "Grafismo",
            width: 154,
            height: 278,
            className: "absolute top-[720px] left-[270px]"
        },
        {
            src: "/grafismo-06.png",
            alt: "Grafismo",
            width: 555,
            height: 874,
            className: "absolute top-[1910px] left-[-160px]"
        },
        {
            src: "/grafismo-03.png",
            alt: "Grafismo",
            width: 469,
            height: 259,
            className: "absolute top-[2600px] right-[-80px] rotate-[40deg]"
        },
        {
            src: "/grafismo-02.png",
            alt: "Grafismo",
            width: 420,
            height: 461,
            className: "absolute top-[4370px] left-[0px] rotate-[-50deg]"
        },
    ];

    return (
        <Container>
            <div className="relative py-[100px] overflow-hidden">
                {grafismos.map((grafismo, index) => (
                    <Image
                        key={index}
                        src={grafismo.src}
                        alt={grafismo.alt}
                        width={grafismo.width}
                        height={grafismo.height}
                        className={grafismo.className}
                    />
                ))}

                <div className="flex flex-col">
                    <p className="uppercase font-medium text-[#3A222F]">Nossas turmas</p>
                    <p className="relative font-cursiveMedium text-[#A24154] font-medium text-[2rem]">
                        Cada turma, uma nova possibilidade de expressão.
                        <Image src="/caju-decoration.svg" alt="Caju Ícone" width={63} height={37} className="hidden lg:block absolute top-[-15px] left-[800px]" />
                    </p>
                </div>
                <div className="flex flex-col gap-10 w-full">
                    {classData.map((item, index) => (
                        <ClassAbout key={index} title={item.title} firstText={item.firstText} secondText={item.secondText} imageUrl={item.imageUrl} reverse={index % 2 !== 0} />
                    ))}
                </div>
            </div>
        </Container>
    )
}