import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Filters } from "./filters";

export type GamesResponse = GameItem[];

export type GameItem = {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
};

export type SpecificGameResponse = {
  id: number;
  title: string;
  thumbnail: string;
  status: string;
  short_description: string;
  description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
  minimum_system_requirements?: SpecificGameResponseOs;
  screenshots: SpecificGameResponseScreenshots;
};

type SpecificGameResponseOs = {
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
};

type SpecificGameResponseScreenshots = [
  {
    id: number;
    image: string;
  }
];

export const ftpApi = createApi({
  reducerPath: "ftpApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://free-to-play-games-database.p.rapidapi.com/api/",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "af0d6141cemsh8c372f886bd4258p1871d2jsn95955ef1589b",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  }),
  endpoints: (build) => ({
    getGames: build.query<GamesResponse, Filters>({
      query: (filters) => ({
        url: "games",
        params: Object.entries(filters).reduce<Record<string, string>>(
          (acc, [key, item]) => {
            if (item.currentValue) {
              acc[key] = item.currentValue;
            }
            return acc;
          },
          {}
        ),
      }),
    }),
    getSpecificGame: build.query<SpecificGameResponse, string>({
      query: (id) => ({
        url: "game",
        params: {
          id: id,
        },
      }),
    }),
  }),
});

export const { useGetGamesQuery, useGetSpecificGameQuery } = ftpApi;
