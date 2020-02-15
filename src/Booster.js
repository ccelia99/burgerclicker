import React from 'react';

function Booster(props){
    return(
      <div className="booster">
        <div className="booster__title">{props.boost}
           burgers / click
        </div>
      </div>
    );
  }

  export default Booster;