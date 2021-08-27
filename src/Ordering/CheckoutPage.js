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

  //Generally, this can be used for all input types
  generalInputModifier = (event, identifier) =>
  {
    //Original value of order form - get it now
    //and clone it (not just reference copying)
    //Don't directly modify it -> recall that we should use setState instead
    const originalOrderForm = {...this.state.orderForm};

    //Create a copy of that part of the object that we need.
    const newModification = {...originalOrderForm[identifier]};

    //Assign the value - why we're here
    newModification.value = event.target.value;

    //And now to set the only thing that we changed.
    originalOrderForm[identifier] = newModification;

    //Finally, set the state
    this.setState({orderForm: originalOrderForm},
        ()=> {
          this.verifyInput(identifier);
        });


  }

  //Checked box for coupon
  //So we toggle
  checkedCoupon = () => {

    //The whole variable since we're using a nested object!
    const modifiedState = {...this.state.orderForm};

    //The one we need
    const newValuesCheckbox = {...modifiedState['hasCoupon']};

    //and the coupon code
    const newValuesCoupon = {...modifiedState['couponCode']};

    //Not, modification time
    newValuesCoupon.elementConfig.disabled = newValuesCheckbox.elementConfig.checked;
    newValuesCheckbox.elementConfig.checked = !newValuesCheckbox.elementConfig.checked;
    newValuesCoupon.value = '';

    modifiedState['hasCoupon'] = newValuesCheckbox;
    modifiedState['couponCode'] = newValuesCoupon;

    //Set state, after re-verification
    this.setState({orderForm: modifiedState}, () => {this.verifyInput('couponCode')});
  }



  resetButtonHandler = () => {
 
  }

  //Click on submit -> we must verify the input
  submitButtonHandler = () => {
    //Step by step -> if error foudn stop, so that it's not overwritten
    if(this.state.isValid && this.verifyInput('name') && this.verifyInput('email') && this.verifyInput('couponCode'))
    {
      alert('Submitted!');
    }

  }

  //Verify the input - each case has different options
  verifyInput = (elementKey) => {
    //We'll get a validity and message(s)
    let validity = true;
    let messages = [];


    // let checkResult;


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
    //Start from true, can only go to negative
    let isValid = {outcome: true, message: ''};

    //Switch case for possibilities
    switch(rule.type)
    {
  }

    //Remove message if still ok
    if(isValid.outcome)
    {
      isValid.message = "";
    }

    return isValid;
  }


  //The render method
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


    //Note: prepare the event handler -> it takesthe event and the id of the element
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
        {/* <div className="errorMsgs">
          {
            this.state.errorMessages.map((errorMsg, index) => {
              if(errorMsg !== '')
              {
                return <h2 key={'error'+index}>{errorMsg}</h2>;
              }
            })
          }
        </div> */}
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
