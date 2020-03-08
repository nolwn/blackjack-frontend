import React, { useState } from "react";
import styled from "styled-components";

const TextBox = styled.div`
	border: 2px green solid;
	border-radius: 0.3rem;
	padding: 0.3rem;
	color: green;
	font-weight: bold;
	max-height: 6rem;
	overflow-y: auto;
	margin-bottom: 1rem;
	&::selection {
		background: green;
		color: greenyellow;
	}
`;

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
`;

const UserInput = styled.div`
	display: flex;
	flex: auto;
	flex-direction: row;
`;

const InputStyled = styled.input`
	background: none;
	border: green solid 2px;
	padding: 0.5rem;
	border-radius: 0.3rem 0 0 0.3rem;
	width: 100%;
	flex: 1;
	color: green;
	font-weight: bold;
	font-family: serif;
	font-size: 1rem;
`;

const ButtonStyled = styled.button`
	background: green;
	color: greenyellow;
	border: none;
	border-radius: 0.5rem;
	margin: none;
	border: 2px green solid;
	border-left: none;
	border-radius: 0 0.3rem 0.3rem 0;
	width: 10rem;
	font-size: 1rem;
	font-family: Rye;
	&:active {
		background: greenyellow;
		color: green;
	}
`;

export const ChatBox = ({ log }) => {
	const [message, setMessage] = useState("");

	const handleKeyDown = e => {
		if (e.keyCode === 13) submitResponse(message);
	};
	const handleChange = e => {
		setMessage(e.target.value);
	};
	const submitResponse = () => {
		setMessage("");
	};

	return (
		<Wrapper>
			<TextBox>
				{log &&
					log.map((entry, index) => (
						<p key={index}>
							{entry.speaker}: {entry.message}
						</p>
					))}
			</TextBox>
			<UserInput>
				<InputStyled
					tabIndex="0"
					onKeyDown={handleKeyDown}
					onChange={handleChange}
					value={message}
				/>
				<ButtonStyled onClick={submitResponse}>Submit</ButtonStyled>
			</UserInput>
		</Wrapper>
	);
};
