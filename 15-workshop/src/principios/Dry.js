export const calcularAreaCirculo = (radio) => {
  const pi = 3.14159;
  const area = pi * radio * radio;
  console.log("El área del círculo es: " + area);
};

export const calcularVolumenCilindro = (radio, altura) => {
  const pi = 3.14159;
  const volumen = pi * radio * radio * altura;
  console.log("El volumen del cilindro es: " + volumen);
};

export const calcularAreaCirculoGood = (radio) => {
  console.log(Math.PI * radio * radio);
};

export const calcularVolumenCilindroGood = (radio, altura) => {
  console.log(calcularAreaCirculoGood(radio) * altura);
};
