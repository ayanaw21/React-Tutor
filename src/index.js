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
		id: 1,
	},
	{
		author: "Freida Mcfadden",
		title: "The House Maid",
		img: "./images/book-1.jpg",
		id: 2,
	},
	{
		author: "James Clear",
		title: "The Atomic Habit ",
		img: "./images/Atomic-habits.jpg",
		id: 3,
	},
];

const BookList = () => {
	const someValue = "shakeAndBake";
	const displayValue = () => {
		console.log(someValue);
	}
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
				// const {author, title, img,id} = book;
				return (
					// <Book
					// 	author={author}
					// 	title={title}
					// 	img={img}
					// 	key = {id}
					// />
					// <Book book={book} key={book.id} />
					<Book {...book} key={book.id} displayValue={displayValue}/>
				);
			})}
		</section>
	);
};


const Book = (props) => {
	// const { img, title, author } = props.book;
	const { img, title, author,displayValue } = props; //if we use spread operator
	
	return (
		<article className="book">
			<img src={img} alt={title} />
			<h2>{title}</h2>
			<button onClick={displayValue}>display title</button>
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
