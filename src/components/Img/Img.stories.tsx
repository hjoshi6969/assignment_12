import Img from './Img';

export default {
  title: 'components/Img',
  component: Img,
  tags: ['autodocs'],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} 

export const Default = {
    args: {
        Hover: false,
        src: 'https://th.bing.com/th/id/OIP._ZiGF6kngmC4k-ZtM_0tWwHaFO?rs=1&pid=ImgDetMain',
        width: 500,
        height: 300,
        background: 'red',
    },
  };

export const hover = {
    args: {
        hover: true,
        src: 'https://th.bing.com/th/id/OIP._ZiGF6kngmC4k-ZtM_0tWwHaFO?rs=1&pid=ImgDetMain',
        width: 500,
        height: 300,
        background: 'red',
    },
  };




  