import React, {useEffect} from "react";
import { useRootStore } from "./stores/RootStore";
import AddNoteInput from "./Components/AddNoteInput";
import { observer } from "mobx-react-lite";

function App() {
  const { noteStore } = useRootStore();
  useEffect(() => {
   noteStore.loadNotes();
  },[]);
  return (
    <div className="App">
      {noteStore.message}
      <div className="header">
        <h3 style={{ marginRight: 10 }}>
          Completed:{noteStore.status.completed}{" "}
        </h3>
        <h3>Remaining:{noteStore.status.remaninig} </h3>
      </div>
      <AddNoteInput addNote={noteStore.addNote} />
      <hr />
      <ul>
        {noteStore.notes.map((note, index) => (
          <li key={index}>
            <span onClick={noteStore.toggleNote.bind(null, note)}>
              [{note.isCompleted ? "✔" : "✘"}]
            </span>
            {note.title}
            <span
              style={{ marginLeft: 10, color:"red" }}
              onClick={noteStore.removeNote.bind(null, index)}
            >
              remove
            </span>
          </li>
        ))}
      </ul>
      <div className="footer">
        <button onClick={noteStore.saveNotes}>Save Note</button>
      </div>
    </div>
  );
}

export default observer(App);
