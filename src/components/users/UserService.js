import AxiosInstance from '../helper/Axiosinstance';

// HTTP request
// GET: get data from server
// POST, PUT, DELETE: send data to server
export const register = async (email, password) => {
  try {
    const body = {
      email,
      password,
    };
    const res = await AxiosInstance().post('/users/register', body);
    console.log('register response', res);
    return res;
  } catch (error) {
    console.log('register error', error);
    return error;
  }
};

export const login = async (email, password) => {
  try {
    const body = {
      email,
      password,
    };
    const res = await AxiosInstance().post('/auth/login', body);
    console.log('login response', res);
    return res;
  } catch (error) {
    console.log('login error', error);
    return error;
  }
};
