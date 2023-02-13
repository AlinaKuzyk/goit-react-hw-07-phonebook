import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from 'redux/contacts/operations';

const contactsInitialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      const updatedPhoneBook = state.contacts.filter(
        contact => contact.id !== action.payload
      );
      state.contacts = updatedPhoneBook;
    },
  },

  extraReducers: {
    [fetchContacts.pending]: (state, _) => {
      return { ...state, isLoading: true };
    },
    [fetchContacts.fulfilled]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        contacts: action.payload,
      };
    },
  },
});

const persistConfig = {
  key: 'contacts',
  version: 1,
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

// Генераторы экшенов
export const { addContact, deleteContact } = contactsSlice.actions;
