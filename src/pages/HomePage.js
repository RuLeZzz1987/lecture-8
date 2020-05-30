import React from 'react';
import NoteEditor from '../components/NoteEditor/NoteEditorContainer';
import Notes from '../components/Notes/NotesContainer';

const HomePage = () => (
  <>
    <h1>Home Page Component</h1>
    <div>
      <NoteEditor />
      <Notes />
    </div>
  </>
);

export default HomePage;