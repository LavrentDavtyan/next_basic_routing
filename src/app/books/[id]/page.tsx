import { notFound } from "next/navigation"
import fs from 'fs';
import path from 'path';
import React from 'react';
import { IBook } from "@/app/lib/types";

interface IProps{
    params: {id:number}
}

export default function Page(props:IProps) {


  const filePath = path.join(process.cwd(), 'books.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const books: IBook[] = JSON.parse(jsonData);

  if(props.params.id > books.length){
    notFound()
}

  const book  = books.find(book=> book.id == props.params.id)

    return (
        <>
            <p className="is-size-2">Book title is- <b> {book.title} </b></p>
            <p className="is-size-2">Book author is-<b> {book.author} </b></p>
            <p className="is-size-2">Book price is- <b>{book.price}</b></p>
            <img src={book.photo} alt={book.title} width={400} />
        </>

    )
}
  