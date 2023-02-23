import { createComponent } from '@lit-labs/react';
import React from 'react';
import { Banner } from 'spacekit';

const SpaceBanner = createComponent({
  react: React,
  elementClass: Banner,
  tagName: 'space-banner',
});

export default SpaceBanner;
