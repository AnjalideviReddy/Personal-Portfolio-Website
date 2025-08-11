import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeadcontent";
import { FaFolderOpen } from "react-icons/fa";
import "./styles.scss";

// ✅ Make sure image is in: public/images/image1.jpg
const portfolioData = [
  {
    id: 1,
    name: "Personal Portfolio Website",
    image: process.env.PUBLIC_URL + "/images/image1.jpg", // public folder path
 link: "https://github.com/AnjalideviReddy/Personal-Portfolio-Website/tree/main/src",

    category: 1,
  },
  // more projects...
];

const filterData = [
  { filterId: 1, label: "All" },
  { filterId: 2, label: "Development" },
];

const Portfolio = () => {
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  const handleFilter = (currentId) => {
    setFilteredValue(currentId);
  };

  const handleHover = (index) => {
    setHoveredValue(index);
  };

  const filteredItems =
    filteredValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.category === filteredValue);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<FaFolderOpen size={40} />}
      />

      <div className="portfolio__content">
        {/* Filter Tabs */}
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li key={item.filterId}>
              <button
                className={item.filterId === filteredValue ? "active" : ""}
                onClick={() => handleFilter(item.filterId)}
                type="button"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Portfolio Cards */}
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              key={`cardItem${item.name.trim()}`}
              className="portfolio__content__cards__item"
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <img alt={item.name} src={item.image} />
                  </a>
                ) : (
                  <img alt={item.name} src={item.image} />
                )}
              </div>

              {index === hoveredValue && (
                <div className="overlay">
                  <p>{item.name}</p>
                  {item.link && (
                    <button onClick={() => window.open(item.link, "_blank")}>
                      Visit
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
