import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import Notes from './Notes';
import { changeEditor, editNote, removeNote, saveNote } from '../../redux/action';
import { getEditor, getNotesList } from '../../redux/selectors';
import logRender from '../logRender';

const mapStateToProps = state => ({
  editor: getEditor(state),
  notes: getNotesList(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  editNote,
  removeNote,
  changeEditor,
  saveNote,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(logRender(Notes));