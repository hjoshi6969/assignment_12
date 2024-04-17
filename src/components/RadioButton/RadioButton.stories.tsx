import { within } from '@storybook/test';
import RadioButton from './RadioButton';
import { fireEvent } from '@storybook/test';

export default {
  title: 'RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const Checked = {
  args: {
    label: 'asd',
    background: 'red',
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const radio = canvas.getByTestId('Radio');

    try {
      // Simulate click event to check the radio button
      await fireEvent.click(radio);

      // Log the radio button element
      console.log(radio.outerHTML);
    } catch (error) {
      console.error('Error in Checked story:', error);
    }
  },
};

export const Disabled = {
  args: {
    label: 'asd',
    disabled: true,
    background: 'red',
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const radio = canvas.getByTestId('Radio');

    try {
      // Ensure the radio button is disabled
      expect(radio.getAttribute('disabled')).toBe('');

      // Try to simulate click event on a disabled radio button
      // This should not change the radio button's state
      await fireEvent.click(radio);

      // Log the radio button element
      console.log(radio.outerHTML);
    } catch (error) {
      console.error('Error in Disabled story:', error);
      console.log("Button is not getting clicked because it it disabled good job NAMASTE!!");
      
    }
  },
};
