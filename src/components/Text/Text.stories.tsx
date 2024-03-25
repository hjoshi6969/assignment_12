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

export const Default = {
  args: {
    content: 'Leorm Leorm Leorm Leorm Leorm Leorm Leorm Leorm ',
    disabled: false,
    heading: false,
    subHeading: false,
    highlighted: false,
  },
};

export const Heading = {
  args: {
    content: 'Leorm Leorm Leorm Leorm Leorm Leorm Leorm Leorm ',
    disabled: false,
    heading: true,
    subHeading: false,
    highlighted: false,
  },
};

export const SubHeading = {
  args: {
    content: 'Leorm Leorm Leorm Leorm Leorm Leorm Leorm Leorm ',
    disabled: false,
    heading: false,
    subHeading: true,
    highlighted: false,
  },
};

export const Highlighted = {
  args: {
    content: 'Leorm Leorm Leorm Leorm Leorm Leorm Leorm Leorm ',
    disabled: false,
    heading: false,
    subHeading: false,
    highlighted: true,
  },
};

export const Disabled = {
  args: {
    content: 'Leorm Leorm Leorm Leorm Leorm Leorm Leorm Leorm ',
    disabled: true,
    heading: false,
    subHeading: false,
    highlighted: false,
  },
};
