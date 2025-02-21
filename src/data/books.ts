// books.ts

import { Book } from "../entities/Book";
import giveTake from '../assets/give_take.jpg'
import navalRavikant from '../assets/the_almanack_of_naval_ravikant.webp'
import privateEquity from '../assets/private_equity.jpg'
import surrenderExperiment from '../assets/Surrender_experiment.jpg'
import hormozi from '../assets/100m_offer.jpg'
import unthetheredSoul from '../assets/untethered_soul.jpg'
import miracleMorning from '../assets/miracleMorning.jpg'
import psychologyMoney from '../assets/psychologyMoney.jpg'
import algebraWealth from '../assets/algebraWealth.jpg'
import normalPeople from '../assets/normalPeople.jpg'

export const books: Book[] = [
    {
      id: 1,
      name: "The Almanack of Naval Ravikant: A Guide to Wealth and Happiness",
      description: "The Almanack of Naval Ravikant is a compilation of timeless wisdom and insights on wealth, happiness, and living a fulfilling life, distilled from Naval's reflections and experiences.",
      background_image: navalRavikant,
      grade: 8.5,
      genres: ['Self-Help', 'Business', 'Philosophy'],
      author: 'Eric Jorgenson',
      release_date: new Date('2020-09-15'),
    },
    {
      id: 2,
      name: "Private Equity: A Memoir",
      description: "Private Equity: A Memoir, by Carrie Sun is a gripping account of one woman's self-discovery inside a top Wall Street firm, offering an urgent indictment of privilege, extreme wealth, and work culture.",
      background_image: privateEquity,
      grade: 6.5,
      genres: ['Autobiography', 'Business'],
      author: 'Carrie Sun',
      release_date: new Date('2024-02-13'),
    },
    {
      id: 3,
      name: "The Surrender Experiment: My Journey into Life's Perfection.",
      description: "The Surrender Experiment by Michael A. Singer is a profound memoir about letting go of personal control and embracing life’s flow, leading to unexpected success and spiritual awakening.",
      background_image: surrenderExperiment,
      grade: 8.5,
      genres: ['Autobiography', 'Self-Help', 'Philosophy' ],
      author: 'Michael A. Singer',
      release_date: new Date('2015-06-02'),
    },
    {
        id: 4,
        name: "$100M Offers: How To Make Offers So Good People Feel Stupid Saying No",
        description: 
        "$100M Offers: How To Make Offers So Good People Feel Stupid Saying No by Alex Hormozi is a practical guide to creating compelling, high-value offers that attract customers and drive exponential business growth.",
        background_image: hormozi,
        grade: 8.5,
        genres: ['Self-Help', 'Business'],
        author: 'Alex Hormozi',
        release_date: new Date('2021-08-02'),
      },
      {
        id: 5,
        name: "The Untethered Soul: The Journey Beyond Yourself",
        description: 
        "The Untethered Soul: The Journey Beyond Yourself by Michael A. Singer is a spiritual guide that explores self-awareness and inner peace by encouraging readers to transcend their limitations and discover their true selves",
        background_image: unthetheredSoul,
        grade: 9.5,
        genres: ['Self-Help', 'Philosophy', 'Psychology'],
        author: 'Michael A. Singer',
        release_date: new Date('2007-10-03'),
      },
      {
        id: 6,
        name: "Give and Take: Why Helping Others Drives Our Success",
        description: 
        "In Give and Take, Adam Grant reveals how people who generously help others—Givers—often achieve the most meaningful success, challenging the notion that selfishness leads to the top. Through research and real-world stories, he shows how giving enhances networking, collaboration, and leadership.",
        background_image: giveTake,
        grade: 6,
        genres: [ 'Business', 'Psychology', 'Personal-Development', 'Self-Help',],
        author: 'Adam Grant',
        release_date: new Date('2013-04-09'),
      },
      {
        id: 7,
        name: "The Miracle Morning: The Not-So-Obvious Secret Guaranteed to Transform Your Life (Before 8AM)",
        description: 
        "The Miracle Morning by Hal Elrod explores how a simple morning routine—focusing on personal development through practices like meditation, affirmations, and exercise—can transform your life. By dedicating time each morning to these habits, Elrod claims you can boost productivity, improve well-being, and achieve your goals faster.",
        background_image: miracleMorning,
        grade: 7.5,
        genres: [ 'Productivity', 'Personal-Development', 'Self-Help',],
        author: 'Hal Elrod',
        release_date: new Date('2012-12-07'),
      },
      {
        id: 8,
        name: "The Psychology of Money: Timeless Lessons on Wealth, Greed, and Happiness",
        description: 
        "The Psychology of Money by Morgan Housel explores how people's attitudes and behaviors toward money influence their financial success and overall happiness. Using engaging stories and insights, Housel demonstrates that financial decisions are more about human psychology than numbers, highlighting the importance of behavior and mindset in building wealth.",
        background_image: psychologyMoney,
        grade: 8.0,
        genres: ['Business', 'Personal-Finance', 'Psychology', 'Self-Help'],
        author: 'Morgan Housel',
        release_date: new Date('2020-09-09'),
      },
      {
        id: 9,
        name: "The Algebra of Wealth: A Simple Formula for Financial Security",
        description: 
        "In The Algebra of Wealth, Scott Galloway offers a practical guide to achieving financial security in today's economy. Drawing from his experiences as a professor and entrepreneur, he provides insights on career choices, economic trends, and personal habits that contribute to wealth accumulation.",
        background_image: algebraWealth,
        grade: 8.5,
        genres: ['Business', 'Personal-Finance', 'Self-Improvement'],
        author: 'Scott Galloway',
        release_date: new Date('2024-04-23'),
      },
      {
        id: 10,
        name: "Normal People",
        description: 
        "Normal People by Sally Rooney explores the complex relationship between Marianne and Connell as they navigate love, friendship, and identity from high school to university. Through emotionally nuanced storytelling, the novel examines themes of power dynamics, social class, and the impact of personal insecurities on human connection.",
        background_image: normalPeople,
        grade: 9.0,
        genres: ['Drama', 'Literary-Fiction', 'Romance'],
        author: 'Sally Rooney',
        release_date: new Date('2018-08-28'),
      },
  ];
  