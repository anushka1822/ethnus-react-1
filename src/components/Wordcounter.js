import React, {Component} from "react";
import "./Wordcounter.css";

class Wordcounter extends Component {
	state = {
		wordCount: 0,
	};

	sendCount = e => {
		const text = e.target.value;
		const words = text.split(" ");
		this.setState({wordCount: words.length});
	};

	render() {
		const {wordCount} = this.state;

		return (
			<div className="Wordcounter">
				<h1>Responsive Paragraph Word Counter</h1>
				<textarea
					value={this.props.input}
					onChange={this.sendCount}
					placeholder="Enter a sentence or paragraph..."
					rows={10}
					cols={50}
				/>
				<p>Word count: {wordCount}</p>
			</div>
		);
	}
}

export default Wordcounter;
