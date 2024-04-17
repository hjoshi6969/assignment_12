import Form from './Form';

export default {
  title: 'Form',
  component: Form,
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