import InputPhoneBook from "./inputPhoneBook/inputPhoneBook";
import ContactsList from "./contactsList/contactsList";
import FindContact from "./findContact/findContact";
import { Formik } from "formik";
import css from "./app.module.css";

export function App() {
  return (
    <Formik>
      <div className={css.appContainer}>
        <h1>Phonebook</h1>
        <InputPhoneBook />
        <h1>Contacts</h1>
        <FindContact />
        <ContactsList />
      </div>
    </Formik>
  );
}
