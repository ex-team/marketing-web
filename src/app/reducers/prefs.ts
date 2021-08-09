import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface AppState {
  title: string;
  description: string;
  author: string;
  keywords: string[];
}

const initialState: AppState = {
  title: 'Digipeta',
  description: 'Konsultan GIS Profesional',
  author: 'CV Karomap Semesta',
  keywords: ['gis', 'webgis', 'jalan', 'jembatan', 'irigasi', 'pdam'],
};

// Reducers
function updateState(state = initialState, action: PayloadAction<any>) {
  for (const key in action.payload) state[key] = action.payload[key];
}

// The function below is called a thunk and allows us to perform async logic.
export const fetchPrefs = createAsyncThunk('prefs/fetch', () => {
  /** TODO: Fetch remote preferences */
  return new Promise<AppState>(resolve =>
    setTimeout(() => {
      resolve(initialState);
    }, 1000)
  );
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
