import React from "react";
import utils from "../utils/utils";
import { uiData } from "../data/ui";

export default function FunctionUI(props) {
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

   function getUserInput() {
      console.log(props.name);
      const inputValues = [];
      for (let i = 0; i < props.inputs; i++) {
         const element = document.getElementById(`input-${props.name} - ${i}`);
         const value = element.value;
         inputValues.push(value);
      }
      console.log(inputValues);
   }

   return (
      //returning the component w/ corresponding name and desc
      <div className="col-12 col-lg-8 offset-lg-2 mb-5">
         <p className="name">
            <b> {props.name} </b>&nbsp;-&nbsp;
            {props.desc}
         </p>
         <pre style={{ display: "none" }}>
            <code></code>
         </pre>
         <div className="actions float-right">
            {renderInputs(props.inputs)}

            <button
               className="btn btn-primary inline-action"
               onClick={() => getUserInput()}
            >
               Run
            </button>
         </div>
         <div className="clearfix mb-3"></div>
         <div className="alert alert-primary" style={{ display: "none" }}></div>
         <div className="alert alert-danger" style={{ display: "none" }}></div>
      </div>
   );
}
