import { ReactNode } from "react";

export interface RowProps { 
    Items: Number;
    content: ReactNode;
    disabled?: boolean;
    background: string;
}