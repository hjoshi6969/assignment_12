import { ImgProps } from './Img.types';
import styled, {css} from 'styled-components';

const StyledImg = styled.img<ImgProps>`
    filter: grayscale(100%);

    ${(props) =>
    props.hover &&
    css`
        filter: grayscale(0%);
    `}

`;

const Img = (props: ImgProps) => {
    return (
        <StyledImg
          hover={props.hover}
          src={props.src}
          width={props.width}
          height={props.height}
        >
        </StyledImg>
    );
};

export default Img;