/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useRef, useState } from 'react';
import Book from '../components/Book';
import BookLoader from '../components/loader/BookLoader';
import Error from '../components/ui/Error';
import useGetAllBooks from '../hooks/useGetAllBooks';
import { BookType } from '../types/type';
import DropdownMenu from '../components/Dropdown';

const Books = () => {
  const [pageUrl, setPageUrl] = useState('books');
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const timerRef = useRef<any>(null);

  const { data, isLoading, isError } = useGetAllBooks(
    'books',
    pageUrl,
    searchText,
    selectedCategory
  );
  const books = data?.data?.results;

  let content = null;

  if (isLoading) {
    content = (
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4  2xl:grid-cols-6 justify-items-center gap-5">
        <BookLoader />
        <BookLoader />
        <BookLoader />
        <BookLoader />
      </div>
    );
  }

  if (!isLoading && isError) {
    content = <Error message="Something went wrong!" />;
  }

  if (!isLoading && !isError && books?.length === 0) {
    content = <Error message="No Book found!" />;
  }

  if (!isLoading && !isError && books?.length > 0) {
    content = (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  2xl:grid-cols-5 justify-items-center gap-5">
        {books?.map((b: BookType) => (
          <Book key={b.id} book={b} />
        ))}
      </div>
    );
  }

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setSearchText(e.target.value);
      localStorage.setItem('search', e.target.value);
    }, 500);
  };

  return (
    <div className="container mx-auto px-2 pt-4">
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <input
          type="text"
          className="border py-1 px-1 rounded outline-none w-full sm:w-1/2"
          placeholder="Search Book..."
          onChange={searchHandler}
        />
        <DropdownMenu
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>

      <div className="py-5">{content}</div>
      {!isLoading && (
        <div className="flex justify-center gap-4 pb-8">
          <button
            className={`${
              !data?.data.previous
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-blue-500 cursor-pointer'
            } px-6 py-1  rounded`}
            disabled={!data?.data.previous}
            onClick={() => {
              setPageUrl(data?.data?.previous);
              setSearchText('');
            }}
          >
            &#8592; Prev
          </button>
          <button
            className={`${
              !data?.data.next
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-blue-500 cursor-pointer'
            } px-6 py-1  rounded`}
            disabled={!data?.data.next}
            onClick={() => {
              setPageUrl(data?.data?.next);
            }}
          >
            Next &#8594;
          </button>
        </div>
      )}
    </div>
  );
};

export default Books;
