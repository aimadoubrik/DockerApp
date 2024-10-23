import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BookForm = ({ dispatch, books }) => {
  const { isbn } = useParams();
  const navigate = useNavigate();

  const [bookData, setBookData] = useState({
    isbn: '',
    title: '',
    poster: '',
    author: '',
    description: ''
  });

  useEffect(() => {
    if (isbn) {
      const existingBook = books.find((book) => book.isbn === isbn);
      if (existingBook) setBookData(existingBook);
    }
  }, [isbn, books]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isbn) {
      dispatch({ type: 'UPDATE_BOOK', payload: bookData });
    } else {
      dispatch({ type: 'ADD_BOOK', payload: bookData });
    }
    navigate('/');
  };

  const handleChange = (e) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className='mt-5 container border p-3'>
        <h2 className='mb-3 text-center'>{isbn ? 'Edit Book' : 'Add Book'}</h2>
      <input name="isbn" value={bookData.isbn} onChange={handleChange} className='form-control mb-3' placeholder="ISBN" required />
      <input name="title" value={bookData.title} onChange={handleChange} className='form-control mb-3' placeholder="Title" required />
      <input name="poster" value={bookData.poster} onChange={handleChange} className='form-control  mb-3' placeholder="Poster URL" required />
      <input name="author" value={bookData.author} onChange={handleChange} className='form-control mb-3' placeholder="Author" required />
      <textarea name="description" value={bookData.description} onChange={handleChange} className='form-control mb-3' placeholder="Description"></textarea>
      <button className='btn btn-outline-dark w-100' type="submit">{isbn ? 'Update Book' : 'Add Book'}</button>
    </form>
  );
};

export default BookForm;
