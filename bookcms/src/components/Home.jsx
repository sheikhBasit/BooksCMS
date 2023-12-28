import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addBook, removeBook, selectBooks } from '../redux/bookSlice';

const Home = () => {
  return (
   <> 
   <AddBook />
    <BookList />
   </> 
  )
}

export default Home
function BookList() {
    const books = useSelector(selectBooks);
    const dispatch = useDispatch();
  
    const handleRemoveBook = (id) => {
      dispatch(removeBook(id));
    };
  
    return (
      <div>
        <h1>Book List</h1>
  
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              {book.title} by {book.author} (Category: {book.category}){' '}
              <button onClick={() => handleRemoveBook(book.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  function AddBook() {
    const dispatch = useDispatch();
    const [newBookTitle, setNewBookTitle] = useState('');
  
    const handleAddBook = () => {
      const newBook = {
        id: Date.now(),
        title: newBookTitle,
        author: 'Unknown',
        category: 'Under construction',
      };
  
      dispatch(addBook(newBook));
      setNewBookTitle('');
    };
  
    return (
      <div>
        <h1>Add a New Book</h1>
        <div>
          <input
            type="text"
            placeholder="Enter book title"
            value={newBookTitle}
            onChange={(e) => setNewBookTitle(e.target.value)}
          />
          <button onClick={handleAddBook}>Add Book</button>
        </div>
      </div>
    );
  }
  