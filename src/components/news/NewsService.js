import AxiosInstance from '../helper/Axiosinstance';

export const getNews = async () => {
  const response = await AxiosInstance.get('/articles');
  return response.data;
};
