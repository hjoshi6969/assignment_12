import { CardProps } from './Card.types';
import styled, {css} from 'styled-components';
import Img from '../Img/Img';
import { Text } from '../Text';
import './Card.css'

const StyledCard = styled.div<CardProps>`
    width: 300px;
    height: 400px;
    background-color: #edd2cb;
    border-radius: 10px;
    overflow: hidden;

    ${(props) =>
    props.disabled &&
    css`
        filter: grayscale(100%);
        cursor: not-allowed;
    `}
`;

const Card = (props: CardProps) => {
    return (
        <StyledCard
            disabled={props.disabled}
            clicked={props.clicked}
        >
            <Img src='https://th.bing.com/th/id/OIP.0fWaFvMXXAjViusl4W5DQAHaEo?rs=1&pid=ImgDetMain' width={300} height={200}></Img>
            <div className='description'><Text content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, reprehenderit neque, ipsam amet perspiciatis doloribus, odio at repudiandae reiciendis quia saepe? Minus iste porro veritatis.'}></Text></div>
            <div className='info'>
                <Text content='2024-02-01'></Text>
                <Text content='HTML, CSS, JS'></Text>
            </div>
        </StyledCard>
    );
};

export default Card;