import React from "react";
import propTypes from "prop-types";
import css from "./contactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, getContacts } from "redux/contactSlice";
import { getFilter } from "redux/filterSlice";

const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const contactsList = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul className={css.contactList}>
      {contactsList.map(({ name, number, id }) => (
        <li key={id} id={id}>
          {name}: {number}
          <button
            className={css.contactButton}
            type="submit"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
      id: propTypes.string.isRequired,
    })
  ),
};

export default ContactsList;
