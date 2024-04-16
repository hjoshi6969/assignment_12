import Footer from './Footer';

export default {
  title: 'table/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} 

export const Default = {
    args: {
      disabled: false,
      background: 'red',
    },
  };

export const Disabled = {
    args: {
      disabled: true,
      background: 'red',
    },
  };