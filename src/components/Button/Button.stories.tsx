import Button from './Button';

export default {
  title: 'components/Button',
  component: Button,
  tags: ['autodocs'], 
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} 

export const Default = {
    args: {
      content: 'Button',
      disabled: false,
      background: 'red',
    },
  };

  
export const Disabled = {
    args: {
      content: 'Button',
      disabled: true,
      background: 'red',
    },
  };
  
export const hovered = {
    args: {
      content: 'Button',
      disabled: false,
      hovered: true,
      background: 'red',
    },
  };

  