import React from 'react';
import Styled from 'styled-components';

function Form() {
	return (
		<Container>
			<H1>login</H1>
			<div className='grid'>
				<Label for="id">Login ID</Label>
				<InputBox
					id="id"
					type="text"
					name="id"
					placeholder="Enter Login ID"
				/>
			</div>
			<div className='grid'>
				<Label for="id">Password</Label>
				<InputBox
					id="password"
					type="password"
					name="password"
					placeholder="Password"
				/>
			</div>
			<Box>
				<div>
					<CheckBox
						id="rememberMe"
						type="checkbox"
						name="rememberMe"
					/>
					<Suffix for="rememberMe">Remember me</Suffix>
				</div>
				<a href="#">Change Password</a>
			</Box>
			<div>
				<CheckBox
					id="termsConditons"
					type="checkbox"
					name="termsConditonse"
				/>
				<Suffix for="termsConditons">
					Agree to &nbsp; <a href="/">Terms and Conditions</a>
				</Suffix>
			</div>
			<LoginButton
				onClick={(e) => {
					e.preventDefault();
					console.log('Login');
				}}
			>
				Login
			</LoginButton>
			<RegisterLink>
				Don`t have an account? &nbsp; <a href="/">Register Here</a>
			</RegisterLink>
		</Container>
	);
}

const Container = Styled.form`
	display: grid;
	width: 40vw;
    @media (max-width: 1024px) {
        width: 35vw;
    }
    @media (max-width: 768px) {
        width: 75vw;
    }
    grid-gap: 16px;
	margin: 0 auto;
	a {
		color: #F78719;
	}
    * {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        font-size: 14px;
        font-family: 'Poppins';
	    font-style: normal;
        line-height: 126%;
        @media (max-width: 768px) {
            font-size: 12px;
        }
        @media (max-width: 428px) {
            font-size: 10px;
        }
    }
    .grid {
        display: grid;
        grid-gap: 8px;
    }
`;

const H1 = Styled.h1`
	margin: 0 auto;
	font-weight: 700;
	font-size: 48px;
	text-align: center;
	text-transform: Capitalize;
`;

const Label = Styled.label`
    margin-top: 8px;
`;

const InputBox = Styled.input`
	width: 100%;
	height: 48px;
    font-size: 16px;
    @media (max-width: 1024px) {
        font-size: 14px;
        height: 42px;
    }
    @media (max-width: 428px) {
        font-size: 12px;
        height: 36px;
    }
    max-height: 8vh;
	border: 1px solid rgba(4, 7, 47, 0.4);
	border-radius: 8px;
    padding-left: 16px;
    &:focus {
        border: 2px solid #F78719;
        outline: none;
    }
`;

const Box = Styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const CheckBox = Styled.input`
	box-sizing: border-box;
	display: flex;
	width: 16px;
	height: 16px;
	border: 2px solid #737B86;
	border-radius: 4px;
`;

const Suffix = Styled.span`
    margin-left: 10px;
	color: #737B86;
`;

const LoginButton = Styled.button`
	margin: 0 auto;
    margin-top: 20px;
	width: 30vw;
    font-size: 18px;
    @media (max-width: 768px) {
        width: 60vw;
        height: 42px;
        font-size: 16px;
    }
    @media (max-width: 428px) {
        height: 36px;
        font-size: 14px;
    }
	height: 56px;
    max-height: 8vh;
	background: #1575A7;
	border-radius: 8px;
	color: #FFFFFF;
    justify-content: center;
    border: none;
    outline: none;
    text-decoration: none;
    &:hover {
        scale: 1.05;
    }
`;

const RegisterLink = Styled.div`
	color: #04072F;
	margin: 0 auto;
`;

export default Form;
