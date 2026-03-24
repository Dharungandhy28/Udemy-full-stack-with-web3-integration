import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <h6>{props.content}</h6>
      <button onClick={handleClick}>
        <DeleteForeverIcon />
      </button>
    </div>
  );
}

export default Note;
