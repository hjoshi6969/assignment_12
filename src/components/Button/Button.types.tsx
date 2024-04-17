export interface ButtonProps {
    content: string;
    hovered?: boolean;
    background: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}