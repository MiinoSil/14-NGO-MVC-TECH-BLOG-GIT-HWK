const blogID = document.querySelector('.new-post-form');
const postDescription = document.querySelector('#post_description');

const postFormHandler = async function (event) {
	event.preventDefault();

	const blog_id = blogID.dataset.blogid;

	const post_description = postDescription.value.trim();

	if (post_description) {
		await fetch('/api/posts', {
			method: 'POST',
			body: JSON.stringify({
				blog_id,
				post_description,
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		document.location.reload();
	};
};

document
	.querySelector('.new-post-form')
	.addEventListener('submit', postFormHandler);