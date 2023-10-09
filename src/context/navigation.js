import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {

    //this state is what will be changed when a user tries to access a new url within the app without reloading the page.
    //window.location.pathname will have all the character in path apart from the url, it will only point to the remaninig URL after the port
    //example: http://localhost:3000/dropdown. pathname will only contain /dropdown.
    //the only reason we have this piece of state is to force the app to rerender when clicking the forward and back buttons.
    const [ currentPath, setCurrentPath ] = useState(window.location.pathname);


    //this function will be called in the first time the component is rendered and never again, due to the empty array that is being passed as seccond argument  to the function
    //an addEventListener is added that will be listening to popstate events, that is when a user go to another "page" without refreshing the page, using the popstate function.
    //when it happens, the handler function will be called, setting the navigation bar to the url the user have clicked.
    //when the component change, this function will return  a removeEventListener, that is to remove the event listener to the popstate event.
    useEffect(() =>{
        const handler = () => {
            setCurrentPath(window.location.pathname)            
        }

        window.addEventListener('popstate', handler);

        return() =>{
            window.removeEventListener('popstate', handler);
        };
    }, []);

    const navigate = (to) => {
        window.history.pushState([], '', to);
        setCurrentPath(to);

    }
    

  return (
    // using NavigationContext.Provider value={{currentPath, navigate}}, we are sharing currentPath and navigate with all other components inside the APP
    <NavigationContext.Provider value={{currentPath, navigate}}>
      {children}
    </NavigationContext.Provider>
  );
}

export default NavigationContext;
export { NavigationProvider };
