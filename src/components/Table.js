import React, { useState } from "react";
import styled from "styled-components";
import { Heading } from "./Heading";
import { CardArea } from "./CardArea";
import { PlayingCard } from "./PlayingCard";
import { ChatBox } from "./ChatBox";
import { Stats } from "./Stats";

const GreenTop = styled.div`
	background: green;
	width: 100%;
	height: 100%;
	padding-bottom: 1rem;
`;

const Wrapper = styled.div`
	display: flex;
	padding: 1rem;
`;

const gameStateMock = {
	house: [
		{ suit: null, value: null },
		{ suit: "Hearts", value: "King" }
	],
	player: [
		{ suit: "Spades", value: "Queen" },
		{ suit: "Diamonds", value: "9" }
	],
	chatLog: [
		{
			speaker: "Dealer",
			message: "Welcome to the Blackjack game. I'm your friendly dealer"
		},
		{ speaker: "Dealer", message: "To begin, type “deal.”" },
		{ speaker: "You", message: "deal" }
	],
	bankroll: 600,
	bet: 300,
	winnings: 0,
	hand: 0
};

const getValue = card => {
	switch (card.value) {
		case "King":
		case "Queen":
		case "Jack":
			return 10;
		case null:
			return 0;
		default:
			return Number(card.value);
	}
};

const spreadCards = hand =>
	hand.map((card, idx) => (
		<PlayingCard key={idx} suit={card.suit} value={card.value} />
	));

const addCards = hand =>
	hand.reduce((count, card) => count + getValue(card), 0);

export const Table = () => {
	const [gameState, setGameState] = useState(gameStateMock);

	return (
		<>
			<Heading>Agent Casino</Heading>
			<GreenTop>
				<Wrapper>
					<CardArea
						total={gameState ? addCards(gameState.house) : 0}
						title="House"
					>
						{spreadCards(gameState.house)}
					</CardArea>
					<CardArea
						total={gameState ? addCards(gameState.player) : 0}
						title="you"
					>
						{spreadCards(gameState.player)}
					</CardArea>
				</Wrapper>
				<Wrapper>
					<CardArea width="3">
						<ChatBox log={gameState.chatLog} />
					</CardArea>
					<CardArea>
						<Stats
							bet={gameState.bet}
							winnings={gameState.winnings}
							bankroll={gameState.bankroll}
							hand={gameState.hand}
						/>
					</CardArea>
				</Wrapper>
			</GreenTop>
		</>
	);
};
