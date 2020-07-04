import React from 'react'
import { DiReact, DiWordpress, DiNodejs } from 'react-icons/di'

export default [
  {
    preview: 'fessh_preview.png',
    slideshow: [
      'fessh_01.png',
      'fessh_02.png',
      'fessh_03.png',
      'fessh_04.png',
      'fessh_05.png',
      'fessh_06.png',
      'fessh_07.png',
    ],
    title: 'FESSH Admin & Backend',
    typeIcon: [<DiReact />, <DiNodejs />],
    description: [
      `FESSH Admin is an Event-Management-System (special type of CMS) built with React.js for a Switzerland-based organization to help manage their conferences in an easy manner.`,
      `I've also architected and built the major part of the backend (Node.js) that stands behind and serves the FESSH Admin & FESSH mobile applications.`,
    ],
  },
  {
    preview: 'foodsdrive_preview.png',
    slideshow: null,
    title: 'FoodsDrive',
    typeIcon: <DiWordpress />,
    description: `foodsdrive.hu is a WordPress-based website I've built for a Hungarian startup company which aims to ease the life of people who'd like to eat out comfortably and without any hassle.`,
    link: 'https://foodsdrive.hu',
  },
  {
    preview: 'fda_preview.png',
    slideshow: ['fda_01.png', 'fda_02.png', 'fda_03.png', 'fda_04.png'],
    title: 'FoodsDrive Admin',
    typeIcon: <DiReact />,
    description: `FoodsDrive Admin is a React.js application that serves as a custom CMS & dashboard UI for the FoodsDrive mobile application.`,
  },
]
