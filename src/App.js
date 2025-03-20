import React from 'react';
import Navbar from './Components/Navbar';
import HeaderImage from './Components/HeaderImage';
import FeaturedSection from './Components/FeaturedSection';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeaderImage />
      <FeaturedSection sectionTitle="Featured Articles" items={articles} />
      <FeaturedSection sectionTitle="Featured Tutorials" items={tutorials} />
      <Footer />
    </div>
  );
}

// Dummy data for articles and tutorials
const articles = [
  {
    title: "React vs Vue",
    description: "A comparison between React and Vue.",
    author: "Jane Doe",
    image: "https://picsum.photos/200",
  },
  {
    title: "Introduction to NodeJS",
    description: "Learn the basics of NodeJS.",
    author: "John Smith",
    image: "https://picsum.photos/201",
  },
  {
    title: "React Hooks Deep Dive",
    description: "Understanding React Hooks.",
    author: "Alice Johnson",
    image: "https://picsum.photos/202",
  },
];

const tutorials = [
  {
    title: "JavaScript Basics",
    description: "Learn JavaScript fundamentals.",
    username: "dev_guru",
    image: "https://picsum.photos/210",
  },
  {
    title: "React Router Guide",
    description: "Understand React Router.",
    username: "react_pro",
    image: "https://picsum.photos/211",
  },
  {
    title: "Express.js Essentials",
    description: "Learn the essentials of Express.",
    username: "node_master",
    image: "https://picsum.photos/212",
  },
];

export default App;