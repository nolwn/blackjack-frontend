import React from "react";
import styled from "styled-components";

const Title = styled.h1`
	text-align: center;
	background: green;
	margin: 0;
	padding-top: 1rem;
	color: greenyellow;
	text-transform: uppercase;
`;

export const Heading = ({ children }) => <Title>{children}</Title>;
