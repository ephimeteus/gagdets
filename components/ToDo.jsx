function ToDo({ description }) {
  return (
    <div className="toDo">
      <div className="toDo-upper-section">
      </div>
      <div className="toDo-lower-section">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ToDo;