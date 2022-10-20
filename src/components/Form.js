import React, {useState} from "react"
import '../estilos/Form.css'

export default function Form ({newLocation}) {
    const [city, setCity] = useState('')

    const onSubmit = (evento) => {
        evento.preventDefault()
        console.log(city)
        if (city === '' || !city) return 
        newLocation(city) ;
    }




    return (
        <div className="container-form">
    <form onSubmit={onSubmit}>
    <div className="input-group mb-3 mx-auto sm-12">
        <input type='text' className="form-control" placeholder="Ingrese una ciudad" onChange={(evento) => setCity(evento.target.value)}/>
        <button className="btn btn-primary input-group-text" type="submit">Buscar Ciudad</button>
        </div> 

</form>
</div>
    )
}