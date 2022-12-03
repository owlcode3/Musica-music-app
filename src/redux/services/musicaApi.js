import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const musicaApi = createApi({
   reducerPath: "musicaApi",
   baseQuery: fetchBaseQuery({
      baseUrl: "https://musica-api.up.railway.app"
   }),
   endpoints: builder => ({
      getPopularMusic: builder.query({ query: () => "/popular" }),
      getNewMusic: builder.query({ query: () => "/new" }),
      getPlaylist: builder.query({ query: () => "/playlist" })
   })
});

export const { useGetPopularMusicQuery, useGetNewMusicQuery, useGetPlaylistQuery } = musicaApi;
