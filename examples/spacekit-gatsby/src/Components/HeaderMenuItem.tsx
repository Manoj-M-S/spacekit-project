import { createComponent } from '@lit-labs/react';
import React from 'react';
import { HeaderMenuItem } from 'spacekit';

const SpaceHeaderMenuItem = createComponent({
  react: React,
  elementClass: HeaderMenuItem,
  tagName: 'space-header-menu-item',
});

export default SpaceHeaderMenuItem;
