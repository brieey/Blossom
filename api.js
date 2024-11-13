import axios from 'axios';


const backendKey = process.env.BACKEND_URL;



const apiClient = axios.create({
  baseURL: backendKey, // Replace with your Express backend URL
  timeout: 1000,
});

export const getFlowers = async () => {
  try {
    const response = await apiClient.get('/flowers'); // Adjust the endpoint as needed
    return response.data;
  } catch (error) {
    console.error('Error fetching flowers:', error);
    throw error;
  }
};
