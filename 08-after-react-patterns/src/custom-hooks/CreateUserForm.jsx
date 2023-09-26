import { useForm } from "./useForm";

export const CreateUserForm = () => {
  const { formValues, handleChange, reset } = useForm({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formValues.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="lastname">Apellido</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          value={formValues.lastname}
          onChange={handleChange}
        />
      </div>
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
      <button type="submit">Crear usuario</button>
      <button type="button" onClick={reset}>
        Reset
      </button>
    </form>
  );
};
