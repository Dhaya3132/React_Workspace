import './App.css'
import {useState} from 'react';
import Header from './Components/Header';
import { Components } from './Components/CoreComponents';
import {Data_Components} from './Components/data';
import TabButton from './Components/TabButton';


function App() {
  const [ current , update ] = useState('Please enter button');
  function handleEvent(SelectedValue){
    update(SelectedValue)
  }
  return (
    <div>
      <Header></Header>
      <section>
        <ul className='core-conscept'>
          <Components
            {...Data_Components[0]} />
          <Components
            {...Data_Components[1]} />
          <Components
            {...Data_Components[1]} />
        </ul>
      </section>

      <div>
        <h2>Time to get started!</h2>
      </div>

      <section id="examples">
        <h2>Example</h2>
        <menu>
          <TabButton  label="children" OnSelect={()=> handleEvent('Component')}/>
          <TabButton  label="JSX" OnSelect={()=> handleEvent('JSX')}/> 
          <TabButton  label="Element" OnSelect={()=> handleEvent('Element')}/> 
          <TabButton  label="Vite JS" OnSelect={()=> handleEvent('Vite')}/>
        </menu>
        <div>
          <p>
            {current}
          </p>
        </div>
      </section>

    </div>
  );
}

export default App
