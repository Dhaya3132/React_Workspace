import './App.css'
import { useState } from 'react';
import Header from './Components/Header';
import { Components } from './Components/CoreComponents';
import { Data_Components, EXAMPLES } from './Components/data';
import TabButton from './Components/TabButton';



function App() {

  const [SelectedContent, SetSelectedContent] = useState();

  function handleEvent(selectedvalue) {
    SetSelectedContent(selectedvalue);
  }

  let tabcontent = 'Please Select a button';

  if (SelectedContent) {
    tabcontent = 
    <div id='content'>
      <h2>{EXAMPLES[SelectedContent].title}</h2>
          <p>{EXAMPLES[SelectedContent].description}</p><pre>
            <code>
              {EXAMPLES[SelectedContent].code}
            </code>
          </pre>
    </div>
  }


  return (
  <>
    <Header></Header>
      <section>
        <ul className='core-conscept'>
          {Data_Components.map(items => 
              <Components key={items.Title} {...items}/>
          )}
        </ul>
      </section>

      <div>
        <h2>Time to get started!</h2>
      </div>

      <section id="examples">
        <h2>Example</h2>
        <menu>
          <TabButton label="Components" OnSelect={() => handleEvent('components')} />
          <TabButton label="JSX" OnSelect={() => handleEvent('jsx')} />
          <TabButton label="props" OnSelect={() => handleEvent('props')} />
          <TabButton label="state" OnSelect={() => handleEvent('state')} />
        </menu>
        {tabcontent}
      </section>
    </>
  );
}

export default App
