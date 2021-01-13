import { Note } from "./stores/NotesStore";

export const getNotes = (): Promise<Note[]> => {
  return fetch("http://localhost:5000/notes").then(res => res.json());
};

export const postNotes = (notes: Note[]) => {
  fetch("http://localhost:5000/notes", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(notes),
  });
};
