import Card from './Card';

export default {
  title: 'Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} 

export const Default = {
    args: {
      Clicked: false,
      disabled: false,
      background: '#ffffff',
    },
  };

export const Disabled = {
    args: {
      disabled: true,
    },
  };