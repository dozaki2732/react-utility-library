import React from "react";
import "./style/master.scss"; // applies global scss styles
import { uiData } from "./data/ui";
import FunctionUI from "./components/FunctionUI";
import orderBy from "lodash/orderBy"; //importing lodash function

export default class App extends React.Component {
   //utilize lifecycle in react "extends" means to add stuff into components
   constructor() {
      //executing code
      super();
      console.log(uiData);
      this.state = {
         isFavoritesChecked: false,
         allFuncs: uiData,
         displayedFuncs: uiData,
      };
   }

   toggleFavorites(e) {
      this.setState({ isFavoritesChecked: !this.state.isFavoritesChecked }); //whatever is checked is going to be flipped to the opposite
      const isFavoritesChecked = document.getElementById("viewMode-favorites")
         .checked; //grabbing user input
      console.log(isFavoritesChecked);
      const searchInput = document.getElementById("search-input").value;
      const allFuncs = [...this.state.allFuncs]; //get a copy of all the functions "shallow copy" of the array
      if (isFavoritesChecked) {
         const favoriteFuncs = allFuncs.filter((func) => {
            return func.isFavorite; //return only favorites
         });
         console.log(favoriteFuncs);
         const filteredFuncs = favoriteFuncs.filter((func) => {
            return func.name.indexOf(searchInput) >= 0;
         });

         this.setState({ displayedFuncs: filteredFuncs }); //setting displayed funcs to filtered
      } else {
         const filteredFuncs = allFuncs.filter((func) => {
            return func.name.indexOf(searchInput) >= 0;
         });

         this.setState({ displayedFuncs: filteredFuncs }); //else, just display all funcs
      }
   }

   render() {
      //has to return JSX

      const getFunctionsNum = () => {
         //return the number of functions in the library
         return;
      };

      return (
         //wrap JSX with a parenthesis if contains multiple html elements
         <div className="container">
            <div className="row">
               <div className="col-12 col-lg-8 offset-lg-2 mb-5">
                  <h1 className="d-flex justify-content-center">
                     JavaScript Functions
                  </h1>
                  <p className="text-center lead mb-4">
                     {getFunctionsNum()}&nbsp;functions documented
                  </p>
                  <div className="custom-control custom-radio custom-control-inline">
                     <input
                        type="radio"
                        id="viewMode-all"
                        name="viewMode"
                        className="custom-control-input"
                        checked={!this.state.isFavoritesChecked}
                        onChange={(e) => {
                           this.toggleFavorites(e); // "this" refers to class
                        }}
                     />
                     <label
                        className="custom-control-label"
                        htmlFor="viewMode-all"
                     >
                        show all
                     </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                     <input
                        type="radio"
                        id="viewMode-favorites"
                        name="viewMode"
                        className="custom-control-input"
                        checked={this.state.isFavoritesChecked}
                        onChange={(e) => {
                           this.toggleFavorites(e); // "this" refers to class
                        }}
                     />
                     <label
                        className="custom-control-label"
                        htmlFor="viewMode-favorites"
                     >
                        favorites
                     </label>
                  </div>
                  <div className="row mt-3">
                     <div className="col-6">
                        <input
                           type="text"
                           className="form-control "
                           aria-describedby="search-input"
                           id="search-input"
                           placeholder="Search all functions"
                           aria-label="Search all functions"
                        />
                     </div>
                     <div className="col-6">
                        <select className=" form-control">
                           <option>Most recent</option>
                           <option>Oldest</option>
                           <option>A - Z</option>
                           <option>Z - A</option>
                        </select>
                     </div>
                  </div>
               </div>
               {this.state.displayedFuncs.map((functionUI) => {
                  //mapping over utility library
                  const { name, desc, inputs, order } = functionUI;

                  return (
                     <FunctionUI // names what you give it
                        key={order}
                        name={name} //for everyone of these points its going to render html from ui.js
                        desc={desc}
                        inputs={inputs}
                     />
                  );
               })}
            </div>
         </div>
      );
   }
}
