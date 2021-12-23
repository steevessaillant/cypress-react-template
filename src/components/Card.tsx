import { ReactChild } from "react";
import "./Card.css"

function Card(props: { children: ReactChild}) {
  return (
    <div className="center,card">
      {props.children}
    </div>
  );
}

export default Card;