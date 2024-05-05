import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const tasksApi = createApi({
    reducerPath: 'users/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://mocki.io/v1/50f55ef7-0048-4b10-ad15-d9f85d9a02e2'
    }),
    endpoints: build => ({
        searchUsers: build.query<any, string>({
            query: (search: string) => ({
                url: ``
            })
        })
    })
})  

export const { useSearchUsersQuery } = tasksApi