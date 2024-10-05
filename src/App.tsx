import React from 'react';
import styles from './App.module.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { 
  HomePage, 
  SigninPage, 
  BooksPage, 
  BookDetailPage, 
  UsersPage, 
  CommentPage,
  TopicsPage,
  AdsPage
} from './pages'


function App() {
  return (
    <div className={styles.App}>
      <div className={styles['page-content']}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/signin" element={<SigninPage />}></Route>
            <Route path="/books" element={<BooksPage />}></Route>
            <Route path="/book/:bookId" element={<BookDetailPage />}></Route>
            <Route path="/users" element={<UsersPage />} ></Route>
            <Route path="/comments" element={<CommentPage />} ></Route>
            <Route path="/ads" element={<AdsPage />} ></Route>
            <Route path="/topics" element={<TopicsPage />} ></Route>
            <Route path="*" element={<h1>Not Found</h1>}></Route>
          </Routes>        
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
