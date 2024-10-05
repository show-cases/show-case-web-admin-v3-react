
import React from 'react';
import { TopSearch, Version } from '../../components';
import styles from './HomePage.module.css'
import { MainLayout } from '../../layouts'

export const HomePage : React.FC = () => {
    return (
    <div className={styles['home-container']}>
        <MainLayout>
            <Version version={ "1.0.0" } environment={"DEV"} />
            <TopSearch totalCount={100}/>
        </MainLayout>
    </div>)
}
