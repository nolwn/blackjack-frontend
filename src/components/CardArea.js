import React from "react";
import styled from "styled-components";

const PlayArea = styled.div`
	padding: 2rem;
	background: greenyellow;
	min-height: 8.8rem;
	display: flex;
	font-family: serif;
	flex: auto;
	font-weight: bold;
	color: green;
`;

const InfoWrapper = styled.div`
	display: flex;
`;

const Info = styled.h2`
	flex: 1;
	color: greenyellow;
	text-transform: uppercase;
	margin: 0;
	font-weight: 100;
	text-align: ${props => props.text};
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 1rem;
	flex: ${({ width }) => (width ? width : 1)};
`;

export const CardArea = ({ children, title, total, width }) => (
	<Wrapper width={width}>
		<InfoWrapper>
			{title && <Info text="left">{title}</Info>}
			{total && <Info text="right">Total: {total}</Info>}
		</InfoWrapper>
		<PlayArea>{children}</PlayArea>
	</Wrapper>
);
