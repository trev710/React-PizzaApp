import React, { Component } from 'react';

class Model extends Component
{
  render()
  {
    return(
      <div className="wholeblackout">
        <div className="whiteRectangle">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Model;
