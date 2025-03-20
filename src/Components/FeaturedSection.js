import React from 'react';
import './FeaturedSection.css';

const FeaturedSection = ({ sectionTitle, items }) => {
  return (
    <section className="featured-section">
      <h2>{sectionTitle}</h2>
      <div className="featured-items">
        {items.map((item, index) => (
          <div key={index} className="featured-card">
            <img src={item.image} alt={item.title} className="featured-image" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            {item.author ? <p>⭐ {item.author}</p> : <p>⭐ {item.username}</p>}
          </div>
        ))}
      </div>
      <button className="see-all-button">See all {sectionTitle.split(' ')[1]}</button>
    </section>
  );
};

export default FeaturedSection;
