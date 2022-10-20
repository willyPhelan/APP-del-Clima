import React, {useState} from 'react'
import Form from './Form';
import Card from './Card';

export default function WeatherPanel () {

    const urlWeather = 'https://api.openweathermap.org/data/2.5/weather?appid=486e29993ac44ecd3a82a53e2be43396&lang=es'
    const cityUrl = '&q='
    const urlForecast ='https://api.openweathermap.org/data/2.5/forecast?appid=486e29993ac44ecd3a82a53e2be43396&lang=es'

    const [weather, setWeather] = useState([]) ; 
    const [forecast, setForecast] = useState([]) ;
    const [loading, setLoading] = useState(false) ;
    const [show, setShow] = useState(false) ; 
    const [location, setLocation] = useState('')


    // fn para el clima - llamado a API 

    const getLocation = async(loc) => {
        setLoading(true);
        setLocation(loc);
        
          const url = urlWeather + cityUrl + loc;

        await fetch(url).then((response) =>{
            if(!response.ok) throw {response}
            return response.json();
        }).then((weatherData) =>{
            console.log(weatherData);
            setWeather(weatherData);
        }).catch(error =>{
            console.log(error);
            setLoading(false);
            setShow(false);
        });

        //Forecast

        const urlF = urlForecast + cityUrl + loc;

        await fetch(urlF).then((response) =>{
            if(!response.ok) throw new Error(response)
            return response.json();
        }).then((forecastData) =>{
            console.log(forecastData);
            setForecast(forecastData);

            setLoading(false);
            setShow(true);

        }).catch(error =>{
            console.log(error);
            setLoading(false);
            setShow(false);
        });

        
    }
    

    return (
        <React.Fragment>
            
            <Form newLocation = {getLocation} />
            <Card showData={show} loadingData={loading} weather={weather} forecast={forecast}/>
                
           

        </React.Fragment>
    )


}