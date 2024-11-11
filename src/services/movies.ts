import { api } from "./api";
import axios from "axios";
import { MoviesArray, Movies } from "../types/movies";

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
  };

  static async getMovieById(id: number): Promise<Movies> {
    try {
      const response = await api.get(`shows/${id}`);
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