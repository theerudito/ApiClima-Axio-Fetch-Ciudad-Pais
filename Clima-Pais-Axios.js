const temperatura_valor = document.getElementById("temperatura-valor")
const temperatura_descripcion = document.getElementById("temperatura-descripcion")
const humedad = document.getElementById("humedad")
const ciudad = document.getElementById("ubicacion")
const viento = document.getElementById("viento")
const iconoAnimado = document.getElementById("icono-animado")
const clima = document.getElementById("clima")


const obtenerDatos = async () => {
      const res = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=Ecuador&lang=es&units=metric&appid=6a3b130f8cc2a2577fac82539b3ca3cb")
      console.log(res);
      const data = await res.data
      console.log(data);
     let temperatura = Math.round(data.main.temp)
     console.log(temperatura);
     temperatura_valor.textContent = `${temperatura} °C`
     let tempDescripcion = data.weather[0].description.toUpperCase()
     console.log(tempDescripcion)
     temperatura_descripcion.textContent = tempDescripcion
     let humed = data.main.humidity
     console.log(humed);
     humedad.textContent = `${humed}%`
     let city = data.name
     console.log(city);
     ciudad.textContent = city
     let vien = data.wind.speed
     console.log(vien);
     viento.textContent = `${vien} m/s`
     switch (data.weather[0].main) {
      case 'Thunderstorm':
                    iconoAnimado.src='iconos/thunder.svg'
                    console.log('TORMENTA');
                    break;
                  case 'Drizzle':
                    iconoAnimado.src='iconos/rainy-2.svg'
                    console.log('LLOVIZNA');
                    break;
                  case 'Rain':
                    iconoAnimado.src='iconos/rainy-7.svg'
                    console.log('LLUVIA');
                    break;
                  case 'Snow':
                    iconoAnimado.src='iconos/snowy-6.svg'
                      console.log('NIEVE');
                    break;                        
                  case 'Clear':
                      iconoAnimado.src='iconos/day.svg'
                      console.log('LIMPIO');
                    break;
                  case 'Atmosphere':
                    iconoAnimado.src='iconos/weather.svg'
                      console.log('ATMOSFERA');
                      break;  
                  case 'Clouds':
                      iconoAnimado.src='iconos/cloudy-day-1.svg'
                      console.log('NUBLADO');
                      break;  
                  default:
                    iconoAnimado.src='iconos/cloudy-day-1.svg'
                    console.log('por defecto');
    }    
}
obtenerDatos()



