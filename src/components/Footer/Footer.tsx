import { FooterProps } from './Footer.types';
import styled, {css} from 'styled-components';
import { Text } from '../Text';

const StyledFooter= styled.div<FooterProps>`
    width: 600px;
    margin-top: 10px;
    height: 4px;
    background-color: ${(props) => props.background};
`;

const Card = (props: FooterProps) => {
    return (
        <StyledFooter
            disabled={props.disabled}
            background={props.background}
        >
        </StyledFooter>
    );
};

export default Card;