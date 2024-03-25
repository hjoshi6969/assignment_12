import Dropdown from './Dropdown';

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
      Clicked: false,
      disabled: false,
      content: 'option 1',
    },
  };

export const Disabled = {
    args: {
      disabled: true,
      content: 'option 1',
    },
  };