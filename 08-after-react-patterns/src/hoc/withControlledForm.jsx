import { useState } from "react";

const withControlledForm = (FormComponent, initialState) => {
  const WrappedComponent = () => {
    const [formValues, setFormValues] = useState(initialState);

    const handleChange = (e) => {
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.value,
      });
    };

    const reset = () => {
      setFormValues(initialState);
    };

    const formProps = {
      formValues,
      handleChange,
      reset,
    };

    return <FormComponent formProps={formProps} />;
  };

  return WrappedComponent;
};

export default withControlledForm;
