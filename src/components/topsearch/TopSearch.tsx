import React from "react";
import styles from './TopSearch.module.css';

interface Props {
    totalCount: number
}

export const TopSearch: React.FC<Props> = (props: Props) => {
    return (
        <div className={ styles["top-search-container"] }>
            <h1>Top Search ({props.totalCount})</h1>
        </div>)
}
