import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

function App() {
  const [todo, setTodo] = useState({
    title: '',
    content: '',
  });
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    // console.log({ title: todo.title, content: todo.content });
    console.log(todoItems);
    setTodo({ title: '', content: '' });
  }, [todoItems]);

  function handleSubmit(e) {
    e.preventDefault();
    setTodoItems((previousArr) => [
      ...previousArr,
      { title: todo.title, content: todo.content },
    ]);
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    if (name === 'title') {
      setTodo((previousTodo) => {
        return { ...previousTodo, title: value };
      });
    } else if (name === 'content') {
      setTodo((previousTodo) => {
        return { ...previousTodo, content: value };
      });
    }
  }

  function deleteTodo(id) {
    const newTodoList = todoItems.filter((todo, index) => index !== id);
    setTodoItems(newTodoList);
  }

  return (
    <div>
      <Header />
      <CreateArea
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        todo={todo}
      />
      {todoItems.map((todo, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={todo.title}
            content={todo.content}
            deleteTodo={deleteTodo}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
