import React from "react";

const Card = ({ name, email, id }) => {
	return (
		<div className="tc bg-white-70 dib br3 pa3 ma2 grow bw2 shadow-5">
			<img alt="robots" src={`https://robohash.org/${id}?200x200`} />
			<main>
				<h2>{name}</h2>
				<p>{email}</p>
			</main>
		</div>
	);
};

export default Card;
