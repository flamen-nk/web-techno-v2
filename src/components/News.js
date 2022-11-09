import React, { useContext } from 'react';
import { NewsContext } from '../NewsContext';
import { Routes, Route, NavLink } from 'react-router-dom';
import NewsArticle from './NewsArticle';
import loaderGif from '../loading.gif';

function News(props) {
  const { data } = useContext(NewsContext);

  return (
    <div>
      <div className="head__app">
        <h1 className="head__text">NEWS APP</h1>
        <h2>Made by Usenov Nauryzbek and Nurymbekov Bibarys</h2>
        <ul className="list__head">
          <li>
            <NavLink className="bebra" to="/">
              TESLA
            </NavLink>
          </li>
          <li>
            <NavLink className="bebra" to="/about">
              TOP BUSINESS
            </NavLink>
          </li>
          <li>
            <NavLink className="bebra" to="/about1">
              EVERYTHING
            </NavLink>
          </li>
          <li>
            <NavLink className="bebra" to="/about2">
              TECH
            </NavLink>
          </li>
          <li>
            <NavLink className="bebra" to="/about3">
              APPLE
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="all__news">
        {data ? (
          data.articles.map((news) => (
            <NewsArticle data={news} key={news.url} />
          ))
        ) : (
          <div className="loader__box">
            <img className="loader__gif" src={loaderGif} />
          </div>
        )}
      </div>
    </div>
  );
}

export default News;
