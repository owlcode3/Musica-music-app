import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   songsList: [],
   curTrack: 0
};

const playerSlice = createSlice({
   name: "player",
   initialState,
   reducers: {
      addSongsToList: (state, action) => {
         state.songsList = action.payload;
      },

      addCurTrack: (state, action) => {
         state.curTrack = action.payload;
      }
   }
});

export const { addSongsToList, addCurTrack } = playerSlice.actions;

export default playerSlice.reducer;
