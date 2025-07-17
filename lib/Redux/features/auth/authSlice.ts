import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface Auth{
    isLoggedIn:boolean,
    email:string,
    name:string,
    favorites:{id:number, background_image:string, name: string}[]
    bookmarks: {id:number, background_image:string, name: string}[]
}
const getInitialState = (): Auth => {
    if (typeof window !== "undefined") {
      try {
        const user = JSON.parse(localStorage.getItem("user") || "null");
        const favorites = JSON.parse(localStorage.getItem("userFavorites") || "null");
        const bookmarks = JSON.parse(localStorage.getItem("userBookmarks") || "null");
  
        return {
          isLoggedIn: user?.isLoggedIn || false,
          name: user?.name || "",
          email: user?.email || "",
          favorites: favorites?.favorites || [],
          bookmarks: bookmarks || [],
        };
      } catch (e) {
        console.error("Error reading from localStorage", e);
      }
    }
  
    return {
      isLoggedIn: false,
      name: "",
      email: "",
      favorites: [],
      bookmarks: [],
    };
  };
  
  const initialState: Auth = getInitialState();
  
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        logIn:(state,action:PayloadAction<{ name: string , email: string}>)=>{
            state.isLoggedIn=true
            state.name=action.payload.name
            state.email=action.payload.email
            state.favorites=[{ id: 10213, background_image:"https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg",name:"Dota 2" },{ id: 2470 , name:"Mafia Mystery", background_image: "https://media.rawg.io/media/screenshots/687/68747a8a9806535eecce6a1b66b5467a.jpeg"},{ id: 9886, background_image:"https://media.rawg.io/media/screenshots/3cd/3cd824ee75612227ba95c072b8cb2d73.jpg",name:"Awaken" }]
            localStorage.setItem("user", JSON.stringify(
               { email: action.payload.email,
                isLoggedIn: true,
            name: action.payload.name}
            ))
            localStorage.setItem("userFavorites",JSON.stringify({
                favorites: [{ id: 10213, background_image:"https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg",name:"Dota 2" },{ id: 2470 , name:"Mafia Mystery", background_image: "https://media.rawg.io/media/screenshots/687/68747a8a9806535eecce6a1b66b5467a.jpeg"},{ id: 9886, background_image:"https://media.rawg.io/media/screenshots/3cd/3cd824ee75612227ba95c072b8cb2d73.jpg",name:"Awaken" }]
            }))
            localStorage.setItem("userBookmarks",JSON.stringify([]))
        },
        logOut:(state)=>{
            state.isLoggedIn=false
            state.name=""
            state.favorites=[]
            state.bookmarks = [];
            localStorage.removeItem("user");
            localStorage.removeItem("userFavorites");
            localStorage.removeItem("userBookmarks");
        },
        addFavorite: (state, action: PayloadAction<{ id: number; background_image: string; name: string }>) => {
            if (!state.favorites.find((favorite) => favorite.id === action.payload.id)) {
              state.favorites.push(action.payload);
              localStorage.setItem("userFavorites", JSON.stringify({ favorites: state.favorites }));
            }
          },
          removeFavorite: (state, action: PayloadAction<number>) => {
            state.favorites = state.favorites.filter((favorite) => favorite.id !== action.payload);
            localStorage.setItem("userFavorites", JSON.stringify({ favorites: state.favorites }));
          },
          
          addBookmark: (state, action: PayloadAction<{ id: number; background_image: string; name: string }>) => {
            if (!state.bookmarks.find((bookmark) => bookmark.id === action.payload.id)) {
              state.bookmarks.push(action.payload);
              localStorage.setItem("userBookmarks", JSON.stringify(state.bookmarks));
            }
          },
          removeBookmark: (state, action: PayloadAction<number>) => {
            state.bookmarks = state.bookmarks.filter((bookmark) => bookmark.id !== action.payload);
            localStorage.setItem("userBookmarks", JSON.stringify(state.bookmarks));
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