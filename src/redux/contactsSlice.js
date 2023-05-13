import { createSlice, nanoid } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
    filter: "",
  },
  reducers: {
    add: {
      reducer(state, action) {
        return [...state, action.payload];
      },
      prepare(data) {
        return {
          payload: {
            id: nanoid(),
            ...data,
          },
        }
      }
    },
    remove: {
      reducer(state, action) {
        return state.filter(({ id }) => id !== action.payload);
      }
    },
  }
});

const contactsReducer = contactsSlice.reducer;

const persistConfig = {
  key: "contacts",
  storage,
};

export const { add, remove } = contactsSlice.actions;
export const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

// Selectors

export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.contacts.filter;