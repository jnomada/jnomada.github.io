import React from 'react';

const Card = ({name, height, mass, hair_color, eye_color, birth_year, gender, id}) => {
	return (
		<div className='tc bg-light-blue dib br3 pa3 ma2 grow bw5 shadow-5'>
			<h1>{name}</h1>
			<h4>Height: {height}</h4>
			<h4>Mass: {mass}</h4>
			<h4>Hair Colour: {hair_color}</h4>
			<h4>Birth Year: {birth_year}</h4>
			<h4>Eye Colour: {eye_color}</h4>
			<h4>Gender: {gender}</h4>
		</div>
	);
}

export default Card;
