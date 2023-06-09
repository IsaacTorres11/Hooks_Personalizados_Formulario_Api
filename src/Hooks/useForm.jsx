import { useState } from "react"


//Este es un hook personalizado
//Este hook recibira como parametro un callback y los datos por default para el formulario
function useFormulario (callback, defaults) {
    
    // Creamos un estado que controle el valor del formulario
    const [formulario, setFormulario] = useState (defaults)

    //Creanmos una funcion que se ejecute cuando se mande la informacion
    const handleSubmit =(e)=>{
        e.preventDefault();
        callback(formulario)
        console.log(formulario)
    }
    

    //Creamos la funcion que se ejecute cuando se escriba en el input 
    const handleChange = (e)=>{
        const {name,value} = e.target
        setFormulario({
            ...formulario,
            [name]: value
        })
    }

    return{
        formulario,
        handleSubmit,
        handleChange
    }
}

export default useFormulario