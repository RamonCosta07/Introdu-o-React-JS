import React, {useState} from 'react';
import { FaBeer } from 'react-icons/fa';

function Contador() {
    const [count, setCount] = useState(0);
    return (
        <button type="button" onClick={() => setCount((count) => count + 1)}>
            <FaBeer /> count is: {count}
        </button>
    );
}

export default Contador;