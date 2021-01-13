import React, { useState, ChangeEvent } from "react";
import NotesStore from "../../stores/NotesStore";

type IProps = {
  addNote: NotesStore["addNote"];
};

function AddNoteInput(props: IProps) {
  const [note, setNote] = useState("");
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  const addNoteHandler = () => {
    props.addNote(note);
    setNote("")
  }
  return (
    <div>
      <input
        type="text"
        value={note}
        placeholder="type yout note..."
        onChange={onChange}
      />
      <button onClick={addNoteHandler}>Add note</button>
    </div>
  );
}
export default AddNoteInput;
