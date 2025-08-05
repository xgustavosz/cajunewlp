import EventDetails from "./EventDetails";

export default function EventComponent() {
  const events = [
    {
      firstTitle: "Equipe de",
      secondTitle: "Competições",
      firstDescription:
        "No início de cada ano, a Caju forma uma equipe de competições pré selecionada, com alunos que desejam expandir seus horizontes com a arte da Dança.",
      secondDescription:
        "O nosso objetivo é estimular o desafio, comprometimento, disciplina, e trabalho em equipe através de participações em eventos competitivos dentro e fora da cidade.",
    },
    {
      firstTitle: "Festa da",
      secondTitle: "Família",
      firstDescription:
        "A Festa da Família é uma mostra pedagógica anual criada com a intenção de mostrar o nosso trabalho para amigos e familiares.",
      secondDescription:
        "É uma tarde leve, divertida e cheia de dança, que encanta todos que conhecem ou não o trabalho da Caju.",
    },
    {
      firstTitle: "Aulas especiais",
      secondTitle: "e temáticas",
      firstDescription:
        "Durante o ano, temos algumas datas especiais que fazemos questão de comemorar com nossos Cajuzinhos.",
      secondDescription:
        "Carnaval, Páscoa, Dia das Mães e dos Pais, Festa Junina, etc. Todas as aulas especiais são pensadas com muito carinho para que os nossos alunos possam aprender e se divertir ao mesmo tempo.",
    },
    {
      firstTitle: "Espetáculo de",
      secondTitle: "Encerramento",
      firstDescription:
        "E para encerrar o ano, nossa escola promove um lindo Espetáculo. Com temática criativa, figurinos encantadores e coreografias inéditas, todos os bailarinos da escola são convidados para participar desse verdadeiro show.",
    },
  ];

  return (
    <div className="flex flex-col gap-10">
      {events.map((event, index) => (
        <EventDetails
          key={index}
          firstTitle={event.firstTitle}
          secondTitle={event.secondTitle}
          firstDescription={event.firstDescription}
          secondDescription={event.secondDescription}
          reverse={index % 2 === 0}
          isFirst={index === 0}
          imageStartIndex={index * 4 + 1}
        />
      ))}
    </div>
  );
}
