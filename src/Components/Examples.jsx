import { useState } from 'react';

import { EXAMPLES } from '../Components/DataComponents/Data';
import TabButton from "./TabButton";

export default function Examples(){

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
    );
}