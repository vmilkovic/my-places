import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Place from 'modules/place';

const palceSlice = createSlice({
  name: 'place',
  initialState: {
    list: [],
    favorites: [],
  },
  reducers: {
    createPlace(state, action: PayloadAction<Place>) {
      const {
        id,
        title,
        description,
        imageUri,
        address,
        latitude,
        longitude,
        isFavorite,
        userId,
      } = action.payload;
    },
    updatePlace(state, action: PayloadAction<Place>) {
      const {
        id,
        title,
        description,
        imageUri,
        address,
        latitude,
        longitude,
        isFavorite,
        userId,
      } = action.payload;
    },
    deletePlace(state, action: PayloadAction<number>) {
      const { id } = action.payload;
    },
    loadPlace(state, action: PayloadAction<number>) {
      const { id } = action.payload;
    },
    loadPlaces(state, action: PayloadAction<number>) {
      const { id } = action.payload;
    },
    favoritePlace(state, action: PayloadAction<number>) {
      const { id } = action.payload;
    },
    unfavoritePlace(state, action: PayloadAction<number>) {
      const { id } = action.payload;
    },
    loadFavoritePlaces(state, action: PayloadAction<number>) {
      const { id } = action.payload;
    },
  },
});

export const {
  createPlace,
  updatePlace,
  deletePlace,
  loadPlace,
  loadPlaces,
  favoritePlace,
  unfavoritePlace,
  loadFavoritePlaces,
} = palceSlice.actions;
export default palceSlice.reducer;
