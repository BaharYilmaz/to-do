import React, { useState, useEffect } from "react";

export const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(
    typeof window !== "undefined" && window.navigator.onLine
  );

  const getOnlineStatus = () => isOnline;

  useEffect(() => {
    function onlineHandler() {
      setIsOnline(true);
    }

    function offlineHandler() {
      setIsOnline(false);
    }

    window.addEventListener("online", onlineHandler);
    window.addEventListener("offline", offlineHandler);

    return () => {
      window.removeEventListener("online", onlineHandler);
      window.removeEventListener("offline", offlineHandler);
    };
  }, []);

  return { getOnlineStatus };
};
