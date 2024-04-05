import { Data_Components} from '../Components/DataComponents/Data';
import { Components } from './CoreComponents';

export default function CoreConcepts(){
    return (
        <section>
        <ul className='core-conscept'>
          {Data_Components.map(items => 
              <Components key={items.Title} {...items}/>
          )}
        </ul>
        <div><h2>Time to get started!</h2></div>
        </section>
    );
} 