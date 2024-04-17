import { userEvent, within } from '@storybook/test';
import Button from './Button';

export default {
  title: 'components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  args: {
    content: 'Button',
    disabled: false,
    background: 'red',
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const Button = canvas.getByTestId('Button');

    // Dispatch mouseEnter event to simulate hover
    await userEvent.hover(Button);

    // Wait for the hover effect to complete (optional)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Log the button element and computed styles
    console.log(Button.outerHTML);
    console.log(window.getComputedStyle(Button));
  },
};

export const Disabled = {
  args: {
    content: 'Button',
    disabled: true,
    background: 'red',
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const Button = canvas.getByTestId('Button');

    // Dispatch mouseEnter event to simulate hover
    await userEvent.hover(Button);

    // Wait for the hover effect to complete (optional)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Log the button element and computed styles
    console.log(Button.outerHTML);
    console.log(window.getComputedStyle(Button));
  },
};
