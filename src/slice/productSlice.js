import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'


export const fetchProduct = createAsyncThunk(
    'products/fetchProducts' ,
    async () => {
        const response = await fetch('https://dummyjson.com/products')
        const data = await response.json()
        return data.products
    }
)


const productSlice = createSlice({
    name : 'products',
    initialState : {items : [] , status : 'idle'  , error : null} ,
    reducers : {} ,
    extraReducers : (builder) =>{
        builder
            .addCase(fetchProduct.pending , (state) =>{
                state.status = 'loading'
            })

            .addCase(fetchProduct.fulfilled , (state , action) => {
                state.items = action.payload
                state.status = 'success'
            })
            .addCase(fetchProduct.rejected , (state , action) =>{
                state.status = 'fail'
                state.error =  action.error.message
            })
    }
})


export default productSlice.reducer