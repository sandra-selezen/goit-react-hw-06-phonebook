import { useDispatch, useSelector } from 'react-redux';
import { getContacts, deleteContact } from "redux/contactsSlice";
import { getFilter } from "redux/filterSlice";
import { RiUserUnfollowFill } from 'react-icons/ri';
import { DeleteBtn, Item, List } from "./ContactList.styled";

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter));
  const displayContactlist = filter === "" ? contacts : filteredContacts;

  if (!displayContactlist?.length) {
    return <div>Contacts not found</div>;
  }
  const onDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  }
  return (
    <List>
      {displayContactlist.map(contact => (
        <Item key={contact.id}>
          <div>
            <span>{contact.name}:</span> <span>{contact.number}</span>
          </div>
          <div>
            <DeleteBtn title="Delete contact" aria-label='Delete contact' type="button" onClick={() => onDeleteContact(contact.id)}><RiUserUnfollowFill /></DeleteBtn>
          </div>
        </Item>
      ))}
    </List>
  )
}