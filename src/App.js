import './App.css';
import Basic from "./practice/1-useState/1-useStateBasics";
import Array from "./practice/1-useState/2-useStateArray";
import Object from "./practice/1-useState/3-useStateObject";
import Counter from "./practice/1-useState/4-useStateCounter";


function App() {
  return (
    <div className="container">
     <Basic />
     <Array />
     <Object />
     <Counter />
    </div>
  );
}

export default App;
