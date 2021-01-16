import './App.css';
import Diva from './components/Diva';
import Pipa from './components/Pipa';

function App() {
  return (
    <div className="App">
      <Diva width="10rem" height="20rem" status="alert">
         <Pipa>HAHAHAHAHAH</Pipa>
         <Pipa color="white" bgColor="black">
           qerqwrwqerweq
         </Pipa>
       </Diva>
    </div>
  );
}

export default App;
