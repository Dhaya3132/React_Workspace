import { useState } from 'react';

import { EXAMPLES } from '../Components/DataComponents/Data';
import TabButton from "./TabButton";
import { Sections } from './Sections';

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
      <Sections id="examples" title='Examples'>
      <menu>
        <TabButton label="Components" isSelected={SelectedContent === 'components'} OnSelect={() => handleEvent('components')} />
        <TabButton label="JSX" isSelected={SelectedContent === 'jsx'}  OnSelect={() => handleEvent('jsx')} />
        <TabButton label="props" isSelected={SelectedContent === 'props'} OnSelect={() => handleEvent('props')} />
        <TabButton label="state" isSelected={SelectedContent === 'state'} OnSelect={() => handleEvent('state')} />
      </menu>
      {tabcontent}
      </Sections>
    );
}