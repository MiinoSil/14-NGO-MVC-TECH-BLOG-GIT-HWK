const blogID = document.querySelector('.new-comment-form');
const postDescription = document.querySelector('#comment_description');

const commentFormHandler = async function (event) {
	event.preventDefault();

	const blog_id = blogID.dataset.blogid;

	const comment_description = postDescription.value.trim();

	if (comment_description) {
		await fetch('/api/comments', {
			method: 'POST',
			body: JSON.stringify({
				blog_id,
				comment_description,
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		document.location.reload();
	};
};

document
	.querySelector('.new-comment-form')
	.addEventListener('submit', commentFormHandler);