import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../lib/axios';

const useGetAllBooks = (key: string) => {
  return useQuery({
    queryKey: [{ key: key }],
    queryFn: () => {
      return axiosInstance.get(`books`);
    },
  });
};

export default useGetAllBooks;
