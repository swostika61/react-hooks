import './App.css';
import Basic from "./practice/1-useState/1-useStateBasics";
import Array from "./practice/1-useState/2-useStateArray";
import Object from "./practice/1-useState/3-useStateObject";
import Counter from "./practice/1-useState/4-useStateCounter";
import UseEffectBasics from './practice/2-useEffect/1-useEffectBasics';
import UseEffectCleanup from './practice/2-useEffect/2-useEffectCleanup';
import UseEffectFetchData from './practice/2-useEffect/3-useEffectFetchData';
import MultipleReturns from './practice/3-conditionalRendering/1-multipleReturns';



function App() {
  return (
    <div className="container">
     <Basic />
     <Array />
     <Object />
     <Counter />
     <UseEffectBasics />
     <UseEffectCleanup />
     <UseEffectFetchData />
     <MultipleReturns/>
    </div>
    
  );
}

export default App;
