// Si ven errores aqui, es por el estlint, la herramienta de analisis de código estático que 
// viene ya integrada con vite, no se asusten por eso, es solo para que vayan aprendiendo a
// escribir código de la mejor manera posible.

const task = new Promise((resolve, reject) => {
  const isFinished = true;
  
  if(isFinished){
    resolve(true)
  }else{
    reject(false)
  }
})

 task.then( resultado => {
  throw new Error("Error en la promesa")
  console.log("Pasé por aqui")
}, error => {
  console.log(error)
}).catch(err => {
  console.log("Problema en lectura de resultado")
  return 'error_raro'
}).then(parametro => {
  console.log(parametro)
})

const productos = [
    {
      id: 1,
      title: "Producto 1",
      price: 10.99,
      stock: 100
    },
    {
      id: 2,
      title: "Producto 2",
      price: 19.99,
      stock: 50
    },
    {
      id: 3,
      title: "Producto 3",
      price: 5.49,
      stock: 200
    }]
  
  
  const retrieveAsyncArray = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Pasaron 3 segundos")
      resolve(productos)
    }, 3000)
  })
  
  retrieveAsyncArray.then((product) => {
    console.log(productos)
  })
  