import { html } from 'lit';
import './NumberBase/PaginationNumberBase';
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

export const PaginationNumberBase = paginationNumberBase.bind({});

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
