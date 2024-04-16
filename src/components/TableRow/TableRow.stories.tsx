import TableRow from './TableRow';
import Cell from '../Cell/Cell';

export default {
  title: 'Table/TableRow',
  component: TableRow,
  tags: ['autodocs'],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} 

export const Default = {
    args: {
      Items: 4,
      content:
      <>
          <Cell content='HTML'></Cell>
          <Cell content='CSS' CSS={true}></Cell>
          <Cell content='JS'></Cell>
          <Cell content='React'></Cell>
          <Cell content='Ruby on Rails'></Cell>
      </>,
      background: 'red',

    },
  };

  export const Disabled = {
    args: {
      Items: 4,
      content:
      <>
          <Cell content='HTML'></Cell>
          <Cell content='CSS' CSS={true}></Cell>
          <Cell content='JS'></Cell>
          <Cell content='React'></Cell>
          <Cell content='Ruby on Rails'></Cell>
      </>,
      disabled: true,
      background: 'red',

    },
  };



  