import React from 'react';
import {DiReact, DiWordpress, DiNodejsSmall} from 'react-icons/di';

const projects = [
  {
    preview: 'fessh_preview.png',
    title: 'FESSH Admin & Backend',
    types: [<DiReact />, <DiNodejsSmall />],
    description: [
      `FESSH Admin is an Event-Management-System (special type of CMS) built with React.js for a Switzerland-based organization to help manage their conferences in an easy manner.`,
      `I've also architected and built the major part of the backend (Node.js) that stands behind and serves the FESSH Admin & FESSH mobile applications.`,
    ],
    slideshow: true,
    slideshowFolder: 'fessh',
  },
  {
    preview: 'foodsdrive_preview.png',
    title: 'FoodsDrive',
    types: [<DiWordpress />],
    description: `foodsdrive.hu is a WordPress-based website I've built for a Hungarian startup company which aims to ease the life of people who'd like to eat out comfortably and without any hassle.`,
    link: 'https://foodsdrive.hu',
  },
  {
    preview: 'fda_preview.png',
    title: 'FoodsDrive Admin',
    types: [<DiReact />],
    description: `FoodsDrive Admin is a React.js application that serves as a custom CMS & dashboard UI for the FoodsDrive mobile application.`,
    slideshow: true,
    slideshowFolder: 'foodsdrive_admin',
  },
];

export default projects;
