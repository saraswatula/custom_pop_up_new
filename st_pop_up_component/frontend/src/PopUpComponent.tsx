import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"
import React, { ReactNode } from "react";



/**
 * This is a React-based component template. The `render()` function is called
 * automatically when your component should be re-rendered.
 */
class PopUpComponent extends StreamlitComponentBase<any> {
  public componentDidMount() {
    // Call myFunction when the component mounts
    this.myFunction();
  }

  private myFunction = () => {
    const { message } = this.props.args;
    const result = window.confirm(message);

    // Send the result back to Streamlit
    Streamlit.setComponentValue(result ? "Yes" : "No");
  };

  public render = (): ReactNode => {
    return null; // or your custom slider component
  };
}

// "withStreamlitConnection" is a wrapper function. It bootstraps the
// connection between your component and the Streamlit app, and handles
// passing arguments from Python -> Component.
//
// You don't need to edit withStreamlitConnection (but you're welcome to!).
export default withStreamlitConnection(PopUpComponent)
