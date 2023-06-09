import useConsumirApi from "../Hooks/useConsumirApi"

export const Inicio = () => {

    //Se crea un valor inicial el cual se pasara como parameto de nuestro hook personalizado
    const api ='http://localhost:3000/items'

    //Destructuramos las propiedades de nuestra Api
    const {datosApi} = useConsumirApi(api)

    console.log(datosApi)

  return (
    <div>
        <h2>Inicio</h2>
    </div>
  )
}
