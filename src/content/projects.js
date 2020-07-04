import React from 'react'
import { DiReact, DiWordpress, DiNodejs } from 'react-icons/di'

export default [
  {
    preview: 'fessh/fessh_01.png',
    slideshow: 'fessh',
    title: 'FESSH Admin & Backend',
    typeIcon: [<DiReact />, <DiNodejs />],
    description: [
      `FESSH Admin is an Event-Management-System (special type of CMS) built with React.js for a Switzerland-based organization to help manage their conferences in an easy manner.`,
      `I've also architected and built the major part of the backend (Node.js) that stands behind and serves the FESSH Admin & FESSH mobile applications.`,
    ],
  },
  {
    preview: 'foodsdrive/foodsdrive_01.png',
    slideshow: null,
    title: 'FoodsDrive',
    typeIcon: <DiWordpress />,
    description: `foodsdrive.hu is a WordPress-based website I've built for a Hungarian startup company which aims to ease the life of people who'd like to eat out comfortably and without any hassle.`,
    link: 'https://foodsdrive.hu',
  },
  {
    preview: 'foodsdrive_admin/fda_01.png',
    slideshow: 'foodsdrive_admin',
    title: 'FoodsDrive Admin',
    typeIcon: <DiReact />,
    description: `FoodsDrive Admin is a React.js application that serves as a custom CMS & dashboard UI for the FoodsDrive mobile application.`,
  },
]
