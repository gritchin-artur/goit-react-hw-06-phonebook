import React from "react";
import { Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { getFilter, setFilter } from "redux/filterSlice";

const FindContact = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <div>
      <h4>Find contacts by name</h4>
      <Field
        type="text"
        name="name"
        value={filter}
        onChange={(e) =>
          dispatch(setFilter(e.currentTarget.value.toLocaleLowerCase()))
        }
      ></Field>
    </div>
  );
};

export default FindContact;
