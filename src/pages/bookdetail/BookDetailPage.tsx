import React from "react";
import { useParams } from 'react-router-dom'

type MatchParams = {
    bookId: string,
}

export const BookDetailPage : React.FC = () => {
    const params = useParams<MatchParams>();

    return (
        <h1>Book Detail with id: {params.bookId}</h1>
    )
}
