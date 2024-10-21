import React from 'react';
import { MainLayout } from '../../layouts';
import styles from './BooksPage.module.css'
import { Table } from 'antd'
import { NewBook } from '../../components';
import axios from 'axios';

const columns = [
    { "title": "Title", "dataIndex": "title", "key": "title"},
    { "title": "Description", "dataIndex": "description", "key": "description"},
];

const loadBooks = async () : Promise<any[] | undefined> => {
    try {
        const response = await axios.get("http://localhost:7070/books");
        var books : any[] = response.data.books;
        books.map((book) => { return {...book, "key": book.id}});
        return books;
    } catch (error) {
        return [];
    }
}


interface State {
    loading: boolean;
    error: string | null;
    books: any[] | undefined;
}

//TODO: extract this to BooksPageComponent

export class BooksPage extends React.Component<any, State> {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            error: null,
            books: []
        }
    }

    async componentDidMount() {
        try {
            const books = await loadBooks();
            this.setState({
                loading: false,
                error: null,
                books: books
            });
        } catch (error) {
            if (error instanceof Error) {
                this.setState({
                    loading: false,
                    error: error.message,
                    books: []
                })
            }
        }       
    }

    render(): React.ReactNode {
        const { loading, error, books } = this.state;
        if (loading) {
            return <><span>Loading ......</span></>
        }

        if (error) {
            return <div>出错啦！ {error}</div>
        }

        return (
            <MainLayout>
                <div>
                    <h1>All books</h1>
                </div>
                <Table dataSource={books} columns={columns}>
                </Table>
                <div>
                    <h1>Create a new book</h1>
                    <NewBook />
                </div>
            </MainLayout>
        )
    }
}
