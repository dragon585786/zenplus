import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contextAPI/context";
import MyTabs from "./BottomTabNavigator";
import { NonAuthStack } from "./NonAuthStack";
import { LocalStorage } from "../Utils/LocalStorage";

export const MainNavigation = () => {
    const { loggedIn } = useContext(UserContext);
    const [loggedInn, setLoggedInn] = useState(false);

    useEffect(() => {
      async function fetchData() {
        let log = await LocalStorage.get("loggedIn");
        setLoggedInn(loggedIn);
        setLoggedInn(log);
      }
      fetchData() 
    },[loggedIn])
  
    return (loggedInn === true && loggedIn) ? <MyTabs /> : <NonAuthStack />;
  };