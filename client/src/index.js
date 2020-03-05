import React from 'react';
import ReactDOM from 'react-dom';


import './index.css';
import HeadImage from './components/head_image';
import Menu from './components/menu';


ReactDOM.render(<HeadImage />, document.getElementById('head-image'));
ReactDOM.render(<Menu />, document.getElementById('menu'));