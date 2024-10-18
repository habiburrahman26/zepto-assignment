import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../lib/axios';

const useGetAllBooks = (key: string, url = 'books') => {
  return useQuery({
    queryKey: [key, url],
    queryFn: () => {
      return axiosInstance.get(url);
    },
  });
};

export default useGetAllBooks;
