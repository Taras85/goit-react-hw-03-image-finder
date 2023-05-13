import axios from 'axios';


export async function fetchImages(query, currentPage) {
  const response = await axios.get(`https://pixabay.com/api/?q=${query}&page=${currentPage}&key=31705200-2fa5435eb18f6178a2b05a0f8&image_type=photo&orientation=horizontal&per_page=12`);
  return response.data;
}

// const fetchImages = async (query, currentPage) => {
//   const { data } = await axios.get(
//     `https://pixabay.com/api/?q=${query}&page=${currentPage}&key=31705200-2fa5435eb18f6178a2b05a0f8&image_type=photo&orientation=horizontal&per_page=12`,
//   );

//   return data.hits;
// };

// export default fetchImages;