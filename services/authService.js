import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {baseAuthUrl, apiKey} from  '../firebase/UserConfig'

export const authApi = createApi ({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery ({baseUrl: baseAuthUrl}),
    endpoints: (builder) => ({
        signUp : builder.mutation ({
            query: ({...auth}) => ({
                url:`/accounts:signInWithPassword?key=${apiKey}`,
                method: 'POST',
                body: auth,
            }),
        }),
    }),
})

export const {useSingInMutation, useSignUpMutation} = authApi;
