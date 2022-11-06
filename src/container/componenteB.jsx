import React from "react";

export const ComponenteB = (props) => {
  return (
    <div>
      <h1>Conectado: {props.valor ? "COMPLETED" : "PENDING"}</h1>
    </div>
  );
};
