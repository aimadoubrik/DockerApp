import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useReducer } from 'react';
import { bookReducer } from './context/bookReducer';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import BookDetails from './components/BookDetails';
import Navbar from './components/Navbar';

function App() {
  const [books, dispatch] = useReducer(bookReducer, [
    // Initial state with a few books
    { isbn: '12345', title: 'Book 1', poster: 'https://picsum.photos/200/300', author: 'Author 1', description: 'Description 1' },
    { isbn: '67890', title: 'Book 2', poster: 'https://picsum.photos/200/300', author: 'Author 2', description: 'Description 2' }
  ]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList books={books} dispatch={dispatch} />} />
        <Route path="/add" element={<BookForm dispatch={dispatch} books={books} />} />
        <Route path="/edit/:isbn" element={<BookForm dispatch={dispatch} books={books} />} />
        <Route path="/details/:isbn" element={<BookDetails books={books} />} />
      </Routes>
    </Router>
  );
}

export default App;
