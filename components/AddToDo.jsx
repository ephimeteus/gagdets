import { useState } from 'react';

function AddToDo({ createToDo }) {
  const [text, setText] = useState("");

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = () => {
    if (text.trim() !== '') {
      createToDo(text);
      setText('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className='add-todo'>
      <form id="newToDoForm">
        <div className="form-section">
          <label htmlFor="new-toDo"></label>
          <textarea
            id="new-toDo"
            rows="1"
            cols="20"
            required
            value={text}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder='Input task...'
          ></textarea>
        </div>
        <button onClick={handleSubmit} className="button" id='addButton'></button>
      </form>
    </div>
  );
}

export default AddToDo;
