import React from 'react';
import { MainLayout } from '../../layouts';
import styles from './BooksPage.module.css'
import { Table } from 'antd'
import { NewBook } from '../../components';

export const BooksPage : React.FC = () => {
    return (
        <MainLayout>
            <div>
                <h1>All books</h1>
            </div>
            <Table>

            </Table>
            <div>
                <h1>Create a new book</h1>
                <NewBook />
            </div>
        </MainLayout>
    )
}
