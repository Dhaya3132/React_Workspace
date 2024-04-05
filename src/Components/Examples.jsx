import { useState } from 'react';

import { EXAMPLES } from '../Components/DataComponents/Data';
import TabButton from "./TabButton";
import { Sections } from './Sections';
import { Tabs } from './tabs';

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
      <Tabs Buttons={    
        <>
        <TabButton isSelected={SelectedContent === 'components'} onClick={() => handleEvent('components')}>Components</TabButton>
        <TabButton isSelected={SelectedContent === 'jsx'}  onClick={() => handleEvent('jsx')}>JSX</TabButton>
        <TabButton isSelected={SelectedContent === 'props'} onClick={() => handleEvent('props')}>props</TabButton>
        <TabButton isSelected={SelectedContent === 'state'} onClick={() => handleEvent('state')}>state</TabButton>
        </>
      }>
      {tabcontent}
      </Tabs>
      </Sections>
    );
}