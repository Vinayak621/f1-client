import React, { useEffect, useState, useRef } from 'react';
import './homePage.css';
const HomePage = () => {
  const [news, setNews] = useState([]);
  const newsSectionRef = useRef(null);

  useEffect(() => {
    const fetchF1News = async () => {
        // this api key if used to fetch the data from the news related api.
      const apiKey = "0c533dd30bf34872b53012b84597fc1a"; 
      const url = `https://newsapi.org/v2/everything?q=formula%201&apiKey=${apiKey}`;

      try {
        const response = await fetch(url);

        if (response.ok) {
          const data = await response.json();
          setNews(data.articles);
        } else {
          console.error('Failed to fetch F1 news');
        }
      } catch (error) {
        console.error('Error fetching F1 news:', error);
      }
    };

    fetchF1News();
  }, []);

  const handleScrollToNews = () => {
    if (newsSectionRef.current) {
      newsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="homepage">
      <div className="backgroundLogo"></div>
      <div className="textOverlay">
        <h1>Formula 1: The Pinnacle of Motorsport</h1>
        <p>Experience the speed, the thrill, and the drama of the most prestigious racing series in the world.</p>
        <button className='buttonStyle' onClick={handleScrollToNews}>DISCOVER MORE</button>
      </div>
      <div className='title-news'>
      <span style={{marginRight:"2px"}}>NEWS</span>
      <div className="line"></div>
      </div>
      <div ref={newsSectionRef} className='news'>
        
        <div className="newsCards">
          {news?.map((article, index) => (
            <div className="newsCard" key={index}>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                <img src={article.urlToImage} alt={article.title} className="newsImage" />
              </a>
              <div className="newsContent">
              <a href={article.url} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none",color:"black"}}>
                <h3>{article.title}</h3>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
