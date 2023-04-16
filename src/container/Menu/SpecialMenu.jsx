import React from 'react';
import {SubHeading,MenuItem} from '../../components'
import {images,data} from '../../constants'

import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu section__padding flex__center" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte"/>
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu-wine flex__center">
        <p className="app__specialMenu-menu-heading">Wine & Beer</p>
        <div className="app__specialMenu-menu-items">
            {data.wines.map((item,index)=>{
              return (
                <MenuItem title={item.title} price={item.price} tags={item.tags}/>
              )
              
            })}
        </div>
      </div>
      <div className="app__specialMenu-menu-img">
      <img src={images.menu} alt="menu__img" />
    </div>
    <div className="app__specialMenu-menu-cocktails flex__center">
        <p className="app__specialMenu-menu-heading">Cocktails</p>
        <div className="app__specialMenu-menu-items">
            {data.cocktails.map((item,index)=>{
              return (
                <MenuItem title={item.title} price={item.price} tags={item.tags}/>
              )
              
            })}
        </div>
      </div>
    </div>
    
  </div>
);

export default SpecialMenu;
