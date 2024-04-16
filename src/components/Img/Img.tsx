import { ImgProps } from './Img.types';
import styled, {css} from 'styled-components';

const StyledImg = styled.img<ImgProps>`
    filter: grayscale(100%);
    background-color: ${(props) => props.background};
    ${(props) =>
    props.hover &&
    css`
        filter: grayscale(0%);
    `}
    ${(props) =>
    props.disabled &&
    css`
        filter: grayscale(100%);
        cursor: not-allowed;
    `}

`;

const Img = (props: ImgProps) => {
    return (
        <StyledImg
          hover={props.hover}
          src={props.src}
          width={props.width}
          height={props.height}
          disabled={props.disabled}
          background={props.background}
        >
        </StyledImg>
    );
};

export default Img;