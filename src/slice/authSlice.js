import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'

export const loginUser = createAsyncThunk(
    'auth/loginUser' ,
    async (credentials , {rejectWithValue}) => {
        console.log(credentials)
        try {
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username : credentials.username ,
                    password : credentials.password
                }),
              })
              
              const data = await response.json()
              console.log(data)
              localStorage.setItem('token' , data.accessToken)
              return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)


const authSlice = createSlice({
    name : 'auth',
    initialState : {user : null , error : null},
    reducers : {} ,
    extraReducers : (builder) => {
        builder
            .addCase(loginUser.fulfilled,(state , action) => {
                state.user = action.payload;
                state.error = null
            })

            .addCase(loginUser.rejected , (state , action) => {
                state.error = action.payload
            })
    }
})


export default authSlice.reducer