import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface Auth{
    isLoggedIn:boolean,
    email:string,
    name:string,
    favorites:{id:number}[]
    bookmarks: {id:number}[]
}
const initialState:Auth={
isLoggedIn:false,
name:"",
email:"",
favorites:[],
bookmarks:[],
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        logIn:(state,action:PayloadAction<{ name: string , email: string}>)=>{
            state.isLoggedIn=true
            state.name=action.payload.name
            state.email=action.payload.email
            state.favorites=[{ id: 10213 },{ id: 1 },{ id: 51 }]
        },
        logOut:(state)=>{
            state.isLoggedIn=false
            state.name=""
            state.favorites=[]
            state.bookmarks = [];
        },
        addFavorite:(state,action:PayloadAction<number>)=>{
            if(!state.favorites.find((favorite)=>favorite.id===action.payload))
            state.favorites.push({id:action.payload})
        },
        removeFavorite:(state,action:PayloadAction<number>)=>{
            state.favorites= state.favorites.filter((favorite)=>favorite.id!==action.payload)
        },
        addBookmark:(state,action:PayloadAction<number>)=>{
            if(!state.bookmarks.find((bookmark)=>bookmark.id===action.payload))
            state.bookmarks.push({id:action.payload})
        },
        removeBookmark:(state,action:PayloadAction<number>)=>{
            state.bookmarks= state.bookmarks.filter((bookmark)=>bookmark.id!==action.payload)
        },
    }

})
export const {
    logIn,
    logOut,
    addFavorite,
    removeFavorite,
    addBookmark,
    removeBookmark,
  } = authSlice.actions;
  
  export default authSlice.reducer;