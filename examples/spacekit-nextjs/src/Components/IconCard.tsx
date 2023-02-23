import React from 'react';
import { createComponent } from '@lit-labs/react';
import { IconCard } from 'spacekit';

const SpaceIconCard = createComponent({
  react: React,
  tagName: 'space-icon-card',
  elementClass: IconCard,
});

export default SpaceIconCard;
