let books = [
    {
   titulo: '100 años de soledad',
   author: 'Gabriel Garcia Marquez'
    },
    {
   titulo: 'El tirano',
   author: 'Massimo Manfredy'
    }
]

const bookList = document.querySelector('.books-display');
let displ = ''
books.forEach((el, index) => {    
    displ += `
    <div class="oneBook" id="book${index}">
    <h4> ${el.titulo} </h4>
    <h4> ${el.author} </h4> 
    <button class="btn-display" id="remove-id${index}">remove</button> 
    </div>
    ` 

});
bookList.innerHTML = displ
let removIds = [...document.querySelectorAll('.btn-display')].map(item => item.id)

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
    <button class="btn-display" id="remove-id${index}">remove</button> 
    </div>
    `

    });
    bookList.innerHTML = displ

    console.log(books)
    let removIds = [...document.querySelectorAll('.btn-display')].map(item => item.id)
    }
})

document.querySelectorAll('.btn-display').forEach( (rem) => {
    rem.addEventListener('click', (event) => {
        console.log(rem)
    })

})



console.log(books);
