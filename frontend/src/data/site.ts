import img1 from "../assets/images/img1.jpeg";
import img2 from "../assets/images/img2.jpeg";
import img3 from "../assets/images/img3.jpeg";
import img4 from "../assets/images/img4.jpeg";
import img5 from "../assets/images/img5.jpeg";
import img6 from "../assets/images/img6.jpeg";
import img7 from "../assets/images/img7.jpeg";
import img8 from "../assets/images/img8.jpeg";
import img9 from "../assets/images/img9.jpeg";

export const brandName = "Atelie DebysArt";

// TODO: Replace this number with the atelier's official WhatsApp number.
export const whatsappNumber = "5500000000000";

export const whatsappMessage =
  "Olá! Vim pelo site e gostaria de pedir um bordado personalizado.";

export const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export const navigationLinks = [
  { href: "#galeria", label: "Galeria" },
  { href: "#sobre", label: "Sobre" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#faq", label: "FAQ" }
];

export const trustPill = "Atendimento humano, peças sob encomenda e envio para todo o Brasil.";

export const heroHighlights = [
  "Peças autorais feitas ponto a ponto",
  "Personalização para presentes, decoração e memórias afetivas",
  "Produção artesanal com alinhamento direto pelo WhatsApp"
];

export const galleryItems = [
  { image: img1, alt: "Bordado artesanal com composição floral delicada em bastidor." },
  { image: img2, alt: "Peça bordada personalizada com acabamento refinado em tecido claro." },
  { image: img3, alt: "Bordado manual com visual romântico e detalhes delicados." },
  { image: img4, alt: "Composição de bordado artesanal com linhas suaves e textura premium." },
  { image: img5, alt: "Peça personalizada criada em bordado manual com estética afetiva." },
  { image: img6, alt: "Bordado feito à mão com cuidado nos pequenos detalhes e acabamento limpo." },
  { image: img7, alt: "Arte em bastidor com personalidade delicada e estilo autoral." },
  { image: img8, alt: "Bordado personalizado em close destacando textura e precisão dos pontos." },
  { image: img9, alt: "Peça finalizada de bordado artesanal pronta para presente ou decoração." }
];

// TODO: Replace this placeholder biography with verified information from Débora's LinkedIn profile.
// The referenced LinkedIn page could not be reliably parsed during generation.
export const aboutContent = {
  eyebrow: "Sobre a artesã",
  title: "Débora transforma ideias e memórias em bordados feitos com tempo, presença e intenção.",
  paragraphs: [
    "À frente do Atelie DebysArt, Débora une sensibilidade artesanal e olhar cuidadoso para criar peças personalizadas que carregam significado. Cada encomenda nasce de uma conversa próxima, onde referências, estilo e expectativa são alinhados com calma.",
    "O resultado é um bordado que não busca volume, e sim valor percebido: acabamento delicado, composição elegante e a sensação de receber algo realmente feito para aquela pessoa, ocasião ou espaço."
  ],
  aside: "Cada peça é desenvolvida sob encomenda, com atenção ao acabamento e ao vínculo emocional que o bordado pode carregar."
};

export const processSteps = [
  {
    title: "Contato pelo WhatsApp",
    description: "Você envia sua ideia, referência ou ocasião especial para iniciar o atendimento."
  },
  {
    title: "Alinhamento da proposta",
    description: "Débora entende o estilo da peça, personalização desejada e detalhes importantes."
  },
  {
    title: "Preço e prazo",
    description: "Após a definição da proposta, você recebe orçamento e estimativa de produção."
  },
  {
    title: "Produção artesanal",
    description: "O bordado é feito manualmente, com tempo de execução compatível com o cuidado da peça."
  },
  {
    title: "Envio via Correios",
    description: "Depois de finalizado, o pedido é embalado com carinho e enviado para todo o Brasil."
  }
];

export const differentials = [
  {
    title: "Bordado realmente artesanal",
    description: "Nada seriado: cada peça é construída manualmente para refletir delicadeza e autenticidade."
  },
  {
    title: "Personalização com propósito",
    description: "Nomes, frases, datas, cores e referências ganham forma de maneira elegante e afetiva."
  },
  {
    title: "Atendimento humano",
    description: "Você conversa direto com quem cria a peça, o que torna o processo mais próximo e seguro."
  },
  {
    title: "Atenção aos detalhes",
    description: "Composição, acabamento e harmonia visual são tratados com o mesmo cuidado do bordado."
  },
  {
    title: "Envio nacional",
    description: "As encomendas são despachadas via Correios para atender clientes em diferentes regiões."
  }
];

// TODO: Replace these placeholder testimonials with real customer messages and names.
export const testimonials = [
  {
    quote:
      "A peça ficou ainda mais bonita do que eu imaginava. Dá para sentir o cuidado em cada detalhe.",
    author: "Cliente Placeholder",
    context: "Presente personalizado"
  },
  {
    quote:
      "O atendimento foi super atencioso e o resultado trouxe exatamente a delicadeza que eu queria.",
    author: "Cliente Placeholder",
    context: "Decoração afetiva"
  },
  {
    quote:
      "Recebi tudo muito bem embalado e o bordado chegou impecável. É o tipo de trabalho que emociona.",
    author: "Cliente Placeholder",
    context: "Encomenda enviada pelos Correios"
  }
];

export const faqs = [
  {
    question: "Como faço para encomendar um bordado?",
    answer:
      "Basta clicar em qualquer botão de WhatsApp do site e enviar sua ideia, referência ou necessidade. O atendimento começa por lá."
  },
  {
    question: "Qual é o prazo de produção?",
    answer:
      "O prazo varia conforme tamanho, nível de detalhe e fila de encomendas. Ele é informado junto com o orçamento, antes da confirmação."
  },
  {
    question: "Posso pedir uma peça totalmente personalizada?",
    answer:
      "Sim. O ateliê trabalha com encomendas sob medida, então estilo, frase, paleta e composição podem ser alinhados no atendimento."
  },
  {
    question: "Vocês enviam para outras cidades e estados?",
    answer:
      "Sim. As peças são enviadas pelos Correios, com envio nacional para diferentes regiões do Brasil."
  },
  {
    question: "Como o preço é definido?",
    answer:
      "O valor depende do tipo de peça, tamanho, complexidade do bordado e nível de personalização solicitado."
  }
];
