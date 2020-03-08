import React from "react";
import styled from "styled-components";
import * as cardFaces from "../svg";

const CardFace = styled.div`
	width: 6.2rem;
	height: 8.8rem;
	margin: 0 0.5rem;
`;

const CardImg = styled.img`
	width: 100%;
	height: 100%;
`;

const getCardFace = (suit, value) => {
	let card;
	if (suit && value) {
		card = `${suit}_${value}`;
	} else {
		card = "Card_Back";
	}

	return cardFaces[card];
};

export const PlayingCard = ({ suit, value }) => (
	<CardFace>
		<CardImg alt={"playing card"} src={getCardFace(suit, value)} />
	</CardFace>
);
