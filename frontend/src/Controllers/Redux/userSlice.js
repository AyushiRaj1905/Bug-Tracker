import {} from '@reduxjs/toolkit'

const slice = createSlice({
    name:"user",
    initialState:[{}],
    reducers:{
        getUser:(state)=>{
            state.push({name:"Ayushi"})
            state.push({name:"Raj"})
        }
    }

})
export default slice.reducer;
export const{getUser} = slice.actions;