import { useEffect, useState } from "react";
const useOnline = () => {
  const [isonline, setIsOnline] = useState(true);

  useEffect(() => {
    const onlineFunc = () => setIsOnline(true);

    const OfflineFunc = () => setIsOnline(false);

    window.addEventListener("online", onlineFunc);
    window.addEventListener("offline", OfflineFunc);

    return () => {
      window.removeEventListener("online", onlineFunc);
      window.removeEventListener("offline", OfflineFunc);
    };
  }, []);
    
    return isonline;
};

export default useOnline;
