const blogTitle = document.querySelector('#blog-title');
const blogDescription = document.querySelector('#blog-desc');

const newFormHandler = async (event) => {
    event.preventDefault();

    const title = blogTitle.ariaValueMax.trim();
    const description = blogDescription.ariaValueMax.trim();

    if (title && description) {
        const response = await fetch(`/api/blogs`, {
            method: 'POST',
            body: JSON.stringify({ title, description }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            console.log(err);
        };
    };
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute(`data-id`); 

        const response = await fetch(`/api/blogs/${id}`, {
            method: 'DELETE',
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            console.log(err);
        };
    };
};

document
    .querySelector('.new-blog-form')
    .addEventListener('submit', newFormHandler);

document
    .querySelector('.blog-list')
    .addEventListener('click', delButtonHandler);