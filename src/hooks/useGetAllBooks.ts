import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../lib/axios';

const useGetAllBooks = (key: string, url = 'books', search = '') => {
  let urlR = url;

  if (search) {
    urlR = url.split('?')[1]
      ? `${url}&search=${search}`
      : `${url}?search=${search}`;
  }

  return useQuery({
    queryKey: [key, url, search],
    queryFn: () => {
      return axiosInstance.get(urlR);
    },
  });
};

export default useGetAllBooks;
