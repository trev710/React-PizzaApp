import React, { Component } from 'react';
import Input from './../Special/Input.js';

//The chosen ingredients info
import { connect } from 'react-redux';
import { ingredientsInfoStatic } from './../Special/IngredientsInfo.js';


class CheckoutPage extends Component
{
  constructor(props)
  {
    super(props);
    this.state =
    {
      orderForm: {
        name:{
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder:'Your name',
          },
          value: '',
          label: 'Name:',
          validationPassed: true,
        },
        address:{
          elementType:'input',
          elementConfig:{
            type: 'address',
            placeholder: 'Your Address',
          },
          value: '',
          label: 'Address: ',
          validationPassed: true,
        },
        additionalNotes:{
          elementType:'textarea',
          value:'',
          label:'Additional Instructions: ',
          validationPassed: true,
        },
      },
      loading: false,
      isValid: true,
      errorMessages: [],
    };
  }

  generalInputModifier = (event, identifier) =>
  {
 
    const originalOrderForm = {...this.state.orderForm};

    const newModification = {...originalOrderForm[identifier]};

    newModification.value = event.target.value;

    originalOrderForm[identifier] = newModification;

    this.setState({orderForm: originalOrderForm},
        ()=> {
          this.verifyInput(identifier);
        });


  }


  resetButtonHandler = () => {
 
  }

  submitButtonHandler = () => {
        if(this.state.isValid && this.verifyInput('name') && this.verifyInput('email') && this.verifyInput('couponCode'))
        {
          alert('Order Submitted');
        }
    

  }
  verifyInput = (elementKey) => {
    let validity = true;
    let messages = [];


    let copyState = {...this.state};

    copyState.isValid = validity;
    copyState.errorMessages = messages;

    //Set state

    this.setState({isValid: validity});

    this.setState({errorMessages: messages});

    return validity;
  }
  standardVerification = (value, rule) =>
  {
    let isValid = {outcome: true, message: ''};

    switch(rule.type)
    {
  }

    if(isValid.outcome)
    {
      isValid.message = "";
    }

    return isValid;
  }

  render(){
    let ingredientsInfoArray = [];

    Object.keys(this.props.pizzaComposition).forEach((aKey, index) => {
      if(this.props.pizzaComposition[aKey] > 0)
      {
        ingredientsInfoArray.push({
          id: aKey,
          details: {
            quantity: this.props.pizzaComposition[aKey],
            name: ingredientsInfoStatic[aKey].display,
            image: ingredientsInfoStatic[aKey].image,
          },
        });
      }
    });

    //Info for the ingredients
    let ingredientInfo = (
      <div className="ingredientInfo">
        {
          ingredientsInfoArray.map(element => {
            return(
              <div className="singleIngredient" key={element.id}>
                <h4>{element.details.name}</h4>
                <img src={element.details.image} alt="ingredient"/>
                <h3>{element.details.quantity}</h3>
              </div>
            );
          })
        }
      </div>
    );

    const formArray = [];

    Object.keys(this.state.orderForm).forEach(key => {
      formArray.push({
        id: key,
        details: this.state.orderForm[key]
      });
    });
    let errorClassForm = "checkoutForm ";

    if(!this.state.isValid)
    {
      errorClassForm = "checkoutForm hasError";
    }

    let form = (
      <form className={errorClassForm}>
        {
          formArray.map(element => {
            return(
              <div className="form-group" key={element.id}>
                <Input
                  id={'input'+element.id}
                  type={element.details.elementType}
                  {...element.details}
                  changed={(event) => {this.generalInputModifier(event, element.id); this.verifyInput(element.id);}}
                />
              </div>
            );
          })
        }
        <div className="form-group buttonContainer">
        <button type="button" className="btn btn-primary" onClick={() => {this.submitButtonHandler();}} disabled={(!this.state.isValid)}>Submit</button>
        </div>
      </form>
    );

    return (
      <div className='formContainer'>
        <h2>Your Order:</h2>
        {ingredientInfo}
        <h2>Checkout info:</h2>
        {form}
  
      </div>

      );
  }
}
//The state ingredients
const mapStateToProps = state => {
  return{
    pizzaComposition: state.pizzaReducer,
  }
};

export default connect(mapStateToProps)(CheckoutPage);
