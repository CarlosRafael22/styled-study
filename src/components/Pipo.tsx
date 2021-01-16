import styled from '../styled';

type PipaProps = {
    color?: string,
    bgColor?: string
}

const Pipo = styled.p`
${(props: PipaProps) => ({
    "borderRadius": "2rem",
    "padding": "0.5rem",
    "backgroundColor": props.bgColor,
    "color":props.color
})}
`;

export default Pipo;