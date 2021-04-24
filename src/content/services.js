import React from 'react';
import {MdWeb, MdSettings, MdAllInclusive} from 'react-icons/md';

const services = [
  {
    icon: <MdWeb />,
    title: 'Website development',
    description: [
      'build, deploy & maintain WordPress sites',
      'create custom WordPress themes & plugins',
      'create blazing-fast websites using modern technologies (like static site generation)',
      '& more',
    ],
  },
  {
    icon: <MdSettings />,
    title: 'Application development',
    description: [
      'build web applications (like custom CMS, custom ERP systems etc.)',
      'build complete backends & APIs',
      '& more',
    ],
  },
  {
    icon: <MdAllInclusive />,
    title: 'DevOps',
    description: [
      'manage software infrastructure',
      'handle CI/CD (Continuous integration and continuous delivery)',
      '& more',
    ],
  },
];

export default services;
