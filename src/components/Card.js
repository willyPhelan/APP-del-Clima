import Spinner from "./Spinner"; 
import '../estilos/Card.css'

export default function Card ({showData, loadingData, weather, forecast}) { 

    var today = new Date() ;
    var day = today.getDate() ;
   
    var month = today.getMonth() + 1 ;
    var year = today.getFullYear() ;
    var date = day + '/' + month + '/' + year ; 
    
    if(loadingData) { return <Spinner/>}

    var url = ''
    var iconUrl = ''

    //url para prediccion del tiempo:

    var iconUrl3 = ''
    var iconUrl6 = ''
    var iconUrl9 = ''


    var forecastDate3 = ''
    var forecastDate6 = ''
    var forecastDate9 = ''

    if (showData){
        url = 'http://openweathermap.org/img/w/'
        iconUrl = url + weather.weather[0].icon + '.png'

    iconUrl3 = url + forecast.list[1].weather[0].icon + 'png' ;
    iconUrl6 = url + forecast.list[2].weather[0].icon + 'png' ;
    iconUrl9 = url + forecast.list[3].weather[0].icon + 'png' ;

    
   
    forecastDate3 = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) 
    forecastDate6 = forecast.list[2].dt_txt.substring(8, 10) + '/' + forecast.list[2].dt_txt.substring(5, 7) + '/' + forecast.list[2].dt_txt.substring(0, 4) 
    forecastDate9 = forecast.list[3].dt_txt.substring(8, 10) + '/' + forecast.list[3].dt_txt.substring(5, 7) + '/' + forecast.list[3].dt_txt.substring(0, 4) + ' ' +  forecast.list[3].dt_txt.substring(11, 13);
    }
  

  
       return (
        <div className="mt-5">
        {showData === true ?
            (<div className="container-card">
                <div className="card mb-3  bg-dark text-light">
                <div className="row g-0">
                <div className="col-md-4">
                <h3 className='card-title'> {weather.name} </h3>
              
                <p className="card-date"> {date} </p>
                <h1 className="card-temp">{(weather.main.temp - 273.15).toFixed(1)}°C</h1>
                <p className="card-desc">
                    <img src={iconUrl} alt='No-img'/> {weather.weather[0].description} </p>
                <img src='https://images.pexels.com/photos/2129796/pexels-photo-2129796.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className="img-fluid rounded-start" alt="..."/>
                </div>
                    <div className="col-md-8"> 
                    <div className="card body text-start mt-2">
                    <h5 className="card-text"> Temperatura Máxima: {(weather.main.temp_max - 273.15).toFixed(1)}°C</h5>
                    <h5 className="card-text"> Temperatura Mínima: {(weather.main.temp_min - 273.15).toFixed(1)}°C</h5>
                    <h5 className="card-text"> Sensación Térmica: {(weather.main.feels_like - 273.15).toFixed(1)}°C</h5>
                    <h5 className="card-text"> Humedad: {weather.main.humidity}%</h5>
                    <h5 className="card-text"> Velocidad del viento: {weather.wind.speed} m/s</h5>
                    <hr></hr>
                    <div className="predicciones row mt-4">
                        <div className="col">
                            <h5 className="pred">Predicción en 4hs:</h5>
                            
                            <p className="temp"> {(forecast.list[1].main.temp - 273.15).toFixed(1)}°C</p>
                            <p className="description"><img src={iconUrl} alt="icon"/>{forecast.list[1].weather[0].description}</p>
                            
                        </div>
                        <div className="col">
                            <h5 className="pred">Predicción en 8hs:</h5>
                            
                            <p className="temp"> {(forecast.list[3].main.temp - 273.15).toFixed(1)}°C</p>
                            <p className="description"><img src={iconUrl} alt="icon"/>{forecast.list[1].weather[0].description}</p>
                            
                        </div>
                        <div className="col">
                            <div>
                            <h5 className="pred">Predicción en 12hs:</h5>

                            <p className="temp"> {(forecast.list[2].main.temp - 273.15).toFixed(1)}°C</p>
                            <p className="description"><img src={iconUrl} alt="icon"/>{forecast.list[2].weather[0].description}</p> 
                            
                            </div>
                        </div>
                        
                       
                        </div>
                        </div>
                        
                        </div>
                        </div>
                        </div>
                        </div>
                    
                    
                    
            ):( <h2 className='no'> No hay datos </h2>)}
            </div>
    )
}