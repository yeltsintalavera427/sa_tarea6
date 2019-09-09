# Esta es la api que simula un servicio de carros de uber

## Servicio de solicitud de carros uber
### Listado de servicios que ofrece esta api
* Mostrar todos los ubers, esta funcion muestra todos los ubers disponibles
* Obtener ubicacion este servicio muestra la zona en la que se encuentra el uber

## Servicio de aviso a pilotos uber
* Servicio que avisa un piloto uber que se ha solicitado su carro

## Bus de integracion
* Servicio ver, este muestra todos los ubers disponibles
* Servicio seleccionar, este selecciona un uber de todos los que esten disponibles
* Servicio notificar, este servicio notifica al piloto que ha sido seleccionado para realizar un viaje
* Servicio ubicacion, este servicio muestra la ubicacion por zonas de un uber.

# Requerimientos
	* Express, para instalar correr el siguiente comando: npm install express --save.
# Como instalar
1. git clone [Link Text]( https://github.com/Doki1992/tarea2.git)    
2. cd tarea2/aviso_piloto
3. npm run start
4. cd .. 
5. cd tarea2/solicitud_cliente
6. npm run start
7. cd .. 
5. cd tarea2/esb
6. npm run start
7. cd ..  
8. Ir al navegador y usar cualquiera de los siguientes enlaces 
	* localhost:3002/ver
	* localhost:3002/notificar
	* localhost:3002/ubicacion/f, localhost:3002/ubicacion/a
