import React from 'react';
import './TagsInput.scss'
import IconButton from '@material-ui/core/IconButton';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { useStores } from '../store/PhotoSearchEngine'
import { observer } from 'mobx-react'
import { Link } from "react-router-dom";

const TagsInput = observer((props) => {
	const { photoSearchEngine } = useStores()
	const [tags, setTags] = React.useState(props.tags);
	const removeTags = indexToRemove => {
		console.log("remove tags")

		setTags([...tags.filter((_, index) => index !== indexToRemove)]);
	};
	const addTags = event => {
		console.log("add tags")
		let value=event.target.value.split(' ')
		if (value[0] !== "" ) {
			if (value[value.length - 1] === "")
				value.pop()
			let tagsNew = [...tags, value[0]]
			if(value[1]!=="")	
			tagsNew=[...tags, ...value]
			setTags([...tagsNew]);
			event.target.value = "";
		}
		else{
			event.target.value = null;
		}
	};
	console.log("Tags render")
	return (
		<div className="tags-input">
			<ul id="tags">
				{tags.map((tag, index) => (
					<li key={index} className="tag">
						<span className='tag-title'>{tag}</span>
						<span className='tag-close-icon'
							onClick={() => removeTags(index)}
						>
							x
						</span>
					</li>
				))}
			</ul>
			<input
				type="text"
				list="RecentTags"
				onKeyUp={event => event.key === " " ? addTags(event) : null}
				placeholder="Add tags"
			/>
			<datalist id="RecentTags"  >
				{photoSearchEngine.photosSearchHistory.map(pt => <option key={pt}>{pt.split('+').join(" ")}</option>)}
			</datalist>
			<Link to={`/photos/${tags.join('+')}`}>
				<IconButton aria-label="delete" size="medium">
					<NavigateNextIcon fontSize="inherit" />
				</IconButton>
			</Link>
		</div>
	);
});


export default TagsInput
