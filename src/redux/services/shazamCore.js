import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shazamApi = createApi({
    reducerPath: 'shazamApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', import.meta.env.VITE_SHAZHAM_CORE_RAPID_API_KEY)

            return headers
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({query: () => `v1/charts/country?country_code=IN`}),

        getSongDetails: builder.query({ query: ({ songid }) => `v1/tracks/details?track_id=${songid}`}),

        getArtistDetails: builder.query({ query: (artistId) => `v2/artists/details?artist_id=${artistId}`}),

        getSearchItems : builder.query({ query: (search) => `v1/search/multi?search_type=SONGS_ARTISTS&query=${search}`}),

    })
})
export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetArtistDetailsQuery,
    useGetSearchItemsQuery,
} = shazamApi