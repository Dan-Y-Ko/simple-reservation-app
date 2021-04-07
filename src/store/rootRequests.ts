import axios from "axios";

/* Global Axios Config */
/* ------- */
const instance = axios.create({
  baseURL: "https://cove-coding-challenge-api.herokuapp.com/",
});

export default instance;
/* ------- */

/* Generic Requests */
/* ------- */
export const loadRequest = async <T>(url: string): Promise<T> => {
  // eslint-disable-next-line no-useless-catch
  try {
    const result = await instance.get<T>(url);

    return result.data;
  } catch (error) {
    throw error;
  }
};
/* ------- */
