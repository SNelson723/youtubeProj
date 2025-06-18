import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface AppState {
  url: string;
  apiKey: string;
  searchTerm: string;
}

const iniitalState: AppState = {
  url: "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&",
  apiKey: "AIzaSyDTk6mwzjzl-GeQXI7GsFB1Hp3wa6-_F9Q",
  searchTerm: "",
};

export const appSlice = createSlice({
  name: 'app',
  initialState: iniitalState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    }
  }
});

export const { setSearchTerm } = appSlice.actions;
export default appSlice.reducer;