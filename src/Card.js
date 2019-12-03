import React from 'react';

const Card = (props) =>{
	return (
		<div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={`https://robohash.org/jabneel${props.id}?200x200`} />
			<div>
				<h2>{props.name}</h2>
				<p>{props.email}</p> 
				{/* why curly brackets
				 must be wrapped javascript expression in curly brackets*/}
			</div>
		</div>
	)
}

export default Card;