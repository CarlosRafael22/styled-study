import React from "react";

// #1 Directly setting the style of the div
const DefaultDiv = () =>
    React.createElement(
    "div",
    {
        style: {
        width: "50rem",
        height: "10rem",
        backgroundColor: "blue"
        }
    },
    null
    );


// #2 SETTING THE STYLE OF THE DIV WITH RECEIVED PROPS

// const Div = ({width, height, color, status, children}) => React.createElement('div', {
//   style: {
//     borderRadius: '4rem',
//     width,
//     height,
//     backgroundColor: color ? color : {alert: 'red', pass: 'green', info: 'orange'}[status]
//   }
// }, children)

const TaggedDiv = (props) => {
  console.log("PROPS: ", props);
  return React.createElement(
    "div",
    {
      style: {
        borderRadius: "4rem",
        width: props.width,
        height: props.height,
        backgroundColor: props.color
          ? props.color
          : { alert: "red", pass: "green", info: "orange" }[props.status]
      }
    },
    props.children
  );
};


// #3 SETTING THE STYLE BASED ON TEMPLATE LITERALS RECEIVED

const TaggedDiv2 = (props) => (...args) => {
    console.log("PROPS DO TAGGEDDIV2: ", props, args);
    const [stylesArray, ...expressions] = args;
    console.log("SPREADED: ", stylesArray, expressions);
  
    const interpolatedString = stylesArray.reduce((previous, current, i) => {
      return `${previous}${current}${
        expressions[i] ? `"${expressions[i](props)}"` : ""
      }`;
    }, "");
  
    console.log("interpolatedString: ", interpolatedString);
    const toBeParsedString = `{${interpolatedString}}`;
    const style = JSON.parse(toBeParsedString);
    console.log("style: ", style);
    return React.createElement(
      "div",
      {
        style
      },
      props.children
    );
  };
  
const StyledDiv = (props) => TaggedDiv2(props)`"borderRadius": "4rem",
  "width": ${(props) => props.width},
  "height": ${(props) => props.height},
  "backgroundColor": ${(props) =>
    props.color
      ? props.color
      : { alert: "red", pass: "green", info: "orange" }[props.status]}`;
  console.log("StyledDiv: ", StyledDiv);


const styled = {
    divD: DefaultDiv,
    // div: Div
    div: TaggedDiv,
    divT: StyledDiv,
  };