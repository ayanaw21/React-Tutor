import React from "react";
import ReactDOM from "react-dom/client";

import { books } from "./books";
import Book from "./Book";
import "./index.css";
// import  './assets'
// function Greetings() {
// 	return (
// 		<>
// 			<Person />
// 			<Message />
// 		</>
// 	);
// }
// const Person = () => <h2>John Doe</h2>;
// const Message = () => {
// 	return <p>This is My Message</p>;
// };
// function Greetings() {
// 	return React.createElement('h2',{},"Hello world");
// }
// const Greeting = () => {
// 	return React.createElement(
// 		"div",
// 		{},
// 		React.createElement("h2", {}, "Hello World")
// 	);
// };


const BookList = () => {
	return (
		<section className="booklist">
			{books.map((book) => {
				// const {author, title, img,id} = book;
				return (
					// <Book
					// 	author={author}
					// 	title={title}
					// 	img={img}
					// 	key = {id}
					// />
					// <Book book={book} key={book.id} />
					<Book {...book} key={book.id} />
				);
			})}
		</section>
	);
};


// const Image = () => (
// 	<img src="./images/The let them.jpg" alt="The Let Them Theory" />
// );
// const Title = () => <h2>The Let Them Theory</h2>;
// const Author = () => {
// 	const inlineHeaderStyle = {
// 		color: "#617d98",
// 		fontSize: "0.75rem",
// 		marginTop: "0.5rem",
// 	};
// 	return <h4 style={inlineHeaderStyle}>Mel Robbins</h4>;
// };

export default BookList;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
