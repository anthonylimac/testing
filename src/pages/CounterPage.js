import Button from "../components/Button";
import { useReducer } from "react";
import Panel from "../components/Panel";
import  {produce}  from "immer";

//creating constants to avoid misstype when calling dispatch
const INCREMENT_COUNT = "increment-counter";
const DECREMENT_COUNT = "decrement-counter";
const VALUE_TO_ADD = "change-value-to-add";
const INCREMENT_WITH_INPUT = "increment-with-input";


//this function will have the current state of the object plus the object sent when calling "dispatch()",
//whatever we have set to dispatch, will be received as action.
//as of now, using produce from immer library, we no longer need to create a new object, immer is taking care of applying all the state attributes
//to the new one, and returning it to the state itself
const reducer = (state, action) => {
  switch(action.type){

    //using produce, we no longer need to add the entire state to the response, we can directly modify the state and just use the return statement
    case INCREMENT_COUNT:
      state.count = state.count +1;
      return;

    case DECREMENT_COUNT:
      state.count = state.count -1;
      return;      

    case VALUE_TO_ADD:
      state.valueToAdd = action.payLoad;
      return;

      // here we are receiving a call to increment the state of count, adding the value provided in the input,
      //calling state.count + state.valueToAdd, will add the value provided in the input to the state of count.
    case INCREMENT_WITH_INPUT:
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return;     

    default:
      return state;    
  };
};

//Counter page is being called from app.js, passing the prop initial count
function CounterPage({ initialCount }) {

  //defining the state to useReducer, first argument will be the state, and second one will be the function to be called whenever we 
  //want to update the state of 'state'.
  //useReducer also have 2 arguments, first will be the function that will be called when we run 'dispatch, second is the initial
  //value provided to the state.
  //now we are wrapping the reducer function using immer produce, with that, we no longer need to create a new object to not modify the current state.
  const [state, dispatch] = useReducer(produce (reducer), {
    count: initialCount,
    valueToAdd: 0,
  });

  //here we are just calling dispatch, and providing a string, so the reducer function will know how to handle the request.
  //in this case we are just incrementing the count state to be count + 1. no extra args were provided.
  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT,
    });
  };

  //here we are just calling dispatch, and providing a string, so the reducer function will know how to handle the request.
  //in this case we are just decrementing the count state to be count - 1. no extra args were provided.
  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };

  //this function is to update the input box as the user types in it, it will call dispatch and pass the arguments
  //making the app to rerender and the input will be shown in the text area,
  //we use payLoad to make it clear to other that this is the value the user is typing.
  const handleChange = (valueToChange) => {
    const value = parseInt(valueToChange.target.value) || 0;
    dispatch({
      type: VALUE_TO_ADD,
      payLoad: value,
    });
  };

  //when user clicks in to add the value  that is in the input box, dispatch will be called, and as we already have the value in the state
  //dispatch() will know that the user is trying to sum the values both what we have in the count state, plus the value
  //that was typed in the input box
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: INCREMENT_WITH_INPUT,
    });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg"> Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button primary onClick={increment}>
          {" "}
          Increment{" "}
        </Button>
        <Button secundary onClick={decrement}>
          {" "}
          Decrement{" "}
        </Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
