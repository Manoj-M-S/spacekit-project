import { createComponent } from '@lit-labs/react';
import React from 'react';
import { FourColWithFooter } from 'spacekit';

const SpaceFourColWithFooter = createComponent({
  react: React,
  elementClass: FourColWithFooter,
  tagName: 'space-fourcolfooter',
});

export default SpaceFourColWithFooter;
