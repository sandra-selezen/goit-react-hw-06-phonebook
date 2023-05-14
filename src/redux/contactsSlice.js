import { createSlice, nanoid } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  },
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.items = [...state.items, action.payload];
        // return [...state.items, action.payload];
        // state.items.push(action.payload); 
        // return [...state, payload]; in this case it is does not work
      },
      prepare: data => {
        return {
          payload: {
            id: nanoid(),
            ...data,
          },
        }
      }
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

const contactsReducer = contactsSlice.reducer;

const persistConfig = {
  key: "contacts",
  storage,
};

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
export const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

// Selectors

export const getContacts = state => state.contacts.items;
