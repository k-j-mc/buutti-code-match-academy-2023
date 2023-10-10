import { useState } from "react";

import { Button, Col, Container, Form, ListGroup, Row } from "react-bootstrap";

const Assignment4 = () => {
	const [bookName, setBookName] = useState("");
	const [pageCount, setPageCount] = useState(0);

	const [bookArray, setBookArray] = useState([
		{ name: "Dune", pages: 412, id: 0 },
		{ name: "The Eye of the World", pages: 782, id: 1 },
	]);

	const onSubmit = (event) => {
		event.preventDefault();

		if (bookName.length > 0 && pageCount > 0) {
			const newBook = {
				name: bookName,
				pages: pageCount,
				id: bookArray.length,
			};
			setBookArray([...bookArray, newBook]);
		}

		setBookName("");
		setPageCount(0);
	};

	return (
		<Container fluid>
			<Row>
				<Col>
					<h2 className="pt-3">Book List Service</h2>
					<p className="pt-3">Books:</p>
					<ListGroup variant="flush" className="p-3">
						{bookArray.map((book) => (
							<ListGroup.Item key={book.id}>
								{book.name} ({book.pages} pages)
							</ListGroup.Item>
						))}
					</ListGroup>
					<p className="pt-3">Add a new book:</p>
					<Form onSubmit={onSubmit} className="pb-5">
						<Form.Group
							className="mb-3"
							controlId="bookForm.nameinput"
						>
							<Form.Control
								type="text"
								placeholder="Book name"
								value={bookName}
								onChange={({ target }) =>
									setBookName(target.value)
								}
							/>
						</Form.Group>
						<Form.Group
							className="mb-3"
							controlId="bookForm.pageInput"
						>
							<Form.Control
								type="number"
								placeholder="Page count"
								value={pageCount > 0 ? pageCount : ""}
								onChange={({ target }) =>
									setPageCount(target.value)
								}
							/>
						</Form.Group>
						<Button type="submit">Add book</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

export default Assignment4;
