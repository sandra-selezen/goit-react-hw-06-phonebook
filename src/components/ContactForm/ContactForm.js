import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from "@reduxjs/toolkit";
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { RiPhoneFill, RiUserFill, RiUserAddFill } from "react-icons/ri";

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <div>{message}</div>}
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

  return (
    <></>
  )
}