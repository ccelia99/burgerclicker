import React from 'react';

import iconburger from './images/icon-food.png';
import iconcoupon from './images/icon-coupon.png';
import iconhuman from './images/icon-human.png';

function Menu(props){
    return(
      <div className="menu">
      <div><img src={iconburger} alt="game"/></div>
      <div><img src={iconcoupon} alt="coupons"/><span className="badge">{props.claimableCoupons}</span></div>
      <div><img src={iconhuman} alt="profile"/></div>
      </div>
    );
  }
  export default Menu;