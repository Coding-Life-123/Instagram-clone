import LoadComponent from "../components/LoadComponent";
import HomeComponent from "../components/HomeComponent";
import SignUpComponent from "../components/SignUpComponent";
import { useEffect, useState } from "react";

export function AppContext() {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if(JSON.parse(localStorage.getItem("activo")) === true) {
        setAuthenticated(true);
        setLoading(false);
        console.log(authenticated)
      } else setLoading(false);  
    }, 1200);
  }, [authenticated]);

  return (<HomeComponent/>
    // <>
    //   {loading ? (
    //     <LoadComponent />
    //   ) : authenticated ? (
    //     <HomeComponent />
    //   ) : (
    //     <SignUpComponent />
    //   )}

    // </>
  );
}
