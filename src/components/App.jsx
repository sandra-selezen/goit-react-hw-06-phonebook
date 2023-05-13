import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

export const App = () => {

  const contacts = useSelector(getContacts);

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
      {contacts.length > 0 && <ContactList />}
    </div>
  );
};
