import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import css from "./inputPhoneBook.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addContact, getContacts } from "redux/contactSlice";
import { nanoid } from "@reduxjs/toolkit";

export default function InputPhoneBook() {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const [contactName, setContactName] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const sameNsame = contacts.some(
      ({ name }) => name.toLocaleLowerCase() === contactName.toLocaleLowerCase()
    );

    if (sameNsame) {
      alert(`${contactName} is already in contacts!`);
      return;
    }

    dispatch(
      addContact({
        name: contactName,
        number: contactNumber,
        id: nanoid(),
      })
    );
    setContactName("");
    setContactNumber("");
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    switch (name) {
      case "name":
        setContactName(value);
        break;
      case "number":
        setContactNumber(value);
        break;

      default:
        return;
    }
  };

  return (
    <div>
      <form type="submit" onSubmit={handleSubmit} className={css.formContainer}>
        <label className={css.labelStyle}>
          Name
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
            value={contactName}
          />
        </label>
        <label className={css.labelStyle}>
          Number
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
            value={contactNumber}
          />
        </label>

        <button type="submit" className={css.buttonAddStyle}>
          Add contact
        </button>
        <ErrorMessage name="name" component="div" />
      </form>
    </div>
  );
}
