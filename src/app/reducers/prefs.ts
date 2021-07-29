import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface AppState {
  title: string;
  description: string;
}

const initialState: AppState = {
  title: 'Site Title',
  description: 'Site description',
};

// Reducers
function updateState(state = initialState, action: PayloadAction<any>) {
  for (const key in action.payload) state[key] = action.payload[key];
}

// The function below is called a thunk and allows us to perform async logic.
export const fetchPrefs = createAsyncThunk('prefs/fetch', async () => {
  return await new Promise(resolve => {
    setTimeout(() => {}, 1000);
  });
});

export const prefsSlice = createSlice({
  name: 'prefs',
  initialState,
  reducers: {
    update: updateState,
  },
  extraReducers: builder => {
    builder.addCase(fetchPrefs.fulfilled, updateState);
  },
});


export default prefsSlice.reducer;
