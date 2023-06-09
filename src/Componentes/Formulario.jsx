import useFormulario from "../Hooks/useForm"

export const Formulario = () => {

    const defaultsFormulario = {
        nombre: '',
        apellido: '' 
    }
    
    const enviarDatos =(data)=>{
        console.log("Se enviaron los datos" + data);
    }

    //Destructuramos el hook del formulario personalizado
    const {formulario, handleSubmit, handleChange} = useFormulario (enviarDatos, defaultsFormulario)

   

  return (
    <div>
        <h1>Formulario Con Hook Personalizado</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="Nombre" 
            name= "nombre"
            value = {formulario.nombre}
            onChange={handleChange}/>


            <input type="text" 
            placeholder="Apellido"
            name="apellido"
            value={formulario.apellido}
            onChange={handleChange}/>
            

            <button>Enviar</button>
        </form>

    </div>
  )
}

export default Formulario

