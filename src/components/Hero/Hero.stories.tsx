import Hero from './Hero';

export default {
  title: 'Hero',
  component: Hero,
  tags: ['autodocs'],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} 

export const PC = {
    args: {
      PC: true,
      Mobile: false,
      content: 'option 1',
    },
  };

export const Mobile = {
    args: {
      PC: false,
      Mobile: true,
      content: 'option 1',
    },
  };