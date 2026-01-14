import { useState } from "react";

export default function Prueba(){

    const [count, setCount] = useState(0);

    return(
        <button onClick={ ()=> setCount(count + 1)}>
            Contador: {count}
        </button>
    );
}