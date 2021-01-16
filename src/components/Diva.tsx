import styled from '../styled';

type DivaProps = {
    width?: string,
    height?: string,
    color?: string,
    status?: 'alert' | 'pass' | 'info'
}


const Diva = styled.div`
  "borderRadius": "4rem",
  "paddingTop": "1rem",
  "width": ${(props: DivaProps) => props.width},
  "height": ${(props: DivaProps) => props.height},
  "backgroundColor": ${(props: DivaProps) =>
    props.color
      ? props.color
      : { alert: "red", pass: "green", info: "orange" }[props.status!]}
`;

export default Diva;