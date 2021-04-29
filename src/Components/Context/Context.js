import React from 'react';

export const thecontext = {
  count: 0,
  projects: [],
  projectType: 'ALL',
  scrollSection: 'root',
  favorites: [],
};

export const ProjectCount = React.createContext(
  thecontext,
);
