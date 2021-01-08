import { useState, useRef } from 'react';
import { Draggable } from './components/Draggable';
import { Button } from './components/Button';
import './App.css';

function App() {
  const [state, setstate] = useState({ x: 0, y: 0 });
  const [canEdit, setcanEdit] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const _move = (x, y) => {
    setstate({ x: x, y: y });
  }

  let beforeEditPosX = useRef(state.x);
  let beforeEditPosY = useRef(state.y);


  const editBtnClickHandler = () => {
    beforeEditPosX.current = state.x;
    beforeEditPosY.current = state.y;
    setcanEdit(true);
    setShowControls(true);
  }

  const saveBtnClickHandler = () => {   // saving current coordinates in local storage
    if (canEdit) {
      localStorage.setItem('xpos', state.x);
      localStorage.setItem('ypos', state.y);
      setcanEdit(false);
      setShowControls(false);
    }
  }

  const cancelBtnClickHandler = () => {
    if (canEdit) {
      setstate({ x: beforeEditPosX.current, y: beforeEditPosY.current });
    }
    setcanEdit(false);
    setShowControls(false);
  }

  return (
    <div className="container">
      <Button btnid={'btnedit'} classname={'btn btn-edit'} btntext={'Edit'} onClick={editBtnClickHandler} />
      <Draggable x={state.x} y={state.y} canedit={canEdit} onMove={_move} showControls={showControls}/>
      { showControls && <Button btnid={'btnsave'} classname={'btn btn-save'} btntext={'Save'} onClick={saveBtnClickHandler} /> }
      { showControls && <Button btnid={'btncancel'} classname={'btn btn-cancel'} btntext={'Cancel'} onClick={cancelBtnClickHandler} /> }
    </div>
  );
}

export default App;
