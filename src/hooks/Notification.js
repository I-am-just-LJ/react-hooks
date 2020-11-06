import React from "react";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNoti = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNoti;
};

const Notification = () => {
  const triggerNoti = useNotification("Wassup!", { body: "How r u?" });
  return (
    <div>
      <h2>useNotification</h2>
      <button onClick={triggerNoti}>useNotification</button>
    </div>
  );
};

export default Notification;
