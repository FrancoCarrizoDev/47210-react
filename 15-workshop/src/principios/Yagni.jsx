// Crear un componente Botón que reciba un texto y una función por props y renderice un botón que al hacer click ejecute la función recibida por props.

export const Boton = ({ text, onClick, icon, variant }) => (
  <button onClick={() => onClick()} className={variant ? variant : null}>
    {text}
    {icon && <img src={icon} />}
  </button>
);
