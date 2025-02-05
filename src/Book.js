const Book = (props) => {
	// const { img, title, author } = props.book;
	const { img, title, author, } = props; //if we use spread operator

	return (
		<article className="book">
			<img src={img} alt={title} />
			<h2>{title}</h2>
			<h4>{author}</h4>
		</article>
	);
};

export default Book;