import RadioButton from './RadioButton';

export default {
  title: 'RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
};

export const checked = {
    args: {
      label: 'asd',
      checked: true,
    },
  };

export const Disabled = {
    args: {
      label: 'asd',
      disabled: true,
    },
  };
  

