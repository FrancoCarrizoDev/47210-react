# Pasos para subir mi código a railway

1. Crear una cuenta en [railway.app](https://railway.app/) y loguearnos
2. Instalar el CLI de railway con `npm install -g @railway/cli`
3. Abrir la terminar en la raiz del proyecto y ejecutar `railway login` (esto nos va a abrir una ventana en el navegador para loguearnos con nuestra cuenta de railway)
4. Una vez logueados, ejecutar `railway init` y seguir los pasos que nos indica el CLI
5. Instalar serve con `npm install serve`
6. Modificar/Agregar script start en nuestro package json:
   1. Si tengo un proyecto creado con create-react-app, en el script de start, cambiar el comando `react-scripts start` por `"serve build -s -n -L -p $PORT"`
   2. Si tengo un proyecto creado con create-react-app, en el script de start, cambiar el comando `react-scripts start` por `"serve dist -s -n -L -p $PORT"`
7. Agregar script deploy en nuestro package json: `"deploy": "npm run build && railway up"`
8. Ejecutar `npm run deploy` para hacer el deploy de nuestro proyecto
9. Una vez que termina ejecutar `railway domain` para obtener el link de nuestro proyecto

# Variables de entorno.

Para VITE las variables de entornos se crean en un archivo .env en la raiz del proyecto y deben tener el prefijo VITE*. Para poder acceder a estas variables de entorno debemos usar el prefijo import.meta.env.VITE*.

Para CreateReactApp las variables de entornos se crean en un archivo .env en la raiz del proyecto y deben tener el prefijo REACT_APP*. Para poder acceder a estas variables de entorno debemos usar el prefijo process.env.REACT_APP*.

(Usar console.log para ver si se cargaron correctamente)

En railway debemos cargas estas variables de entorno en el dashboard de nuestro proyecto. En el panel "variables". Ya que el archivo .env no se sube al repositorio y se crea apartir de esta sección "variables" del dashboard de railway.
