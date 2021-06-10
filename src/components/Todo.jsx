import React from 'react'//Importar siempre react//
import '../utils/css/Todo.estilos.css';
import Hielo from '../utils/images/Hielo.jpg'

const Todo = () => {
	return(
		<div className="Container_Cabecera">
		<div className="ContainerText">
		<h1>Hola este es el componente de la cabecera</h1>
		<p>Consiste en interpretar una pieza musical patinando sobre una pista de hielo y realizando piruetas, giros, saltos y acrobacias; estos elementos son valorados por unos jueces siguiendo un código de puntuación que tiene en cuenta tanto el aspecto técnico y atlético de la actuación como la interpretación artística. Aunque el patinaje con fines recreativos se practica desde hace varios siglos.</p>
		</div>
		<div className="ContainerImage">
		<img id="image1" src={Hielo} alt="Hola este es el patinaje sobre hielo" />
		</div>
		</div>
		);
} 
export default Todo