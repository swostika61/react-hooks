import './App.css';
import Basic from "./practice/1-useState/setup/1-useStateBasics";
import Array from "./practice/1-useState/setup/2-useStateArray";
import Object from "./practice/1-useState/setup/3-useStateObject";
import Counter from "./practice/1-useState/setup/4-useStateCounter";


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
