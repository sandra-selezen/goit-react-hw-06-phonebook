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
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101'
      }}
    >
      <ContactForm />
      <Filter />
      <ContactList />
      {/* {contacts.length > 0 && <ContactList />} */}
      <Toaster position="top-center" />
    </div>
  );
};
