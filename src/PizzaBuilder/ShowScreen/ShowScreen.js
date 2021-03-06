import React from 'react';

const showScreen = (props) => {
  return(
    <div className="col-md-8 order-md-1">
      <h4>Make Your Pizza Here:</h4>
        <div className="ingredientSpace">
          <div className="card ingredientContainer" style={{backgroundImage: "url("+ props.pizzaCrustImage +")"}}>
          </div>

          {
        
            Object.keys(props.pizzaComposition).map((ingredientKey, index) => {
                let tempArrayJSX = [];
                for(let j=0; j<props.pizzaComposition[ingredientKey]; j++)
                {
                  tempArrayJSX.push(
                    <div
                      className="card ingredientContainer"
                      style={{backgroundImage: "url("+ props.ingredientsInfo[ingredientKey].image +")"}}
                      key={ingredientKey + "-" + j}
                      >
                    </div>
                  );
                }

                return tempArrayJSX;
            })
          }
        </div>
    </div>
  );
};

export default showScreen;


