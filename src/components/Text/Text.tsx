import { TextProps } from './Text.types';
import styled, {css} from 'styled-components';

const StyledText = styled.p<TextProps>`
  font-size: 16px;
  color: #333;

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

  ${(props) =>
    props.subHeading &&
    css`
      font-weight: 600;
    `}

  ${(props) =>
    props.highlighted &&
    css`
      font-size: 25px;
      font-weight: bold;
      font-style: italic;
    `}
`;

const Text = (props: TextProps) => {
    return (
        <StyledText
          disabled={props.disabled}
          heading={props.heading}
          subHeading={props.subHeading}
          highlighted={props.highlighted}
          content={props.content}
        >
          {props.content}
        </StyledText>
    );
};

export default Text;