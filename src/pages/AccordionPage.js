import Accordion from "../components/Accordion";

function AccordeonPage() {

  const props = 

    [
      {
        id: '23hhs',
        label: 'Primeira div',
        content: 'Conteudo da primeira div'
      },
      {
        id: '7489yhg',
        label: 'segunda div',
        content: 'Conteudo da segunda div'
      },
      {
        id: '32849jashb',
        label: 'All of your friends are bitches?',
        content: 'I bet'
      }
    ]

  return (
    <Accordion items={props}/>
  );
}

export default AccordeonPage;
