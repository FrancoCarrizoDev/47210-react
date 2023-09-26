export const LoginForm = ({ formProps }) => {
  const { formValues, handleChange, reset } = formProps;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Iniciar sesión</button>
      <button type="button" onClick={reset}>
        Reset
      </button>
    </form>
  );
};
