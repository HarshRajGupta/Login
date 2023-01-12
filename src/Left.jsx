import { memo } from 'react';
import Styled from 'styled-components';

function Left() {
	return (
		<Container>
			<Image
				src="images/Image.svg"
				alt="Image"
			/>
		</Container>
	);
}

const Container = Styled.div`
    display: grid;
    cursor: pointer;
    @media (max-width: 768px) {
        display: none;
    }
`;
const Image = Styled.img`
    display: flex;
    max-width: 30vw;
    max-height: 84vh;
`;
export default memo(Left);
