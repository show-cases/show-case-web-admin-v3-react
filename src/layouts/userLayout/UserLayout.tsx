import React, { Children } from "react";
import styles from './UserLayout.module.css';

interface PropsType {
    children: React.ReactNode
}

export const UserLayout : React.FC<PropsType> = ({children}) => {
    return (
        <>{ children}</>
    )
}
