var btn= document.getElementById("btn")
var bookName= document.getElementById("namebook")
var price= document.getElementById("price")
var nameauthor= document.getElementById("nameauthor")
var form =document.getElementById("myform")
var books =[];



function Books(name,author,price){
     
    this.id= MakeStamp(),
    this.bookname=name,
    this.authorname=author,
    this.price=price
    
}

function AddBook(){
    var book= new Books(
        bookName.value,
        nameauthor.value,
        price.value
    )
    books.push(book);
    console.log(books)
    function myFunction() {   
        var table = document.getElementById("myTable");
        var row   = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        for(var i=0;i<books.length;i++){
        cell1.innerHTML = books[i].id;
        cell2.innerHTML = books[i].bookname;
        cell3.innerHTML = books[i].authorname;
        cell4.innerHTML = books[i].price;
        }
        
    }
    
    myFunction();
    // console.log(books);
    form.reset();
}

// console.log(books);
btn.addEventListener('click',AddBook);
