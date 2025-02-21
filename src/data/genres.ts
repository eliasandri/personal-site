import { Genre } from "../entities/Genre";
import fantasy from '../assets/fantasy.png'
import autobiography from '../assets/biography-genre-line-icon-illustration-vector.jpg'
import selfHelp from '../assets/self-help.jpg'
import business from '../assets/business.png'
import philosophy from '../assets/philosophy.png'
import psychology from '../assets/psychology.png'
import personalDevelopment from '../assets/personal_development.png'
import productivity from '../assets/productivity.png'
import personalFinance from '../assets/personal_finance.png'
import selfImprovement from '../assets/selfImprovement.webp'
import romance from '../assets/romance.png'
import literaryFiction from '../assets/literaryFiction.png'
import drama from '../assets/drama.png'

export const genres: Genre[] = [
   // { id: 1, name: "Fantasy", image_background: fantasy },
  /*{ id: 2, name: "Science Fiction" },
  { id: 3, name: "Mystery" },
  { id: 4, name: "Thriller" },
  { id: 6, name: "Horror" },
  { id: 7, name: "Historical Fiction" },
  { id: 9, name: "Biography" },*/
  { id: 5, name: "Romance", image_background: romance },
  { id: 8, name: "Literary-Fiction", image_background: literaryFiction },
  { id: 10, name: "Autobiography", image_background: autobiography },
  { id: 11, name: "Self-Help", image_background: selfHelp },
  { id: 12, name: "Business", image_background: business },
  /*{ id: 13, name: "History" },
  { id: 14, name: "Science/Technology" },
  { id: 15, name: "Young Adult" },
  //{ id: 16, name: "Children's Literature" },
  { id: 17, name: "Poetry" },
  { id: 18, name: "Cookbooks" },
  { id: 19, name: "Graphic Novels" },
  { id: 20, name: "Travel" },*/
  { id: 21, name: "Philosophy", image_background: philosophy},
  { id: 22, name: "Psychology", image_background: psychology },
  { id: 23, name: "Personal-Development", image_background: personalDevelopment },
  { id: 24, name: "Productivity", image_background: productivity },
  { id: 25, name: "Personal-Finance", image_background: personalFinance },
  { id: 26, name: "Self-Improvement", image_background: selfImprovement },
  { id: 27, name: "Drama", image_background: drama },
  ];