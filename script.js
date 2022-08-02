let books = [];

if (books === []) {
  books = [
    {
      titulo: '100 años de soledad',
      author: 'Gabriel Garcia Marquez',
    },
    {
      titulo: 'El tirano',
      author: 'Massimo Manfredi',
    },
  ];
}

function storage(ok) {
  window.localStorage.setItem('localBooks', JSON.stringify(ok));
}

function getBooks() {
  books = JSON.parse(window.localStorage.getItem('localBooks'));
}

getBooks();

function display() {
  const bookList = document.querySelector('.books-display');
  let displ = '';
  books.forEach((el, index) => {
    displ += `
    <div class="oneBook" id="book${index}">
    <h4> ${el.titulo} </h4>
    <h4> ${el.author} </h4> 
    <button class="btn-display" id="${index}">remove</button> 
    </div>
    `;
  });
  bookList.innerHTML = displ;
}

// ---------ADD-------------

const newB = document.getElementById('bk');
newB.addEventListener('submit', (event) => {
  event.preventDefault();
  const reciTi = document.getElementById('recibe-ti').value;
  const reciAu = document.getElementById('recibe-au').value;

  if (reciTi !== '' && reciAu !== '') {
    const newBook = {
      titulo: reciTi,
      author: reciAu,
    };
    books.unshift(newBook);
    storage(books);
    display();
  }
});

// -------DELETE----------
function deleteBook(evento) {
  books = books.filter((el, index) => evento.target.id !== index.toString());
  storage(books);
  display();
}

document.addEventListener('click', (e) => {
  if (e.target.matches('.btn-display')) {
    deleteBook(e);
  }
});

display();
