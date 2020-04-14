# DI

1. Duplicar el directorio de react-parcel y renombrar a my-di
2. Crear un contenedor de IoC con Inversify
3. Crear un servicio "WeatherService". Este servicio recibirá por inyección el servicio "TemperatureConverter" Este weather service devolverá una temperatura aleatoria en Fahrenheit y Celsius entre 10 y 30º Celsius
3. Crear un servicio "TemperatureConverter". Este se encargará de convertir en Fahrenheit y Celsius una temperatura
4. Pintar en un componente de React la temperatura. El usuario elige el formate temperatura
