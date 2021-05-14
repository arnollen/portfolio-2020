import React from 'react';

export const thecontext = {
  count: 0,
  projects: [],
  projectType: 'ALL',
  scrollSection: 'root',
  favorites: [],
  fly: true
};

export const ProjectCount = React.createContext(
  thecontext,
);
