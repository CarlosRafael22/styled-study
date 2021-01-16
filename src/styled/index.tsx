import React from "react";

type InterpolationFunction = (props: Object) => string | undefined | Object
type StyledProps = Array<string | InterpolationFunction> | TemplateStringsArray | InterpolationFunction

const isFunctionTemplate = (args: Array<StyledProps>) => {
  const hasOnlyStringArrayAndAExpression = args.length === 2
  const stringArrayHasOnlySpaceOrLineBreak = args[0].length <= 2
  const expressionIsAFunctionWithProps = typeof args[1] === 'function'
  return hasOnlyStringArrayAndAExpression && stringArrayHasOnlySpaceOrLineBreak && expressionIsAFunctionWithProps
}

const createStyledForTag = (tag: string) => {
    const newStyleDiv = (...args: Array<StyledProps>) => (props: any) => {
        console.log("PROPS DO newStyleDiv: ", props, args);
        const [stylesArray, ...expressions] = args as [stylesArray: Array<string>, expressions: Array<InterpolationFunction>];
        console.log("SPREADED: ", stylesArray, expressions);

        let style
        if (isFunctionTemplate(args)) {
          const styledFunction = args[1] as InterpolationFunction
          style = styledFunction(props)
        } else {
          const interpolatedString = stylesArray.reduce((previous, current, i) => {
            // @ts-ignore
            return `${previous}${current}${expressions[i] ? `"${expressions[i](props)}"` : ""}`;
          }, "");
        
          console.log("interpolatedString: ", interpolatedString);
          const toBeParsedString = `{${interpolatedString}}`;
          style = JSON.parse(toBeParsedString);
        }

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
