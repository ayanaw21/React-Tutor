import React from "react";
import ReactDOM from "react-dom/client";
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

const books = [
	{
		author: "Mel Robbins",
		title: "The Let Them Theory",
		img: "./images/The let them.jpg",
	},
	{
		author: "Freida Mcfadden",
		title: "The House Maid",
		img: "./images/book-1.jpg",
	},
	{
		author: "James Clear",
		title: "The Atomic Habit ",
		img: "./images/Atomic-habits.jpg",
	},
];

const BookList = () => {
	return (
		<section className="booklist">
			{/* <Book
				author={firstBook.author}
				title={firstBook.title}
				img={firstBook.img}
			/>
			<Book
				author={secondBook.author}
				title={secondBook.title}
				img={secondBook.img}
			/>
			<Book
				author={thirdBook.author}
				title={thirdBook.title}
				img={thirdBook.img}
			/> */}
			{books.map((book) => {
				return (
					<Book
						author={book.author}
						title={book.title}
						img={book.img}
					/>
					
				);
			})}
		</section>
	);
};
const Book = (props) => {
	const { img, title, author } = props;
	return (
		<article className="book">
			<img src={img} alt={title} />
			<h2>{title}</h2>
			<h4>{author}</h4>
		</article>
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
