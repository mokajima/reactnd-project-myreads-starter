import React from 'react'
import {Link} from 'react-router-dom'
import Book from './Book'

class Shelf extends React.Component {
  render() {
    const {books} = this.props

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => (
              <li key={book.id}>
                <Book book={book} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf