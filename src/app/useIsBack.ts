import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function useIsBack() {
  const location = useLocation();
  const [isBack, setIsBack] = useState(false);

  useEffect(() => {
    setIsBack(sessionStorage[location.pathname + "_key"] === location.key);
    sessionStorage[location.pathname + "_key"] = location.key;
  }, [location]);

  return isBack;
}
