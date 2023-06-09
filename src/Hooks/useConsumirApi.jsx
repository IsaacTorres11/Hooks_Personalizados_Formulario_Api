import { useEffect, useState } from "react"

//Creamos la estructura de nuetro Hook personalizado
function  useConsumirApi(url)  {
    
    //Creamos un estado para almacenar los resultados de la Api
    const [datosApi, setDatosApi] = useState([])

    useEffect(()=>{
        const consumoApi =async()=>{
            try {
                const respuesta = await fetch(url)
                const resultados = await respuesta.json()
                setDatosApi(resultados)
            } catch (error) {
                console.log(error)
            }
        }
        consumoApi()
    },[url])


    return {
        datosApi
    }
}

export default useConsumirApi