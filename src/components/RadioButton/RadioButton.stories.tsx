import { userEvent, within } from '@storybook/test';
import RadioButton from './RadioButton';
import { fireEvent } from '@storybook/test';

export default {
  title: 'RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
};

export const checked = {
    args: {
      label: 'asd',
      background: 'red',
    },

    play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
      const canvas = within(canvasElement);
      console.log(canvas.getByTestId('Radio'));
      const radio = canvas.getByTestId('Radio');
      await fireEvent.click(radio);    
    }
  };

export const Disabled = {
    args: {
      label: 'asd',
      disabled: true,
      background: 'red',
    },
  };

  

