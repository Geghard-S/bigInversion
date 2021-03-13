import Name from './components/Name';
import './App.css';

function App() {
  return (
    <div className="App">
      <Name firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"} />
      <Name firstName={"John"} lastName={"Smith"} age={88} hairColor={"Brown"} />
      <Name firstName={"Millard"} lastName={"Fillmore"} age={50} hairColor={"Brown"} />
      <Name firstName={"Maria"} lastName={"Smith"} age={62} hairColor={"Brown"} />
    </div>
  );
}

export default App;