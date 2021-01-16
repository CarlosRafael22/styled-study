import React from "react";

type InterpolationFunction = (props: Object) => string | undefined
type StyledProps = Array<string | InterpolationFunction> | TemplateStringsArray | InterpolationFunction

const createStyledForTag = (tag: string) => {
    const newStyleDiv = (...args: Array<StyledProps>) => (props: any) => {
        console.log("PROPS DO newStyleDiv: ", props, args);
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
          tag,
          {
            style
          },
          props.children
        );
      };
    
    return newStyleDiv
}

const styled = (tag: string) => createStyledForTag(tag)

const htmlStyled = {
  div: styled('div'),
  p: styled('p')
};

export default htmlStyled;

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
