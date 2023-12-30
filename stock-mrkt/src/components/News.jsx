import React, { useState, useEffect } from 'react';

const News = () => {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState(null);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await fetch(`https://api.iex.cloud/v1/data/CORE/NEWS?last=1&token=pk_85f727a2802d4a7d9de64485baeb569b`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setNews(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 align="center">News</h1>{loading && <p>Loading...</p>}
       {news && news.length > 0 && (
        <div>
          <h3>Headline: </h3>
          <p>{news[0].headline}</p>
          <p><strong>{news[0].summary}</strong></p>
        </div>
      )}
    </div>
  );
};

export default News;
