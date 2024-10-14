import React, { useState, useEffect } from 'react';
import { FaSpinner } from 'react-icons/fa';

const News = () => {
  const [news, setNews] = useState([]); 
  const [loading, setLoading] = useState(true); 

  const fetchNews = async () => {
    try {
      setLoading(true); 
      const response = await fetch('https://api.un-spia.org/api/v1/updates/news/'); // API endpoint
      const data = await response.json();
      setNews(data); 
      setLoading(false); 
    } catch (error) {
      console.error('Error fetching news:', error);
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <>
      <section className="bg-white pb-10 dark:bg-dark lg:pb-2 lg:pt-[4px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[510px] text-center lg:mb-4">
                <h3 className="mb-1 text-3xl font-bold text-dark dark:text-yellow-500 sm:text-2xl md:text-[40px]">
                  Our Recent News
                </h3>
                <p className="text-base text-body-color dark:text-dark-6">
                  Stay updated with the latest news and insights from our team.
                </p>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center items-center">
              <FaSpinner className="animate-spin text-yellow-500 text-4xl" />
            </div>
          ) : (
            <div className="-mx-4 flex flex-wrap">
              {news.map((item) => (
                <BlogCard
                  key={item.id}
                  date={new Date(item.created_at).toLocaleDateString()}
                  CardTitle={item.title}
                  CardDescription={item.description}
                  image={item.image}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default News;

const BlogCard = ({ image, date, CardTitle, CardDescription }) => {
  return (
    <div className="w-full p-6 md:w-1/2 lg:w-1/3">
      <div className="mb-10 w-full">
        <div className="mb-8 overflow-hidden rounded">
          <img
            src={image}
            alt=""
            className="w-full h-64 object-cover rounded-lg" 
          />
        </div>
        <div>
          {date && (
            <span className="mb-5 inline-block rounded bg-yellow-500 px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
              {date}
            </span>
          )}
          <h3>
            <a
              href="/#"
              className="mb-4 inline-block text-sm font-md text-dark hover:text-primary dark:text-yellow-500 sm:text-2xl lg:text-xl xl:text-sm"
            >
              {CardTitle}
            </a>
          </h3>
          <p className="text-base text-body-color dark:text-dark-6">
            {CardDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

