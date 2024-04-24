import CardComponent from '../components/CardComponent'

function SingleBook ({booksData}) {
return (

    <>
    {booksData.map((book) => (
        <CardComponent key={`book-${book.asin}`} book={book} />
    ))}
    </>
)
}

export default SingleBook