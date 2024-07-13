import fs from 'fs';
import path from 'path';
import React from 'react';
import { IBook } from '../lib/types';

interface BooksProps {
  books: IBook[];
}

const Page: React.FC<BooksProps> = () => {

  const filePath = path.join(process.cwd(), 'books.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const books: IBook[] = JSON.parse(jsonData);

  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>
              <a href={`books/${book.id}`}>
                <h2>{book.title}</h2>
                <p>Author: {book.author}</p>
                <p>Price: ${book.price}</p>
                <img src={book.photo} alt={book.title} width={100} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;


