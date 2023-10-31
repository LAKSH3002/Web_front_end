import './App.css';
import {useref} from 'react';

function App()
{
    let ref = useRef(0);

    function handleClick()
    {
        ref.current = ref.current + 1;
        alert('You clicked '+ ref.current + 'times!')
    }
    return(
        <div className='App'>
            <button onClick={handleClick}>CLick Me!</button>
        </div>
    );
}
export default App;