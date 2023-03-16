import React from 'react';

export const thecontext = {
  count: 0,
  projects: [],
  projectType: 'ALL',
  scrollSection: 'root',
  favorites: [],
  fly: true,
  flySpeed: 1,
};

export const ProjectCount = React.createContext(
  thecontext,
);
