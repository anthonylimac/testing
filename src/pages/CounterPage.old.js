import Button from "../components/Button";
import useCounter from "../hooks/use-counter";

//Counter page is being called from app.js, passing the prop initial count
function CounterPage ({ initialCount }) {

//here we are calling the hook, passing the argument as prop, the hook will take care of actions needed to the piece of state and returning function and the state "count"
    const { count, handleClick } = useCounter(initialCount);

    return (
        <div> Count is {count}
        <Button  primary onClick={handleClick}>  Increment </Button>        
         </div>
    );
};

export default CounterPage;