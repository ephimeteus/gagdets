import React, { useState, useEffect } from 'react';

const API_KEY = '509b5fc8580d4d70bee646864e221bd8' 
const API_URL = `https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=${API_KEY}`;

const NewsFeed = () => {
  
  const [data,SetData] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        SetData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  },[]);
 
  if (data) {
    return (
      <div className="news-feed">
        <ul>
          {data.articles.map((item) => (
            <li key={item.id}>
              <a href={item.url}>{item.title}</a>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return <p>Loading the news...</p>;
  }
};

export default NewsFeed;

