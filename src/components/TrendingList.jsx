import React from 'react';
import TrendingCard from './TrendingCard';
import '../CSS/TrendingList.css'

const trendingData = [
  {
    id: 1,
    category: "Trending in India",
    hashtag: "#Chandrayaan3",
    postCount: "35.4K posts"
  },
  {
    id: 2,
    category: "Politics · Trending",
    hashtag: "#Elections2025",
    postCount: "82.1K posts"
  },
  {
    id: 3,
    category: "Entertainment · Trending",
    hashtag: "#Pushpa2",
    postCount: "120K posts"
  }
];

const TrendingList = () => {
  return (
    <div className="trending-list">
      {trendingData.map(trend => (
        <TrendingCard
          key={trend.id}
          category={trend.category}
          hashtag={trend.hashtag}
          postCount={trend.postCount}
        />
      ))}
    </div>
  );
};

export default TrendingList;