document.addEventListener('DOMContentLoaded', () => {
    const postList = document.getElementById('post-list');

    // Fetch the blog posts from the server
    fetch('/posts')
        .then(response => response.json())
        .then(posts => {
            // Display the blog posts on the webpage
            posts.forEach(post => {
                const listItem = document.createElement('li');
                listItem.textContent = post.title;
                postList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error fetching blog posts:', error);
        });
});