import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container } from './Layout/Layout.styled';

export const App = () => {

  const contacts = useSelector(getContacts);
  // console.log(contacts);

  return (
    <Container>
      <ContactForm />
      <Filter />
      {contacts.length > 0 && <ContactList />}
      <Toaster position="top-center" />
    </Container>
  );
};
