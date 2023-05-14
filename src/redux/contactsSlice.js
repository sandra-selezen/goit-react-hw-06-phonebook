import { createSlice, nanoid } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: "",
  },
  reducers: {
    addContact: {
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
    deleteContact: {
      reducer(state, action) {
        return state.filter(({ id }) => id !== action.payload);
      }
    },
    setFilter: {
      reducer(_, action) {
        
      }
    }
  }
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

export const getFilter = state => state.contacts.filter;