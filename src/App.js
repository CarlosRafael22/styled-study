import './App.css';
import Diva from './components/Diva';
import Pipa from './components/Pipa';
import Pipo from './components/Pipo';

function App() {
  return (
    <div className="App">
      <Diva width="10rem" height="20rem" status="alert">
         <Pipa>HAHAHAHAHAH</Pipa>
         <Pipa color="white" bgColor="black">
           qerqwrwqerweq
         </Pipa>
         <Pipa color="white" bgColor="green">
           qerqwrwqerweq
         </Pipa>
         <Pipo color="blue" bgColor="yellow">
           Pipo
         </Pipo>
       </Diva>
    </div>
  );
}

export default App;
