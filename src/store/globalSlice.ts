import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface GlobalSlice {
  alert: string | null;
  type: 'error' | 'success' | 'info'
}

const initialState: GlobalSlice = {
  alert: null,
  type: 'success'
}

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setAlert: (state: GlobalSlice, action: PayloadAction<{alert: string | null, type: GlobalSlice['type']}>) => {
      state.alert = action.payload.alert;
      state.type = action.payload.type;
    }
  },
});

export const globalActions = globalSlice.actions;
export default globalSlice.reducer;
