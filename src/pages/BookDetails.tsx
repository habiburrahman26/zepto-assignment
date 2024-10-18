import { useParams } from 'react-router-dom';
import useGetData from '../hooks/useGetData';
import Error from '../components/ui/Error';
import BookDetailsLoader from '../components/loader/BookDetailsLoader';
import { BookType } from '../types/type';

const BookDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetData<BookType>(
    `book-${id}`,
    `/books/${id}`
  );

  let content = null;

  if (isLoading) {
    content = <BookDetailsLoader />;
  }

  if (!isLoading && isError) {
    content = <Error message="Something went wrong!" />;
  }

  if (!isLoading && !isError && data === null) {
    content = <Error message="No Book found!" />;
  }

  if (!isLoading && !isError && data?.id) {
    content = (
      <div className="container lg:w-1/2 mx-auto px-4 flex flex-col ">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="basis-1/2 h-80">
            <img
              src={data.formats['image/jpeg']}
              alt="book image"
              className="h-80"
            />
          </div>
          <div className="flex flex-col basis-1/2">
            <p className="text-2xl font-semibold pt-2 pb-1">{data?.title}</p>
            <p className="pb-3">
              <span className="text-base font-medium">Author:</span>{' '}
              <span className="text-blue-500 text-sm">{data?.authors[0].name}</span>
            </p>

            <p>
              <span className='font-medium'>Genera: </span>
              <span className='text-sm'>{data.bookshelves.join(', ')}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return <div className="py-10">{content}</div>;
};

export default BookDetails;
