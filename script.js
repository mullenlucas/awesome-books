let books = [
    {
    titulo: '100 años de soledad',
    author: 'Gabriel Garcia Marquez'
    },
    {
    titulo: 'El tirano',
    author: 'Massimo Manfredi'
    }
]

const bookList = document.querySelector('.books-display');
let displ = ''
books.forEach((el, index) => {    
    displ += `
    <div class="oneBook" id="book${index}">
    <h4> ${el.titulo} </h4>
    <h4> ${el.author} </h4> 
    <button class="btn-display" id="${index}">remove</button> 
    </div>
    ` 

});
bookList.innerHTML = displ

const newB = document.getElementById('bk')

newB.addEventListener('submit', function(event){

    event.preventDefault();
    const reciTi = document.getElementById("recibe-ti").value
    const reciAu = document.getElementById("recibe-au").value

    if(reciTi !== '' && reciAu !== ''){
    let newBook = {
        titulo: reciTi,
        author: reciAu
    }
    books.unshift(newBook)

    let displ = ''
    books.forEach((el, index) => {    
    displ += `
    <div class="oneBook" id="book${index}">
    <h4> ${el.titulo} </h4>
    <h4> ${el.author} </h4> 
    <button class="btn-display" id="${index}">remove</button> 
    </div>
    `

    });
    bookList.innerHTML = displ
    }
})

document.addEventListener('click', e => {

    if(e.target.matches('.btn-display') ){

        books = books.filter((el, index) =>
            e.target.id !== index.toString()
            )
    
            let displ = ''
            books.forEach((el, index) => {    
            displ += `
            <div class="oneBook" id="book${index}">
            <h4> ${el.titulo} </h4>
            <h4> ${el.author} </h4> 
            <button class="btn-display" id="${index}">remove</button> 
            </div>
            `
        
            });
            bookList.innerHTML = displ
    }
})

window.localStorage.setItem('localBooks', JSON.stringify(books))

console.log(JSON.parse(window.localStorage.getItem('localBooks')))