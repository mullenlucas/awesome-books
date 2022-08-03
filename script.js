class StorageB {
  static storage(ok) {
    window.localStorage.setItem('localBooks', JSON.stringify(ok));
  }

  static getBooks = () => {
    let books = [
      {
        titulo: '100 años de soledad',
        author: 'Gabriel Garcia Marquez',
      },
      {
        titulo: 'El tirano',
        author: 'Massimo Manfredi',
      },
    ];
    if (window.localStorage.getItem('localBooks') === null) {
      this.storage(books);
    }
    books = JSON.parse(window.localStorage.getItem('localBooks'));
    return books;
  }

  static display() {
    const bookList = document.querySelector('.books-display');
    let displ = '';
    this.getBooks().forEach((el, index) => {
      displ += `      
      <div class="oneBook" id="book${index}">
      <div class='infobook'>
      <h4> '${el.titulo}' by ${el.author} </h4> 
      </div>
      <div class='btn-delete'>
      <button class="btn-display" id="${index}">remove</button>
      </div> 
      </div>
      `;
    });
    bookList.innerHTML = displ;
  }

  static addBook() {
    const books = this.getBooks();
    const reciTi = document.getElementById('recibe-ti').value;
    const reciAu = document.getElementById('recibe-au').value;

    if (reciTi !== '' && reciAu !== '') {
      const newBook = {
        titulo: reciTi,
        author: reciAu,
      };
      books.unshift(newBook);
      this.storage(books);
      this.display();
    }
  }

  static deleteBook(evento) {
    let books = this.getBooks();
    books = books.filter((el, index) => evento.target.id !== index.toString());
    this.storage(books);
    this.display();
  }
}

// ---------ADD-------------

const newB = document.getElementById('bk');
newB.addEventListener('submit', (event) => {
  event.preventDefault();
  StorageB.addBook();
});

// -------DELETE----------

document.addEventListener('click', (e) => {
  if (e.target.matches('.btn-display')) {
    StorageB.deleteBook(e);
  }
});

StorageB.display();

// -------NAV--------

const listBtn = document.getElementById('list-link');
const addBtn = document.getElementById('add-link');
const contactBtn = document.getElementById('contact-link');
const listBox = document.querySelector('.list');
const addBox = document.querySelector('.add');
const contactBox = document.querySelector('.contact');

listBtn.addEventListener('click', () => {
  listBox.style.display = 'flex';
  addBox.style.display = 'none';
  contactBox.style.display = 'none';
});

addBtn.addEventListener('click', () => {
  listBox.style.display = 'none';
  addBox.style.display = 'flex';
  contactBox.style.display = 'none';
});

contactBtn.addEventListener('click', () => {
  listBox.style.display = 'none';
  addBox.style.display = 'none';
  contactBox.style.display = 'flex';
});

const today = new Date();
const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

const dateTime = `${date} ${time}`;

const dateId = document.getElementById('date-time-id');

dateId.innerHTML = dateTime;