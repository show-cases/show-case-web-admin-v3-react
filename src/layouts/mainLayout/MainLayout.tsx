import React from "react";
import styles from "./MainLayout.module.css";
import { Header, Footer } from "../../components"

type PropsType = {
    children: React.ReactNode
}

export const MainLayout : React.FC<PropsType> = (props) => {
    return (
      <>
        <Header />
        <div className={styles['content-container']}>{ props.children }</div>
        <Footer />
      </>
    )
}
