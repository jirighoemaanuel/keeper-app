function CreateArea(props) {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input
          onChange={props.handleChange}
          name='title'
          placeholder='Title'
          value={props.todo.title}
        />
        <textarea
          onChange={props.handleChange}
          name='content'
          placeholder='Take a note...'
          rows='3'
          value={props.todo.content}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
