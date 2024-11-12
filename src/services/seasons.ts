import { api } from "./api";
import axios from "axios";
import { SeasonsArray } from "../types/seasons";

class SeasonService {
  static async getSeasons(showId: number): Promise<SeasonsArray> {
    try {
      const response = await api.get(`/shows/${showId}/seasons`);
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

export default SeasonService;