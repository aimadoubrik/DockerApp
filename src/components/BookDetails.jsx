import { useParams } from 'react-router-dom';

const BookDetails = ({ books }) => {
  const { isbn } = useParams();
  const book = books.find((book) => book.isbn === isbn);

  if (!book) {
    return <h2>Book not found</h2>;
  }

  return (
    <div className='container mt-5 border p-3'>
      <h2>{book.title}</h2>
      <hr />
      <img src={book.poster} alt={book.title} style={{ width: '100px', height: '150px' }} />
      <p>Author: {book.author}</p>
      <p>Description: {book.description}</p>
    </div>
  );
};

export default BookDetails;

