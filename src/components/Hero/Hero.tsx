import { HeroProps } from './Hero.types';
import styled, {css} from 'styled-components';
import Lable from '../Lable/Lable';

const StyledHero = styled.div<HeroProps>`
    width: 700px;
    height: 400px;
    background-color: #f1e8e6;
    display: flex;
    justify-content: center;
    align-items: center;
    ${(props) =>
    props.Mobile &&
    css`
            width: 400px;
    height: 700px;
    }
    `}
`;

const Hero = (props: HeroProps) => {
    return (
        <StyledHero
           PC={props.PC}
           Mobile={props.Mobile}
        >
            <Lable job='Web Developer' name='Himanshu Joshi' PC={props.PC} Mobile={props.Mobile}></Lable>
        </StyledHero>
    );
};

export default Hero;