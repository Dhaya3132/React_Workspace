import './App.css'
import {useState} from 'react';
import Header from './Components/Header';
import { Components } from './Components/CoreComponents';
import {Data_Components, EXAMPLES} from './Components/data';
import TabButton from './Components/TabButton';



function App() {

  const [ SelectedContent , SetSelectedContent ] = useState();

  function handleEvent(selectedvalue){
    SetSelectedContent(selectedvalue);
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
          <TabButton  label="Components" OnSelect={()=> handleEvent('components')}/>
          <TabButton  label="JSX" OnSelect={()=> handleEvent('jsx')} /> 
          <TabButton  label="props" OnSelect={()=> handleEvent('props')}/> 
          <TabButton  label="state" OnSelect={()=> handleEvent('state')}/>
        </menu>
      <div id='content'>
            {!SelectedContent ? <p>Plase click a button</p> :  

            <><h2>{EXAMPLES[SelectedContent].title}</h2>
            <p>{EXAMPLES[SelectedContent].description}</p><pre>
              <code>
                {EXAMPLES[SelectedContent].code}
              </code>
            </pre></> 

            }
        </div>
      </section>
    </div>
  );
}

export default App
