// App.js
import React, { Component } from "react";
// import "./App.css";
import { Icon } from "@iconify/react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeComponent: "component1",
    };
  }

  // Function to handle link clicks and update the active component
  handleLinkClick = (component) => {
    this.setState({ activeComponent: component });
  };

  render() {
    return (
      <div className="App ">
        <nav className="flex flex-col md:flex-row justify-center">
          <ul className="flex flex-col md:flex-row text-center md:text-start gap-3 my-5">
            <li>
              <a
                onClick={() => this.handleLinkClick("component1")}
                className="hover:underline p-5"
              >
                More Info
              </a>
            </li>
            <li>
              <a
                onClick={() => this.handleLinkClick("component2")}
                className="hover:underline p-5"
              >
                Data sheet
              </a>
            </li>
            <li>
              <a
                onClick={() => this.handleLinkClick("component3")}
                className="hover:underline p-5"
              >
                Reviews
              </a>
            </li>
          </ul>
        </nav>
        <div id="component-container">
          {this.state.activeComponent === "component1" && (
            <div className="p-5 border">
              <p className="">
                Fashion has been creating well-designed collections since 2010.
                The brand offers feminine designs delivering stylish separates
                and statement dresses which have since evolved into a full
                ready-to-wear collection in which every item is a vital part of
                a woman's wardrobe. The result? Cool, easy, chic looks with
                youthful elegance and unmistakable signature style. All the
                beautiful pieces are made in Italy and manufactured with the
                greatest attention. Now Fashion extends to a range of
                accessories including shoes, hats, belts and more!
              </p>
            </div>
          )}
          {this.state.activeComponent === "component2" && (
            <div className="p-5 border">
              <div className="flex border-y-2 items-center ">
                <p className="border-r-2 px-7 py-2 ">compositors</p>
                <span className="pl-5">cotton</span>
              </div>
              <div className="flex border-y-2 items-center ">
                <p className="border-r-2 px-12 py-2 ">Styles</p>
                <span className="pl-5">casuals</span>
              </div>
              <div className="flex border-y-2 items-center ">
                <p className="border-r-2 px-9 py-2 ">properties</p>
                <span className="pl-5">short Sleeve</span>
              </div>
            </div>
          )}
          {this.state.activeComponent === "component3" && (
            <div className="p-8 border flex items-center">
              <div>
                <div className="flex gap-2 ">
                  <span>Rating</span>
                  <div className="flex gap-1 items-center">
                    <Icon icon="ic:round-star" className="text-orange-400" />
                    <Icon icon="ic:round-star" className="text-orange-400" />
                    <Icon icon="ic:round-star" className="text-orange-400" />
                    <Icon icon="ic:round-star" className="text-orange-400" />
                    <Icon icon="ic:round-star" className="text-orange-400" />
                  </div>
                  <div>2/7/2023</div>
                </div>
              </div>
              <div className="border-l-2 ">fsfsfs</div>
              <div>14 reviews given</div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
