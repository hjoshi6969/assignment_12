import TableRowHeading from './TableHeading';
import Cell from '../Cell/Cell';

export default {
  title: 'Table/TableRowHeading',
  component: TableRowHeading,
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
          <Cell content='HTML' Header={true}></Cell>
      </>,
      background: 'red',

    },
  };

  export const Disabled = {
    args: {
      Items: 4,
      content:
      <>
        <Cell content='HTML' Header={true}></Cell>
      </>,
      disabled: true,
      background: 'red',

    },
  };



  