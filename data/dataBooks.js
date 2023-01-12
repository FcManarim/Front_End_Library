import  Book  from "./Book.js";

const verity = new Book(
  "Verity",
  "Colleen Hoover",
  "Um casal apaixonado. Uma intrusa. Três mentes doentias. Finalista do prêmio Goodreads como melhor romance de 2019, Verity é o primeiro thriller de Colleen Hoover e deixa os leitores envolvidos do começo ao fim.",
  "Portugues",
  "8501117846",
  "Verity.png",
  30.45,
  "2023-01-07T10:32:12.271Z"
);
const atomicHabit = new Book(
  "Atomic Habits",
  "James Clear",
  "Tiny changes, remarkable results. This is the way.",
  "Ingles",
  "0593189647",
  "AtomicHabist.png",
  30,
  "2023-01-07T13:36:02.286Z"
);
const pacienteSilenciosa = new Book(
  "Alex Michaelides",
  "Após cometer o assassinado de seu marido, uma mulher se recusa a falar qualquer coisa, deixando suspeitas e mistérios não resolvidos sobre o caso. E o terapeuta Theo Faber está obcecado em descobrir o motivo da violencia e do silencio. Só ela sabe o que aconteceu. Só ele pode fazê-la falar. A paciente silenciosa é um daqueles livros que não saem da cabeça do leitor, quer ele queira, quer não.",
  "Portugues",
  "8501116432",
  "PacienteMisteriosa.png",
  50.23,
  "2023-01-07T10:32:12.271Z"
);
const previsivelmenteIrracional = new Book(
  "Previsivelmente Irracional",
  "Dan Ariely",
  "Sempre acreditamos que nossas escolhas são inteligentes e racionais, mas Dan Ariely joga por terra essas crenças com revelações surpreendentes que mudam a forma como entendemos o comportamento humano.  ",
  "Portugues",
  "854310999X",
  "PrevisivelmenteIrracional.png",
  40.85,
  "2023-01-07T10:46:27.209Z"
);

export const arrayBooks = [
  verity,
  atomicHabit,
  pacienteSilenciosa,
  previsivelmenteIrracional,
];


export default arrayBooks;
