import { createComponent } from '@lit-labs/react';
import React from 'react';
import { Image } from 'spacekit';

const SpaceImage = createComponent({
  react: React,
  elementClass: Image,
  tagName: 'space-image',
});

export default SpaceImage;
