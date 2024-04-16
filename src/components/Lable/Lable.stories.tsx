import Lable from './Lable';

export default {
  title: 'components/Lable',
  component: Lable,
  tags: ['autodocs'],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} 

export const PC = {
    args: {
      name: 'Himanshu Joshi',
      job:'Web developer',
      PC: true,
      Mobile: false,
      background: 'red',
    },
  };

export const Mobile = {
    args: {
      name: 'Himanshu Joshi',
      job:'Web developer',
      PC: false,
      Mobile: true,
      background: 'red',
    },
  };

export const Disabled = {
    args: {
      disabled: true,
      name: 'Himanshu Joshi',
      job:'Web developer',
      background: 'red',
    },
  };


  