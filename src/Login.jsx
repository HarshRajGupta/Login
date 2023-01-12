import { memo } from 'react';
import Styled from 'styled-components';
import Left from './Left';
import Form from './Form';

function App() {
	return (
		<Container>
			<Left />
			<Right>
				<Form />
			</Right>
		</Container>
	);
}

const Container = Styled.main`
	display: grid;
	background: #F5F5F5;
	grid-template-columns: auto auto;
	@media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
	max-width: 100vw;
	min-height: 100vh;
	align-items: center;
	* {
		transition: all 250ms ease-in-out;
		overflow: hidden;
		max-width: 100%;
	}
	justify-content: space-around;
`;

const Right = Styled.div`
	display: flex;
	max-width: 55.6914vw;
	@media (max-width: 768px) {
		max-width: 90vw;
        width: 90vw;
		margin-left: 5vw;
    }
	padding: 0 5vw;
	height: 90vh;
	background: #FFFFFF;
	box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.16);
	border-radius: 12px;
	align-items: center;
`;

export default memo(App);
