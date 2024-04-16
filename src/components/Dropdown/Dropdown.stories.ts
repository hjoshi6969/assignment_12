import { userEvent, within } from '@storybook/test';
import Dropdown from './Dropdown';
import { fireEvent } from '@storybook/test';

export default {
  title: 'Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} 

export const Default = {
  args: {
    disabled: false,
    content: 'option 1',
    background: 'red',
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    console.log(canvas.getByTestId('Dropdown'));
    await fireEvent.click(canvas.getByTestId('Dropdown'));
  }
};


export const Disabled = {
    args: {
      disabled: true,
      content: 'option 1',
      background: 'red',
    },
  };