import { createSlice } from "@reduxjs/toolkit";

 export const AuthSlice = createSlice ({
    name: "auth",
    initialState: {
        value: {
            user: null,
            token: null,
            localId: null,
            imageCamera: null
        }
    },
    reducer:{
        setUser: (state, {payload}) =>{
            state.value.user = payload.email,
            state.value.token = payload.token,
            state.value.localId = payload.localId
        },
        clearUser:  (state) =>{
            state.value.user = null,
            state.value.token = null
        },
        setCameraImage: (state, {payload}) => {
            state.value.imageCamera = payload
        }

    }
 })
  export const { setUser, clearUser, setCameraImage} = AuthSlice.actions
  export default AuthSlice.reducer