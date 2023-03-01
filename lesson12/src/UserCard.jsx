import { memo } from "react";

export function NormalCard({ name, age }) {
  console.log("Normal, Re-render");
  return (
    <div className="card">
      <div className="card-body">Normal Card: {name + " " + age}</div>
    </div>
  );
}

function Card({ name, age }) {
  return (
    <div className="card">
      <div className="card-body">Memoized Card Card: {name + " " + age}</div>
    </div>
  );
}

export const MemoizedCard = memo(Card);
