import { createComponent } from '@lit-labs/react';
import React from 'react';
import { SectionHeading } from 'spacekit';

const SpaceSectionHeading = createComponent({
  react: React,
  elementClass: SectionHeading,
  tagName: 'space-section-heading',
});

export default SpaceSectionHeading;
