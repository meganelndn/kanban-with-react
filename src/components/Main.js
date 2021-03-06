import React from "react";
import List from "./List";

export default function Main({
  cards,
  onFormSubmit,
  onCardDelete,
  onCardMove,
}) {
  /* console.log(cards); */

  return (
    <main>
      <List
        onFormSubmit={onFormSubmit}
        onCardDelete={onCardDelete}
        onCardMove={onCardMove}
        cards={cards.filter((c) => c.list === "todo")}
        header="TODO"
      />
      <List
        onFormSubmit={onFormSubmit}
        onCardDelete={onCardDelete}
        onCardMove={onCardMove}
        cards={cards.filter((c) => c.list === "doing")}
        header="DOING"
      />
      <List
        onFormSubmit={onFormSubmit}
        onCardDelete={onCardDelete}
        onCardMove={onCardMove}
        cards={cards.filter((c) => c.list === "done")}
        header="DONE"
      />
    </main>
  );
}
