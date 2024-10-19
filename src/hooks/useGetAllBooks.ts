import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../lib/axios';

const useGetAllBooks = (
  key: string,
  url = 'books',
  search = '',
  filter = ''
) => {
  let urlR = url;

  if (search) {
    urlR = url.split('?')[1]
      ? `${url}&search=${search}`
      : `${url}?search=${search}`;
  }

  if (filter) {
    urlR = url.split('?')[1]
      ? `${url}&bookshelves=${filter}`
      : `${url}?bookshelves=${filter}`;
  }

  return useQuery({
    queryKey: [key, url, search, filter],
    queryFn: () => {
      return axiosInstance.get(urlR);
    },
  });
};

export default useGetAllBooks;
