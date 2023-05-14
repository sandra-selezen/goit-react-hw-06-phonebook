import { createSlice, nanoid } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  },
  reducers: {
    addContact: {
      reducer: ({ contacts }, { payload }) => {
        contacts.push(payload); 
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
    deleteContact: {
      reducer: ({ contacts }, { payload }) => {
        contacts.filter(({id}) => id !== payload); // works but app is crashes 
      }
    },
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

export const getContacts = state => state.contacts.contacts;
