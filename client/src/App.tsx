import React from "react";
import "./App.css";

function App() {
  const data = [
    {
      title: "Build test task",
      items: [
        {
          text: "Create repositor",
        },
        {
          text: "Implement designs",
        },
        {
          text: "Implement functionality",
        },
      ],
    },
    {
      title: "Submit your test task",
      items: [
        {
          text: "Open email client",
        },
        {
          text: "Sent link information to",
          email: "careers@cornercasetech.com",
        },
      ],
    },
    {
      title: "Participate in tech interview",
      items: [
        {
          text: "Talk with HR",
        },
        {
          text: "Talk with Tech team",
        },
      ],
    },
    {
      title: "Reciece anster",
      items: [
        {
          text: "Create repositor",
        },
        {
          text: "Receive answers",
        },
        {
          text: "Start your IT career",
        },
      ],
    },
  ];

  return (
    <div className="app">
      <header className="app-header"></header>
    </div>
  );
}

export default App;
