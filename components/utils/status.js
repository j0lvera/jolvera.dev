import React from "react";

function Status({ status }) {
  const colors = {
    Draft: {
      bg: "#bdc3c7",
      fg: "#333"
    },

    "In Progress": {
      bg: "#2980b9",
      fg: "#000"
    },

    Finished: {
      bg: "#27ae60",
      fg: "#000"
    }
  };

  return (
    <p
      style={{
        backgroundColor: colors[status].bg,
        color: colors[status].fg
      }}
      className="my-0 py-0 px-1 rounded text-xs flex items-center uppercase"
    >
      {status}
    </p>
  );
}

export { Status };
