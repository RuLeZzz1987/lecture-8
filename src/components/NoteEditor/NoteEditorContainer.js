import { connect } from 'react-redux';
import { compose } from "redux";
import NoteEditor from './NoteEditor';
import { getNoteText } from '../../redux/selectors';
import { addNote, changeNote } from '../../redux/action';
import logRender from "../logRender";

const mapStateToProps = state => ({
  noteText: getNoteText(state)
});

const mapDispatchToProps = dispatch => ({
  addNote: (text) => {
      if (!text) return;

      dispatch(addNote(text));
      dispatch(changeNote(''));
    },
  changeNote: text => dispatch(changeNote(text))
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  logRender
)(NoteEditor);