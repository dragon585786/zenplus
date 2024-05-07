import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contextAPI/context";
import MyTabs from "./BottomTabNavigator";
import { NonAuthStack } from "./NonAuthStack";
import { LocalStorage } from "../Utils/LocalStorage";

export const MainNavigation = () => {
  const { loggedIn, setLoggedIn } = useContext(UserContext);
  const [loggedInn, setLoggedInn] = useState(false);

  useEffect(() => {
    async function fetchData() {
      let log = await LocalStorage.get("loggedIn");
      setLoggedIn(log);
      setLoggedInn(log);
    }
    fetchData()
  }, [loggedIn])
  console.log("loggedInn==>", loggedInn);
  console.log("loggedIn==>", loggedIn);
  return (loggedInn && loggedIn) ? <MyTabs /> : <NonAuthStack />;
};