import React from 'react';
import LanguageContext from './../contexts/LanguageContext';

class Button extends React.Component {
  // Define context type
  // same as Button.contextType = LanguageContext;
  // static contextType = LanguageContext;

  renderSubmit(value){
    return value === 'english' ? 'Submit' : 'Voorleggen';
  }

  render() {
    // You get the context
    // taking the value out of the context (LanguageContext)
    // console.log(this.context); // english

    // const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
    // return <button className="ui button primary">{text}</button>

    return (
      <button className="ui button primary">
        {/* Consumer is used when we want to take out information out of multiple context objects */}
        <LanguageContext.Consumer>
          {/* { (value) => value === 'english' ? 'Submit' : 'Voorleggen' } */}
          { (value) => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    )
  }
}
// Button.contextType = LanguageContext;

export default Button;