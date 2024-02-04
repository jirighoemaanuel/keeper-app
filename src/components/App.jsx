import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';
import axios from 'axios';

function App() {
  const [todo, setTodo] = useState({
    title: '',
    content: '',
  });
  const [todoItems, setTodoItems] = useState([]);

  // Handle getting todoItems from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://keeper-app-e3tn.onrender.com/todo'
        );
        setTodoItems(response.data);
      } catch (error) {
        console.error('Error fetching data:', error.stack());
      }
    };

    fetchData();
  }, [todoItems]);

  function handleSubmit(e) {
    e.preventDefault();
    const data = { title: todo.title, content: todo.content };
    const todoData = async () => {
      try {
        const response = await axios.post(
          'https://keeper-app-e3tn.onrender.com/todo',
          data
        );
        console.log('Post request successful:', response.data);
      } catch (error) {
        console.error('Error making post request:', error);
      }
    };

    todoData();

    setTodo({ title: '', content: '' });
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

  async function deleteTodo(id) {
    try {
      await axios.delete(`https://keeper-app-e3tn.onrender.com/todo/${id}`);
    } catch (error) {
      console.error('Error making delete request:', error);
    }
  }

  return (
    <div>
      <Header />
      <CreateArea
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        todo={todo}
      />
      {todoItems.map((todo) => {
        return (
          <Note
            key={todo.id}
            id={todo.id}
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
