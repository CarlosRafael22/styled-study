import React from "react";

type InterpolationFunction = (props: Object) => string | undefined
type StyledProps = Array<string | InterpolationFunction> | TemplateStringsArray | InterpolationFunction

const newStyleDiv = (...args: Array<StyledProps>) => (props: any) => {
  console.log("PROPS DO newStyleDiv: ", props, args);
  const [stylesArray, ...expressions] = args as [stylesArray: Array<string>, expressions: Array<InterpolationFunction>];
  console.log("SPREADED: ", stylesArray, expressions);

  const interpolatedString = stylesArray.reduce((previous, current, i) => {
      // @ts-ignore
    return `${previous}${current}${(typeof expressions[i] == "function" && expressions[i]) ? `"${expressions[i](props)}"` : ""
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

const newStyleP = (...args: Array<StyledProps>) => (props: any) => {
  console.log("PROPS DO newStyleP: ", props, args);
  const [stylesArray, ...expressions] = args as [stylesArray: Array<string>, expressions: Array<InterpolationFunction>];
  console.log("SPREADED: ", stylesArray, expressions);

  const interpolatedString = stylesArray.reduce((previous, current, i) => {
    // @ts-ignore
    return `${previous}${current}${expressions[i] ? `"${expressions[i](props)}"` : ""}`;
  }, "");

  console.log("interpolatedString: ", interpolatedString);
  const toBeParsedString = `{${interpolatedString}}`;
  const style = JSON.parse(toBeParsedString);
  console.log("style: ", style);
  return React.createElement(
    "p",
    {
      style
    },
    props.children
  );
};

const styled = {
  div: (...args: Array<StyledProps>) => newStyleDiv(...args),
  p: newStyleP
};

export default styled;

// const getArgs = (...args) => [...args];
// const getArgsFromProps = (props, ...args) => [...args];

// const result = getArgs`
//     borderRadius: '4rem',
//     width: ${(props) => props.width},
//     height: ${(props) => props.height},
//     backgroundColor: ${(props) =>
//       props.color
//         ? props.color
//         : { alert: "red", pass: "green", info: "orange" }[props.status]}
// `;
// console.log(result);
/*
const styled.div({
  width: '50rem',
  height: '10rem',
  backgroundColor: 'blue'
})

*/
// const styled.div({})

// export default function App() {
//   // rawStyled()
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       {/* <styled.divD /> */}
//       <h2>Start editing to see some magic happen!</h2>
//       {/* {Div({ width: "50rem", height: "50rem", color: "red" })}
//       <Div width="20rem" height="20rem" status="info">
//         <p>HAHAHAHAHAH</p>
//       </Div>
//       <styled.divT width="20rem" height="20rem" status="alert">
//         <p>HAHAHAHAHAH</p>
//         <p>qerqwrwqerweq</p>
//       </styled.divT>
//       <StyledDiv /> */}
//       {React.createElement("p", {
//         children: "Helllo",
//         style: { color: "blue" }
//       })}
//       <Diva width="10rem" height="20rem" status="alert">
//         <Pa>HAHAHAHAHAH</Pa>
//         <Pa color="white" bgColor="black">
//           qerqwrwqerweq
//         </Pa>
//       </Diva>
//     </div>
//   );
// }
