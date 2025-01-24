// books.ts

import { Book } from "../components/GameGrid";
import mockinbird from '../assets/Mockingbird-Alt.png'
import navalRavikant from '../assets/the_almanack_of_naval_ravikant.webp'
import privateEquity from '../assets/private_equity.jpg'
import surrenderExperiment from '../assets/Surrender_experiment.jpg'
import hormozi from '../assets/100m_offer.jpg'

export const books: Book[] = [
    {
      id: 1,
      name: "The Almanack of Naval Ravikant: A Guide to Wealth and Happiness",
      description: "The Almanack of Naval Ravikant is a compilation of timeless wisdom and insights on wealth, happiness, and living a fulfilling life, distilled from Naval's reflections and experiences.",
      background_image: navalRavikant,
      grade: 8.5,
      genres: ['Self-Help', 'Business', 'Philosophy'],
      author: 'Eric Jorgenson'
    },
    {
      id: 2,
      name: "Private Equity: A Memoir",
      description: "Private Equity: A Memoir, by Carrie Sun is a gripping account of one woman's self-discovery inside a top Wall Street firm, offering an urgent indictment of privilege, extreme wealth, and work culture.",
      background_image: privateEquity,
      grade: 6.5,
      genres: ['Autobiography', 'Business'],
      author: 'Carrie Sun'
    },
    {
      id: 3,
      name: "The Surrender Experiment: My Journey into Life's Perfection.",
      description: "The Surrender Experiment by Michael A. Singer is a profound memoir about letting go of personal control and embracing life’s flow, leading to unexpected success and spiritual awakening.",
      background_image: surrenderExperiment,
      grade: 9.5,
      genres: ['Autobiography', 'Self-Help', 'Philosophy' ],
      author: 'Michael A. Singer'
    },
    {
        id: 4,
        name: "$100M Offers: How To Make Offers So Good People Feel Stupid Saying No",
        description: 
        "$100M Offers: How To Make Offers So Good People Feel Stupid Saying No by Alex Hormozi is a practical guide to creating compelling, high-value offers that attract customers and drive exponential business growth.",
        background_image: hormozi,
        grade: 8.5,
        genres: ['Self-Help', 'Business'],
        author: 'Alex Hormozi'
      },
  ];
  