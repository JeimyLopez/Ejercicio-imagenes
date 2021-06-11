import React from 'react' 
import '../utils/css/Footer.estilos.css';
import Agresivo from '../utils/images/Agresivo.jpg'

const Footer = () => {
	return(
		<div className="Container_Footer">
		<div className="ContainerText">
		<h1>Patinaje Agresivo</h1>
		<p>Esta modalidad es quizá, junto con el patinaje artístico, 
		la más visual de todas gracias a la cantidad de saltos en el 
		aire y piruetas que realiza el patinador. En este estilo también 
		se emplea el concepto de grindar (tan utilizado en el Skate) o 
		deslizarse con los patines sobre bancos, barandillas, escaleras o escalones. 
		or su gran complejidad, este estilo es sobre todo juvenil.</p>
		</div>
		<div className="ContainerImage">
		<img id="image3" src={Agresivo} alt="Hola, este es el patinaje agresivo" />
		</div>
		</div>
		);
}
export default Footer