import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {

  const contacts = useSelector(getContacts);
  console.log(contacts);
  
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <ContactForm />
      <Filter />
      {contacts.length > 0 && <ContactList />}
      <Toaster position="top-center" />
    </div>
  );
};
