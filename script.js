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
    displ += `<h4> ${el.titulo} </h4> <h4> ${el.author} </h4>  <button class="btn-display">remove</button>  ` 
    
});
bookList.innerHTML = displ



/* const add = function (){    
    const reciTi = document.getElementById("recibe-ti").value
    const reciAu = document.getElementById("recibe-au").value
   // console.log(reciAu);
let newBook = {
    titulo: reciTi,
    author: reciAu
}
    books.push(newBook)
} */

const newB = document.getElementById('bk')

newB.addEventListener('click', function(event){
    event.preventDefault();
    const reciTi = document.getElementById("recibe-ti").value
    const reciAu = document.getElementById("recibe-au").value
   // console.log(reciAu);
   if(reciTi !== ''&& reciAu !== '' ){
let newBook = {
    titulo: reciTi,
    author: reciAu
}
    books.push(newBook)
}



   })


console.log(books);
console.log('hola');
