import React from 'react';

export const thecontext = {
  count: 0,
  projects: [],
};

export const ProjectCount = React.createContext(
  thecontext.count,
  thecontext.projects,
);
