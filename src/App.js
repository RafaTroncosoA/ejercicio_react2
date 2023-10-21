import './App.css';
import {React,Component} from 'react';
import PersonCard from './components/personCard';


class App extends Component {    
      render(){
          return (            
          <div>
          <PersonCard nombre="Gustavo" apellido='Cerati' edad={60} pelo='castaño'>|</PersonCard>
          <PersonCard nombre="Jorge" apellido='Gonzalez' edad={50} pelo='castaño'>|</PersonCard>
          <PersonCard nombre="Andres" apellido='Calamaro' edad={55} pelo='castaño'>|</PersonCard>
          </div>
          );    
      }
  }

  export default App;
