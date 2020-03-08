import React from "react";
import styled from "styled-components";

const StatsArea = styled.div`
	display: block;
	text-transform: uppercase;
	font-family: Rye;
	font-weight: 100;
`;

const convertToDollars = cents => (cents / 100).toFixed(2);

export const Stats = ({ bet, winnings, hand, bankroll }) => (
	<StatsArea>
		{bankroll !== undefined && (
			<p>Bankroll: ${convertToDollars(bankroll)}</p>
		)}
		{bet !== undefined && <p>Bet: ${convertToDollars(bet)}</p>}
		{winnings !== undefined && (
			<p>Winnings: ${convertToDollars(winnings)}</p>
		)}
		{hand !== undefined && <p>Hand: {hand}</p>}
	</StatsArea>
);
