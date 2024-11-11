import { api } from "./api";
import axios from "axios";
import { MoviesArray } from "../types/movies";

class MoviesService {
  static async getMovies(): Promise<MoviesArray> {
    try {
      const response = await api.get('/shows'); 
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error fetching types:', error.message);
      } else {
        console.error('Unexpected error:', error);
      }
      throw error;
    }
  }
};

export default MoviesService;