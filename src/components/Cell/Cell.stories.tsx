import Cell from './Cell';

export default {
  title: 'Table/Cell',
  component: Cell,
  tags: ['autodocs'],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} 

export const Default = {
    args: {
      CSS: false,
      content: 'CSS',
      background: 'red',
    },
  };

export const CSS = {
    args: {
      CSS: true,
      Header: false,
      content: 'CSS',
      background: 'red',
    },
  };

export const Header = {
    args: {
      CSS: false,
      Header:true,
      content: 'Table Heading',
      background: 'red',
    },
  };

  
export const Disabled = {
  args: {
    disabled: true,
    content: 'CSS',
    background: 'red',
  },
};