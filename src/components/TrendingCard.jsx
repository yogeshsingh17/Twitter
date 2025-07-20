import React from 'react';
import '../CSS/TrendingCard.css';
import TrendingMoreOptions from './TrendingMoreOptions';

const TrendingCard = ({ category, hashtag, postCount }) => {

    return (
        <div className="trending-card">
            <div>
                <div className="trending-category">{category}</div>
                <TrendingMoreOptions />
            </div>
            <div className="trending-hashtag">{hashtag}</div>
            <div className="trending-post-count">{postCount}</div>
        </div>
    );
};

export default TrendingCard;