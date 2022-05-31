import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import reportWebVitals from './reportWebVitals';
import 'css-doodle';

const Profile = () => {
  return (
    <div id="profile-text">
       <h1 id = "aboutAOC">ABOUT 'AOC'</h1>
      <div id="pic-box">
  <img
      id="aoc-image"
      src="https://tse1.mm.bing.net/th?id=OIP.m0HYREM8FGVnsQo9dlcDCAHaE8&pid=Api&P=0&w=276&h=185"
      alt="Alexandria Ocasio-Cortez portrait"
    />
</div>
      <div id="line"></div>
      <h3>
        Alexandria Ocasio-Cortez or 'AOC' for short, is a Democrat politician who shocked everyone in 2018 when aged 29, she won the election for New York's 14th district and become the youngest woman ever to serve in the U.S congress. 
        One part of her groundbreaking campaign was the unique design of her adverts, which have been highly acclaimed and copied by others. This quote generator is based on them. You can find the original election posters at AOC's official store here. 
        <a target="_blank" href="https://shop.ocasiocortez.com/?"> Link to store</a>
      </h3>
      
    </div>
  );
};

function App() {
  return (
  	<div id="container">
     <css-doodle use="var(--rule1)"id = "doodle"></css-doodle>
      <Profile /> 
      </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
