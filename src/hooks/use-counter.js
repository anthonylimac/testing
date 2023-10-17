import { useState, useEffect } from "react";


//this is a hook, it receives the property initialCount being passed to the counterPage
function useCounter(initialCount){    
    //here we are creating a piece of state using the initialCount prop being passed to the function
    const [ count, setCount ] = useState(initialCount);

    //this function will be called every time the count state is changed, as we have a button to increment counter, each time we increment it
    //the app will rerender and console.log will be called
    useEffect (() => {
        console.log(count);

    }, [count]);

    //function to handle the click to increment the counter state,
    const handleClick = () => {
        setCount(count +1);
    };
    return {
        count, handleClick
    }
};

export default useCounter;