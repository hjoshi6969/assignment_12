import Text from './Text';

export default {
  title: 'components/Text',
  component: Text,
  tags: ['autodocs'],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} 

export const Paragraph = {
  args: {
    content: 'Leorm Leorm Leorm Leorm Leorm Leorm Leorm Leorm ',
    disabled: false,
    heading: false,
    background: 'red',

  },
};

export const Heading = {
  args: {
    content: 'Leorm Leorm Leorm Leorm Leorm Leorm Leorm Leorm ',
    disabled: false,
    heading: true,
    background: 'red',

  },
};

export const Disabled = {
  args: {
    content: 'Leorm Leorm Leorm Leorm Leorm Leorm Leorm Leorm ',
    disabled: true,
    heading: false,
    background: 'red',

  },
};
