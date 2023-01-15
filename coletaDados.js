import { XMLHttpRequest } from "XMLHttpRequest";

function getDadosApi(urL) {
    let requisita = new XMLHttpRequest();
    requisita.open("GET", urL, false);
    requisita.send();
    return requisita.responseText;
  };
  
  const arrayBooks = JSON.parse(getDadosApi("http://localhost:3000/book"));
  var content = "";
  const listArrayBooks = arrayBooks.map((book) => {
    console.log(book);
    content = content +`<article class="book" name= ${book.name}>
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
  });
  console.log(content);

export default content;