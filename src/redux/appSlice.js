import { createSlice } from "@reduxjs/toolkit";

export const  appSlice = createSlice({
    name:"appSlice",
    initialState:{
        fullname:"Joshua Pamilerin",
        country:"Nigeria",
        friends:['Mr Matthew', "Mrs Inioluwa", "Mr Ojo", 'Mr Clement'],
        age:16
    },

    reducers:{
        changeName:(state, actions)=>{
            state.fullname = actions.payload
        },

        increaseAge:(state)=>{
            state.age++
        },


        increaseAgeByNum:(state, actions)=>{
            state.age= state.age+actions.payload
        }
    }
})

export default appSlice.reducer

export const {changeName, increaseAge, increaseAgeByNum}= appSlice.actions