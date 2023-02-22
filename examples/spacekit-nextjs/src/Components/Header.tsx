import { createComponent } from '@lit-labs/react';
import React from 'react';
import { Header } from 'spacekit';

const SpaceHeader = createComponent({
  react: React,
  elementClass: Header,
  tagName: 'space-header',
});

export default SpaceHeader;
