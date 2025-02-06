const Book = (props) => {
	// const { img, title, author } = props.book;
	const { img, title, author, number} = props; //if we use spread operator

	return (
		<article className="book">
            <span className="item_no">{`#${number+1}`}</span>
			<img src={img} alt={title} />
			<h2>{title}</h2>
			<h4>{author}</h4>
		</article>
	);
};

export default Book;