import { Link } from 'react-router-dom';
import { BookType } from '../types/type';
import { useState } from 'react';

type BookProps = {
  book: BookType;
};

const Book = ({ book }: BookProps) => {
  const { id, title, authors, formats } = book;
  const [addedWishlist, setAddedWishlist] = useState(false);

  const addToWishlist = (book: BookType) => {
    const addedBook = localStorage.getItem('book-list');
    const books = addedBook ? JSON.parse(addedBook) : [];

    localStorage.setItem('book-list', JSON.stringify([...books, book]));
    setAddedWishlist(true);
  };

  const removeToWishlist = (id: number) => {
    const addedBook = localStorage.getItem('book-list');
    const books: BookType[] = addedBook ? JSON.parse(addedBook) : [];

    const afterRemove = books.filter((b) => b.id !== id);

    localStorage.setItem('book-list', JSON.stringify(afterRemove));
    setAddedWishlist(false);
  };

  return (
    <div className="card w-full bg-base-100 shadow-md hover:shadow-none hover:ring-2 transition-all p-2 relative group">
      <figure>
        <img src={formats['image/jpeg']} alt={title} className="h-60 w-full" />
      </figure>
      <div className="card-body p-3">
        <div className="flex justify-between">
          <span className="inline-block p-1 bg-blue-100 text-xs rounded">
            #{id}
          </span>
          <button className="text-xs flex items-center gap-2 btn  btn-sm btn-circle">
            {!addedWishlist && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
                onClick={() => addToWishlist(book)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            )}

            {addedWishlist && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#F95454"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#F95454"
                className="size-6"
                onClick={() => removeToWishlist(id)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="flex items-center justify-between">
          {/* <span className="badge badge-outline">{bookshelves[1]}</span> */}
        </div>
        <Link
          to={`/book/${id}`}
          className="text font-semibold hover:text-blue-500 transition-all"
          title={title}
        >
          {title.length > 55 ? ` ${title.slice(0, 55)}...` : title}
        </Link>

        <p className="text-xs">
          <span className="font-medium">Author: </span>
          {authors[0]?.name}
        </p>
      </div>
    </div>
  );
};

export default Book;
