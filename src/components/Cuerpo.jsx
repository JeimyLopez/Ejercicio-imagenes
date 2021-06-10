import React from 'react'//Importar siempre react//
import '../utils/css/Cuerpo.estilos.css';
import Rendimiento from '../utils/images/Rendimiento.jpg'

const Cuerpo = () => {
	return ( 
		<div className="Container_Cuerpo">
		<div className="ContainerText">
		<h1>Hola este es el componente del Cuerpo</h1>
		<p>Un patinador de velocidad puede alcanzar los 60km/hora siempre y cuando patine sobre la pista ideal. Este estilo cuenta con muchísimos seguidores en todo el mundo gracias a la adrenalina que genera la velocidad en el patinador. Cada año se producen maratones de velocidad a lo largo y ancho del planeta, copando ciudades como Londres, Montreal o Berlín.</p>
		</div>
		<div className="ContainerImage">
		<img id="image2" src={Rendimiento} alt="Hola, este es el patinaje de rendimiento" />
		</div>
		</div>
		);
} 
export default Cuerpo