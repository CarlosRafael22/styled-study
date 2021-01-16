# Styled-Study

The purpouse of this project is to understand more about `Tagged Template Literals`. I try to mock how styled-components work using this ES6 feature.

For that /styled/index exports the styled object which only deals with div and p tags so far. Its use is sort of the same way as the styled from styled-components, however it only deals with simple css properties.

## Use

There are two styled `<p> tags` that shows how to use the styled object, the Pipa and Pipo components.

```javascript
const Pipa = styled.p`
    "borderRadius": "4rem",
    "padding": "1rem",
    "backgroundColor": ${(props: PipaProps) => props.bgColor},
    "color": ${(props: PipaProps) => props.color}
`;

const Pipo = styled.p`
${(props: PipaProps) => ({
    "borderRadius": "2rem",
    "padding": "0.5rem",
    "backgroundColor": props.bgColor,
    "color":props.color
})}
`;
```

These are the only two ways to create a styled component here. Once you create these components you can pass props to them just like styled-components:

```javascript
<Pipa color="white" bgColor="black">BRBRBRBR</Pipa>
```

In the project directory, you can run:
 `yarn start`
And see the App.js with some ugly components rendered.
