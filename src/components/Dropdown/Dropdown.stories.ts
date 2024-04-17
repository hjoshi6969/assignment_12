import { userEvent, within, waitFor } from '@storybook/test';
import Dropdown from './Dropdown';

export default {
  title: 'Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} 

export const Default = {
  args: {
    clicked: false,
    disabled: false,
    content: 'option 1',
    background: 'red',
    items: ['Item 1', 'Item 2', 'Item 3'],
    onSelect: (item: string) => {
      console.log(`Selected item: ${item}`);
    },
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const Dropdown = canvas.getByTestId('Dropdown');
    
    console.log(Dropdown);

    // Delay the click to see if it helps
    setTimeout(async () => {
      await userEvent.click(Dropdown);
    }, 1000); // 1 second delay
  }
};

export const Disabled = {
  args: {
    disabled: true,
    content: 'option 1',
    background: 'red',
    items: ['Item 1', 'Item 2', 'Item 3'],
    onSelect: (item: string) => {
      console.log(`Selected item: ${item}`);
    },
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    try {
      const canvas = within(canvasElement);
    const Dropdown = canvas.getByTestId('Dropdown');
    
    console.log(Dropdown);

    // Delay the click to see if it helps
    setTimeout(async () => {
      await userEvent.click(Dropdown);
    }, 1000); // 1 second delay
    } catch(error){
      console.error('Error in Disabled story:', error);
      console.log("Dropdown is not getting clicked because it it disabled good job NAMASTE!!");
      
    }
  }
};
