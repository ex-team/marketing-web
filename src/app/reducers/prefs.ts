import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AppState {
    title: string,
    description: string,
}

const initialState: AppState = {
    title: 'Site Title',
    description: 'Site description',
};

function updateState(state: any, action: PayloadAction<any>) {
    for (const key in action.payload) state[key] = action.payload[key];
}

// The function below is called a thunk and allows us to perform async logic.
export const fetchPrefs = createAsyncThunk('prefs/fetch', async () => {
    return await new Promise(resolve => {
        setTimeout(() => {}, 1000);
    });
});

export const prefsSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
      update: updateState,
  },
  extraReducers: builder => {
    builder.addCase(fetchPrefs.fulfilled, updateState);
  },
});


export default prefsSlice.reducer;
