import React from 'react';

const ingredient = (props) => {
  return(
    <div className="particularIngredient container">
      <h2>{props.match.params.theName}</h2>
      <p>You can add this to your pizza!</p>
    </div>
);
};


export default ingredient;
