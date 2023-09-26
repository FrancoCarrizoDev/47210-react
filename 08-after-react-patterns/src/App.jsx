import "./App.css";
import { Container } from "./render-props/Container";

// import { ExampleLoginForm } from "./ExampleLoginForm";
// import withControlledForm from "./hoc/withControlledForm";
// import { LoginForm } from "./hoc/LoginForm";
// import { CreateUserForm } from "./hoc/CreateUserForm";
// import { LoginForm as LoginFormCustomHooks } from "./custom-hooks/LoginForm";
// import { CreateUserForm as CreateUserFormCustomHooks } from "./custom-hooks/CreateUserForm";
// import { CreateUserForm } from "./custom-hooks/CreateUserForm";
// import withControlledForm from "./hoc/withControlledForm";
// import { Container } from "./render-props/Container";

// const initialStateFormLogin = {
//   email: "",
//   password: "",
// };

// const LoginFormComponent = withControlledForm(LoginForm, initialStateFormLogin);

// const initialStateFormCreateUser = {
//   name: "",
//   lastname: "",
//   email: "",
//   password: "",
// };

// const CreateUserFormComponent = withControlledForm(
//   CreateUserForm,
//   initialStateFormCreateUser
// );

function App() {
  return (
    <div>
      {/* <ExampleLoginForm /> */}
      {/* <h1>LoginForm</h1>
      <LoginFormComponent /> */}
      {/* <hr />
      <h1>CreateUserForm</h1>
      <CreateUserFormComponent /> */}
      {/* <hr />
      <h1>LoginFormWithCustomHooks</h1>
      <LoginFormCustomHooks />
      <hr />
      <h1>CreateUserFormCustomHooks</h1>
      <CreateUserFormCustomHooks /> */}
      {/* <hr />
      <h1>CreateUserFormWithCustomHooks</h1>
      <CreateUserForm /> */}
      <Container />
    </div>
  );
}

export default App;
