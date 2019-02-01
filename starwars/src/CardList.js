import React from 'react';
import Card from './Card';

const CardList = ({ people }) => {
	return (
		<div>
			{
				people.map((user, i) => {
				return (
				<Card 
				key={i} 
				name={people[i].name} 
				homeland={people[i].homeland} 
				mass={people[i].mass}
				gender={people[i].gender}
				eye_color={people[i].eye_color}
				hair_color={people[i].hair_color}
				height={people[i].height}
				birth_year=	{people[i].birth_year}
				/> 
				) 
				})

			}		
		</div> 
	);
}





export default CardList;