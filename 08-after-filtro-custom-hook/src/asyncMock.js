const tasks = [
    { id: '1', text: 'Ir al super', completed: false},
    { id: '2', text: 'Doblar la ropa', completed: true},
    { id: '3', text: 'Limpiar el piso', completed: false},
    { id: '4', text: 'Sacar la basura', completed: false},
    { id: '5', text: 'Hacer la cama', completed: true},
]

export const getTasks = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(tasks)
        }, 2000)
    })
}