import React from 'react';
import LanguageContext from './../contexts/LanguageContext';
import ColorContext from './../contexts/ColorContext';

class Button extends React.Component {
  // Define context type
  // same as Button.contextType = LanguageContext;
  // static contextType = LanguageContext;

  renderSubmit(value){
    return value === 'english' ? 'Submit' : 'Voorleggen';
  }

  renderButton (color) {
    return (
      <button className={`ui button ${color}`}>
          {/* Consumer is used when we want to take out information out of multiple context objects */}
          <LanguageContext.Consumer>
            {/* { (value) => value === 'english' ? 'Submit' : 'Voorleggen' } */}
            { (value) => this.renderSubmit(value)}
          </LanguageContext.Consumer>
        </button>
    )
  }

  render() {
    // You get the context
    // taking the value out of the context (LanguageContext)
    // console.log(this.context); // english

    // const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
    // return <button className="ui button primary">{text}</button>

    return (
      <ColorContext.Consumer>
      {/* a function that returns a chunck of JSX */}
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    )
  }
}
// Button.contextType = LanguageContext;

export default Button;