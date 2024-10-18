import { useQuery, UseQueryResult } from '@tanstack/react-query';
import axiosInstance from '../lib/axios';

const useGetData = <T>(key: string, url: string): UseQueryResult<T> => {
  return useQuery({
    queryKey: [key],
    queryFn: () => {
      return axiosInstance.get(url).then((data) => data.data);
    },
  });
};

export default useGetData;
