const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "23293427-f7753480c7139e95ecc6333d5";
export const apiService = (pictureName, page) => {
  return fetch(
    `${BASE_URL}?q=${pictureName}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then((res) => res.json());
};
