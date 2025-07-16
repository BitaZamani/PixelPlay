import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchGames } from "@/lib/API";

interface Games {
  results: {
    id: number;
    name: string;
    metacritic: number;
    background_image: string;
  }[];
  count: number;
}

interface GameState {
  allGames: Games;
  status: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
  page: number;
}

const initialState: GameState = {
  allGames: { results: [], count: 0 },
  status: "idle",
  error: null,
  page: 1,
};

export const fetchAllGames = createAsyncThunk(
  "games/fetchAll",
  async (queryString: string) => {
    const data = await fetchGames(queryString);
    return data;
  }
);

const gameSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllGames.pending, (state) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(fetchAllGames.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allGames = action.payload;
      })
      .addCase(fetchAllGames.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export const { setPage } = gameSlice.actions;
export default gameSlice.reducer;
