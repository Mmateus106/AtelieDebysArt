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

// Configure here the atelier's official WhatsApp number.
export const whatsappNumber = "5500000000000";

export const whatsappMessage =
  "Ola! Vim pelo site e gostaria de pedir um bordado personalizado.";

export const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export const navigationLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contato", label: "Contato" }
];

export const heroContent = {
  eyebrow: "Bordados personalizados feitos a mao",
  title: "Transformamos fotos, memorias e presentes em bordados delicados e cheios de significado.",
  description:
    "No Atelie DebysArt, cada encomenda e criada com cuidado, conversa proxima e acabamento artesanal. O pedido acontece pelo WhatsApp e o envio e feito para todo o Brasil.",
  trust: "Atendimento humano, producao sob encomenda e envio via Correios."
};

export const galleryItems = [
  { image: img1, alt: "Exemplo de bordado artesanal em bastidor com acabamento delicado." },
  { image: img2, alt: "Bordado personalizado com visual suave e composicao elegante." },
  { image: img3, alt: "Peça bordada a mao com detalhes delicados e toque afetivo." },
  { image: img4, alt: "Bordado artesanal com composicao refinada e visual romantico." },
  { image: img5, alt: "Arte em bordado feita sob encomenda para presente ou decoracao." },
  { image: img6, alt: "Bordado manual com textura visivel e acabamento cuidadoso." },
  { image: img7, alt: "Peça personalizada em bastidor com linguagem visual delicada." },
  { image: img8, alt: "Close do bordado destacando pontos precisos e textura." },
  { image: img9, alt: "Imagem principal do atelie mostrando uma peça finalizada em destaque." }
];

export const processSteps = [
  {
    number: "01",
    title: "Envio da referencia",
    description: "Voce chama no WhatsApp e manda a foto ou a ideia que deseja transformar em bordado."
  },
  {
    number: "02",
    title: "Alinhamento do pedido",
    description: "Sao definidos tamanho, estilo, detalhes, prazo estimado e valores da encomenda."
  },
  {
    number: "03",
    title: "Producao artesanal",
    description: "A peça e feita manualmente, com atencao aos pontos, composicao e acabamento."
  },
  {
    number: "04",
    title: "Envio para sua casa",
    description: "Depois de pronta, a encomenda e embalada com carinho e enviada via Correios."
  }
];

export const portfolioSection = {
  eyebrow: "Exemplos de bordados",
  title: "Veja algumas pecas produzidas no atelie e entenda como funciona a encomenda.",
  description:
    "O objetivo do site e mostrar a qualidade do trabalho e facilitar o caminho ate a conversa no WhatsApp."
};

export const contactSection = {
  eyebrow: "Fale comigo",
  title: "Se voce ja tem uma foto ou ideia em mente, o proximo passo e me chamar no WhatsApp.",
  description:
    "Envie sua referencia, explique o que deseja bordar e receba orientacao sobre prazo, personalizacao e envio."
};
