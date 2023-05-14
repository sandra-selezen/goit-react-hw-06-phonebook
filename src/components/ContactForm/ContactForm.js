import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import toast from 'react-hot-toast';
import { RiPhoneFill, RiUserFill, RiUserAddFill } from "react-icons/ri";
import { getContacts, addContact } from 'redux/contactsSlice';
import { Form, ErrorText, FormBox, FormLabel, FormButton } from './ContactForm.styled';

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().required()
});

const initialValues = {
  name: "",
  number: "",
}

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const isReplicated = ({ name, number }) => {
    const normalizedContactName = name.toLowerCase().trim();
    const normalizedContactNumber = number.trim();
    const replicatedContactName = contacts.find(contact => {
      return (contact.name.toLowerCase().trim() === normalizedContactName && contact.number.trim() === normalizedContactNumber)
    });

    return Boolean(replicatedContactName);
  }

  const onAddContact = ({ name, number }) => {
    // need to add check
    isReplicated({ name, number })
      ? toast('This contact is already in your Phonebook!', { icon: '👻', })
      : dispatch(addContact({ name, number }));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values, { resetForm }) => {
        onAddContact({ ...values });
        resetForm();
      }}
    >
      <Form autoComplete="off">
        <FormLabel><RiUserFill />Name</FormLabel>
        <FormBox>
          <Field name="name" placeholder="Enter contact name" />
          <FormError name="name" />
        </FormBox>
        
        <FormLabel><RiPhoneFill />Number</FormLabel>
        <FormBox>
          <Field type="tel" name="number" placeholder="Enter contact phone number" />
          <FormError name="number" />
        </FormBox>
        
        <FormButton type="submit"><RiUserAddFill />Add contact</FormButton>
      </Form>
    </Formik>
  )
}

FormError.propTypes = {
  name: PropTypes.string,
}