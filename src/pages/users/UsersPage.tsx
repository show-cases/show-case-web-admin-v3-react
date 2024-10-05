import React from "react";
import styles from './UsersPage.module.css';
import { MainLayout } from "../../layouts";
import { Table } from "antd";


export const UsersPage : React.FC = () => {
    return (
        <MainLayout>
            <div className={styles["users-container"]}>
                <h1>Users</h1>
                <Table></Table>
            </div>
        </MainLayout>
    )
}
