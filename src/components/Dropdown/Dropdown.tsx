import { DropdownProps } from './Dropdown.types';
import styled, {css} from 'styled-components';

const StyledDropdown = styled.select<DropdownProps>`

    border: none;
    padding: 16px 32px;
    background-color: ${(props) => props.background};
    color: white;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    &:focus {
        border-radius: 4px;
    }
`;

const Dropdown = (props: DropdownProps) => {
    return (
        <StyledDropdown 
            disabled={props.disabled} 
            content={props.content}
            background={props.background}
            data-testid="Dropdown"
        >
            <option value="">Option 1</option>
            <option value="">Option 2</option>
            <option value="">Option 3</option>
        </StyledDropdown>
    );
};

export default Dropdown;