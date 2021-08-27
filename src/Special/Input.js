import React from 'react';

const input = (props) => {
  let inputElement = null;
  switch(props.type)
  {
    case('input'):
    case('checkbox'):
      inputElement =
      <input
        className="form-control"
        {...props.elementConfig}
        value={props.value}
        onChange={props.specificHandler || props.changed}
      />
      ;
    break;
    case('textarea'):
      inputElement =
      <textarea
        className="form-control"
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed}
      />
      ;
    break;
    case('select'):
      inputElement =
        <select
          className="form-control"
          value={props.value}
          onChange={props.changed}
        >
          {
            props.elementConfig.options.map((anOption, index) => (
              <option key={anOption.value + index} value={anOption.value}>
                {anOption.displayValue}
              </option>
            ))
          }
        </select>
      ;
    break;

    default:
      inputElement =
      <input
        className="form-control"
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed}
        placeholder={'...'}
      />
      ;
    break;
  }

  return (
    <div className="inputElement ">
      <label className="inputElementLabel">{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
