import PropTypes from "prop-types";
import { RiUserUnfollowFill } from 'react-icons/ri';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <div>
            <span>{contact.name}:</span> <span>{contact.number}</span>
          </div>
          <div>
            <button title="Delete contact" aria-label='Delete contact' type="button" onClick={() => onDeleteContact(contact.id)}><RiUserUnfollowFill /></button>
          </div>
        </li>
      ))}
    </ul>
  )
}