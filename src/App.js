
import "./App.css";
import BookList from "./components/BookList";
import { useEffect, useState } from "react";

function App() {
  const [bookList, setBookList] = useState([]);
  useEffect(() => {
    getBookData();
  }, []);

  const getBookData = async () => {
    const bookData = await fetch(
      "https://openlibrary.org/people/mekBot/books/want-to-read.json"
    );
    const data = await bookData.json();
    setBookList(data?.reading_log_entries);
  };
  return <BookList bookList={bookList}/>;
}

export default App;
