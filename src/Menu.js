import React from 'react';

import iconburger from './icon-food.png';
import iconcoupon from './icon-coupon.png';
import iconhuman from './icon-human.png';

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