import Table from './Table';

export default {
  title: 'table/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} 

export const Default = {
    args: {
      Items: 4,
    },
  };

export const Disabled = {
    args: {
      content: 'Button',
      disabled: true,
      Items: 4,
    },
  };

  