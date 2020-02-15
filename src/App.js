import React, {Component, useState} from 'react';
import './App.css';
import burger from './burger.jpg';
import iconburger from './icon-food.png';
import iconcoupon from './icon-coupon.png';
import iconhuman from './icon-human.png';

class Clicker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    }
    this.mouseClicked = this.mouseClicked.bind(this);
  }

  mouseClicked() {
    const clicks = this.state.clicks;
    this.setState({
      clicks: clicks + 1
    });
  }

  render(){
    return(
      <div className="clicker">
        <div className='header'>
          <h1>Burger Clicker</h1>
        </div>
        <div className="content content--justified">
          <Stats count={this.state.clicks} />
          <Burger onClick={this.mouseClicked} />
          <Booster boost={5.3} />
        </div>
        <Menu claimableCoupons={23}/>
      </div>
    );
  }
}

function Stats(props){
  return(
    <div className="stats">
      <div className="stats__title">Burgers</div>
  <div className="stats__count">{props.count}</div>
    </div>
  );
}

function Burger(props){
  const [pressed, setPressed] = useState(false);
  const classValue = pressed ? "burger__img burger__img--pressed" : "burger__img";
  return(
     <div className="burger">
      <img 
      src={burger} 
      alt="" 
      className={classValue}
      onClick={props.onClick}
      onPointerDown={() => setPressed(true)}
      onPointerUp={() => setPressed(false)}
      />
      </div>
   );
}


function Booster(props){
  return(
    <div className="booster">
      <div className="booster__title">{props.boost}
         burgers / click
      </div>
    </div>
  );
}

function Menu(props){
  return(
    <div className="menu">
    <div><img src={iconburger} alt="game"/></div>
    <div><img src={iconcoupon} alt="coupons"/><span className="badge">{props.claimableCoupons}</span></div>
    <div><img src={iconhuman} alt="profile"/></div>
    </div>
  );
}

export default Clicker;