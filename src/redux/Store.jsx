import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create a slice for UI state
const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isSidebarOpen: false,
    isDarkMode: false
  },
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    }
  }
});

export const { toggleSidebar, toggleDarkMode } = uiSlice.actions;

const Store = configureStore({
  reducer: {
    ui: uiSlice.reducer
  }
});

export default Store;
