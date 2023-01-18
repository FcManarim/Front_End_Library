// import arrayBooks from "./data/dataBooks.js";
// import content from './coletaDados.js'
// console.log(content)
// const injectHtml = document.querySelector('.maincontent')
// injectHtml.innerHTML = content;

// import content from "./coletaDados";

//CODIGO USANDO OBJETOS LOCAIS PARA TESTE
// const listArrayBooks = arrayBooks.map((book) => {
//   let bookArticle = document.createElement("article");
//   bookArticle.classList.add("book");
//   bookArticle.setAttribute("name", book.name);

//   bookArticle.innerHTML = `
//     <figure class="book__image">
//       <img class="bookImage__size" src= ../assets/images/${book.image} alt="" loading="lazy" />
//     </figure>
//     <h1 class="book__name">${book.name}</h1>
//     <ul class="book__features">
//       <li><b>Autor:</b><span> ${book.author}l</span></li>
//       <li><b>Sinopse:</b><span> ${book.sinopse}</span></li>
//       <li><b>Idioma:</b><span> ${book.idiom} </span></li>
//       <li><b>ISBN:</b><span> ${book.isbn}</span></li>
//       <li><b>Preço:</b> R$<span> ${book.price}</span></li>
//       <li><b>Data Lançamento:</b><span> ${book.date} </span></li>
//       <li><b>Disponibilidade:</b><span></span></li>
//     </ul>
//   `;
//   return bookArticle;
// });

// const main = document.querySelector(".maincontent");

// listArrayBooks.forEach((book) => {
//   main.append(book);
// });

const url = "http://localhost:3000/book/";

async function getAllbooks() {
  const response = await fetch(url);
  console.log(response);
  const data = await response.json();
  console.log(data);
  let content = ``
  const addElemntHtml = document.querySelector(".maincontent");
  data.map((book) => {
  
    content = content + `<article class="book" name= ${book.name}>
      <figure class="book__image">
        <img class="bookImage__size" src= ../assets/images/${book.image} alt="" loading="lazy" />
      </figure>
      <h1 class="book__name">${book.name}</h1>
      <ul class="book__features">
        <li><b>Autor:</b><span> ${book.author}l</span></li>
        <li><b>Sinopse:</b><span> ${book.sinopse}</span></li>
        <li><b>Idioma:</b><span> ${book.idiom} </span></li>
        <li><b>ISBN:</b><span> ${book.isbn}</span></li>
        <li><b>Preço:</b> R$<span> ${book.price}</span></li>
        <li><b>Data Lançamento:</b><span> ${book.date} </span></li>
        <li><b>Disponibilidade:</b><span></span></li>
      </ul>
      </article>`;
      addElemntHtml.innerHTML = content
      console.log(content);
  });
  
  
  // addElemntHtml.innerHTML = content;
}
getAllbooks();
