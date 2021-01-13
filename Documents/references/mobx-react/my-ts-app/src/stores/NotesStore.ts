import { makeObservable, observable, action, computed } from "mobx";
import { getNotes, postNotes } from "../api";

export type Note = {
  id: number;
  title: string;
  isCompleted: boolean;
};

export type Status = {
  completed: number;
  remaninig: number;
};
export default class NotesStore {
  @observable notes: Note[] = [];
  @observable message: string = "";

  constructor() {
    makeObservable(this);
  }

  @action
  loadNotes = () => {
    getNotes().then(notes => (this.notes = notes));
  };

  @action
  saveNotes = () => {
    postNotes(this.notes);
    this.message = "saved successfully!";
  };

  @action
  addNote = (title: string) => {
    const note = {
      id: +Math.random().toFixed(5),
      title,
      isCompleted: false,
    };
    this.notes.push(note);
  };

  @action
  toggleNote = (note: Note) => {
    const index = this.notes.findIndex(n => n.id === note.id);
    if (index !== -1) {
      this.notes[index].isCompleted = !this.notes[index].isCompleted;
    }
  };

  @action
  removeNote = (index: number) => {
    this.notes.splice(index, 1);
    this.saveNotes();
  };
  @computed
  get status() {
    let completed = 0;
    let remaninig = 0;
    this.notes.forEach(item => {
      if (item.isCompleted) {
        completed++;
      } else {
        remaninig++;
      }
    });
    return { completed, remaninig };
  }
}
