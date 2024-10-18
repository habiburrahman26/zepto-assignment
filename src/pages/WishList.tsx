import { useEffect, useState } from 'react';
import { BookType } from '../types/type';
import { Link } from 'react-router-dom';

const WishList = () => {
  const [books, setBooks] = useState<BookType[] | []>([]);

  useEffect(() => {
    const books = localStorage.getItem('book-list');

    setBooks(books ? JSON.parse(books) : []);
  }, []);

  const removeToWishlist = (id: number) => {
    const addedBook = localStorage.getItem('book-list');
    const books: BookType[] = addedBook ? JSON.parse(addedBook) : [];

    const afterRemove = books.filter((b) => b.id !== id);
    setBooks(afterRemove);

    localStorage.setItem('book-list', JSON.stringify(afterRemove));
  };

  return (
    <div className="py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  2xl:grid-cols-5 justify-items-center gap-5">
      {books?.map((b: BookType) => (
        <div className="card w-full bg-base-100 shadow-md hover:shadow-none hover:ring-2 transition-all p-2 relative group">
          <figure>
            <img
              src={b.formats['image/jpeg']}
              alt={b.title}
              className="h-60 w-full"
            />
          </figure>
          <div className="card-body p-3">
            <div className="flex justify-between">
              <span className="inline-block p-1 bg-blue-100 text-xs rounded">
                #{b.id}
              </span>
              <button className="text-xs flex items-center gap-2 btn  btn-sm btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#F95454"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#F95454"
                  className="size-6"
                  onClick={() => removeToWishlist(b.id)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </button>
            </div>
            <div className="flex items-center justify-between">
              {/* <span className="badge badge-outline">{bookshelves[1]}</span> */}
            </div>
            <Link
              to={`/book/${b.id}`}
              className="text font-semibold hover:text-blue-500 transition-all"
              title={b.title}
            >
              {b.title.length > 55 ? ` ${b.title.slice(0, 55)}...` : b.title}
            </Link>

            <p className="text-xs">
              <span className="font-medium">Author: </span>
              {b.authors[0]?.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WishList;
