import React from 'react'

type Book ={
    id :number;
    name:string;
    type:string;
    available:boolean;
};

async function getBooks(){
     const response = await fetch("https://simple-books-api.glitch.me/books");
     const data = response.json();
     return data;
}
export default async function staticPage() {
     const books = await getBooks();
    //  console.log(books);
  return (<div>
        <h1>Static Page</h1>
         {/* use map function for iterate the object of array */}
        {books.map((book:Book) =>(


            //set a key on ul as a unique key which is can not be duplicate
            <ul key={book.id}>
                <li>
                    {book.name} - {book.type}
                </li>

            </ul>
        ))}
        
        </div>
  )
}
