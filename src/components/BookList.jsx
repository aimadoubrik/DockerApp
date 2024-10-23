import { Link } from 'react-router-dom';
import BookDetails from './BookDetails';

const BookList = ({ books, dispatch }) => {
  const handleDelete = (isbn) => {
    dispatch({ type: 'DELETE_BOOK', payload: isbn });
  };

  return (
    <div className='container-fluid mt-5 border p-3 mr-3 rounded'>
      <h2>Book List</h2>
      <Link to="/add" className="btn btn-primary">Add New Book</Link>
      <hr />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {books.map((book) => (
          <div className="col" key={book.isbn}>
            <div className="card h-100">
              <img src={book.poster} className="card-img-top" alt={book.title} />
              <div className="card-body">
                <h3 className="card-title">{book.title}</h3>
                <p className="card-text">Author: {book.author}</p>
                <Link to={`/details/${book.isbn}`} className="btn btn-outline-primary mx-2">View Details</Link>
                <Link to={`/edit/${book.isbn}`} className="btn btn-primary">Edit</Link>
                <button onClick={() => handleDelete(book.isbn)} className="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
