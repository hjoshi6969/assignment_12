import { TextProps } from './Text.types';
import styled, {css} from 'styled-components';

const StyledText = styled.p<TextProps>`
  font-size: 16px;
  color: #333;
  background-color: ${(props) => props.background};
  ${(props) =>
    props.disabled &&
    css`
      text-decoration: none;
      font-size: 16px;
      color: #ccc;
      cursor: not-allowed;
    `}

  ${(props) =>
    props.heading &&
    css`
      font-size: 24px;
      font-weight: bold;
      text-decoration: underline;
    `}
`;

const Text = (props: TextProps) => {
    return (
        <StyledText
          disabled={props.disabled}
          heading={props.heading}
          background={props.background}
          content={props.content}
        >
          {props.content}
        </StyledText>
    );
};

export default Text;