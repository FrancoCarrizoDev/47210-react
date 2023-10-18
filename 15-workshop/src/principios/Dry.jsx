export const AdminWelcome = ({ name }) => {
  return (
    <div>
      <h1>Bienvenido {name}! su rol es: Admin</h1>
    </div>
  );
};

export const UserWelcome = ({ name }) => {
  return (
    <div>
      <h1>Bienvenido {name}! su rol es: User</h1>
    </div>
  );
};

export const Welcome = ({ name, role }) => {
  return (
    <div>
      <h1>
        Bienvenido {name}!!! su rol es {role}
      </h1>
    </div>
  );
};
