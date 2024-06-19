import './App.css';
import Header from './components/Header';

const heading = <h1> React is cool! </h1>;
const persona = {
  firstName: 'Ivana',
  lastName: 'nedeljkov'
};

function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function App() {
  return (
    <div className="App">
     <h1>{heading}</h1>
     <p>{persona.firstName} {persona.lastName}</p>
     <p>In uppercase: {persona.firstName.toUpperCase()} {persona.lastName.toUpperCase()}.</p>
     <h4>
        Capitalized:
        { capitalizeFirstLetter(persona.firstName) } { capitalizeFirstLetter(persona.lastName) }
      </h4>
      <Header />
    </div>
  );
}

export default App;
