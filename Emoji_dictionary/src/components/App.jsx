import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

console.log(emojipedia);

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map((emojiEntry) => (
          <Entry
            key={emojiEntry.id}
            emoji={emojiEntry.emoji}
            name={emojiEntry.name}
            meaning={emojiEntry.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;
