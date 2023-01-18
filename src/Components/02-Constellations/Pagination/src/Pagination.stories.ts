import { html } from 'lit';
import './NumberBase/PaginationNumberBase';
import './IndicatorBase/PaginationIndicatorBase';
import { Meta } from '@storybook/web-components';

export default {
  title: 'Constellations/Pagination',
  component: 'space-pagination',
} as Meta;

const paginationNumberBase = ({ type, total, pageSize, color, shape }: any) => {
  return html`
    <space-pagination-number
      type=${type}
      total=${total}
      color=${color}
      shape=${shape}
      page-size=${pageSize}
    >
    </space-pagination-number>
  `;
};

const paginationIndicatorBase = ({
  style,
  total,
  pageSize,
  colour,
  currentPageNumber,
}: any) => {
  return html`
    <space-pagination-indicator
      style=${style}
      total=${total}
      colour=${colour}
      current-page=${currentPageNumber}
      page-size=${pageSize}
    >
    </space-pagination-indicator>
  `;
};

export const PaginationNumberBase = paginationNumberBase.bind({});
export const PaginationIndicatorBase = paginationIndicatorBase.bind({});

PaginationNumberBase.args = {
  total: 100,
  pageSize: 10,
  type: 'default',
  color: 'light',
  shape: 'square',
};

PaginationNumberBase.argTypes = {
  type: {
    options: ['default', 'minimal'],
    control: { type: 'radio' },
  },
  color: {
    options: ['light', 'dark'],
    control: { type: 'radio' },
  },
  shape: {
    options: ['square', 'circle'],
    control: { type: 'radio' },
  },
};

PaginationIndicatorBase.args = {
  total: 50,
  pageSize: 10,
  style: 'dot',
  currentPageNumber: 1,
  colour: 'primaryLight',
};

PaginationIndicatorBase.argTypes = {
  style: {
    options: ['dot', 'line', 'dash', 'fraction'],
    control: { type: 'radio' },
  },
  colour: {
    options: ['primaryLight', 'primaryDark', 'greyLight', 'greyDark'],
    control: { type: 'radio' },
  },
};
