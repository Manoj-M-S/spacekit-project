import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import './src/Menu';
import './src/NavMenu/NavMenuItem';

export default {
  title: 'Constellations/Menu',
  component: 'space-menu',
} as Meta;

const Menu: Story<any> = ({ menuName, expandMenu, isExpanded, menuHref }) => {
  return html`
    <space-menu
      menu-name=${menuName}
      ?expand-menu=${expandMenu}
      ?is-expanded=${isExpanded}
      menu-href=${menuHref}
    >
    </space-menu>
  `;
};

const navMenuItem: Story<any> = ({
  title,
  description,
  iconName,
  size,
  state,
}) => {
  return html`
    <space-nav-menu-item
      title=${title}
      description=${description}
      icon-name=${iconName}
      size=${size}
      state=${state}
    >
    </space-nav-menu-item>
  `;
};

export const Default = Menu.bind({});
export const NavMenuItem = navMenuItem.bind({});

Default.args = {
  menuName: 'Resources',
  expandMenu: true,
  isExpanded: true,
  menuHref: '#',
};

NavMenuItem.args = {
  title: 'Products',
  description: 'Find the best solution for you',
  iconName: 'zap',
  size: 'small',
  state: 'default',
};

NavMenuItem.argTypes = {
  size: {
    options: ['small', 'large'],
    control: { type: 'radio' },
  },
  state: {
    options: ['default', 'hover', 'active'],
    control: { type: 'radio' },
  },
};
