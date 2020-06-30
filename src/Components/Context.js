import React from 'react';

export const thecontext = {
  count: 0,
  projects: [],
  projectType: 'ALL',
};

export const ProjectCount = React.createContext(
  thecontext,
);
