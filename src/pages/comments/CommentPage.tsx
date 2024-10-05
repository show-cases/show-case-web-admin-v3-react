import { Table } from "antd";
import React from "react";
import { MainLayout } from "../../layouts";
import styles from './CommentPage.module.css';

export const CommentPage : React.FC = () => {
    return (
        <MainLayout>
            <div className={styles["comments-container"]}>
                <h1>Comments</h1>
                <Table></Table>
            </div>
        </MainLayout>
    )
}
