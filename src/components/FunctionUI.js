import React from "react";
import utils from "../utils/utils";
import { convertDataType } from "../utils/helpers";

export default class FunctionUI extends React.Component {
   constructor() {
      super();
      this.state = {
         isResultDisplayed: false,
         isCodeDisplayed: false,
         result: "",
      };
   }

   toggleCodeDisplay() {
      if (this.state.isCodeDisplayed === false) {
         this.setState({ isCodeDisplayed: true });
      } else {
         this.setState({ isCodeDisplayed: false });
      }
   }

   getUserInput() {
      const props = this.props;
      console.log(props.name);
      const inputValues = [];
      for (let i = 0; i < props.inputs; i++) {
         const element = document.getElementById(`input-${props.name} - ${i}`);
         const value = element.value;
         const convertedValue = convertDataType(value);
         inputValues.push(convertedValue);
      }
      console.log(inputValues);
      const result = utils[props.name](...inputValues);
      console.log(result);
      this.setState({
         result: JSON.stringify(result),
         isResultDisplayed: true,
      });
   }

   render() {
      const props = this.props;
      const renderInputs = (num) => {
         // identifies how many inputs a compoment has
         const inputs = [];
         for (let i = 0; i < num; i++) {
            const id = `input-${props.name} - ${i}`;
            inputs.push(
               //push inputs into an array
               <input
                  type="text"
                  className="form-control inline-action"
                  key={id} // input-updateRecords-0
                  id={id}
               />
            );
         }

         return inputs; //pushes the inputs to the inputs array
      };

      return (
         //returning the component w/ corresponding name and desc
         <div className="col-12 col-lg-8 offset-lg-2 mb-5">
            <p className="name" onClick={() => this.toggleCodeDisplay()}>
               <b> {props.name} </b>&nbsp;-&nbsp;
               {props.desc}
            </p>
            {this.state.isCodeDisplayed && (
               <pre>
                  <code>{String(utils[props.name])}</code>
               </pre>
            )}

            <div className="actions float-right">
               {renderInputs(props.inputs)}

               <button
                  className="btn btn-primary inline-action"
                  onClick={() => this.getUserInput()}
               >
                  Run
               </button>
            </div>
            <div className="clearfix mb-3"></div>
            {this.state.isResultDisplayed && (
               <div className="alert alert-primary">{this.state.result} </div>
            )}
         </div>
      );
   }
}
