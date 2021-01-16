import styled from '../styled';

type PipaProps = {
    color?: string,
    bgColor?: string
}

const Pipa = styled.p`
"borderRadius": "4rem",
"padding": "1rem",
"backgroundColor": ${(props: PipaProps) => props.bgColor},
"color": ${(props: PipaProps) => props.color}
`;

export default Pipa;