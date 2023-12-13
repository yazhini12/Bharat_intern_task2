const express = require('express');
const mongoose = require('mongoose');
const path = require('path'); // Import the path module

// Connect to MongoDB
mongoose.connect('mongodb://localhost/my-blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(error => console.error('Error connecting to MongoDB:', error));

// Create Express server
const app = express();
app.use(express.json());

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the 'public' folder

// Define a simple blog post schema
const postSchema = new mongoose.Schema({
    title: String,
    content: String,
});

// Create a model for blog posts
const Post = mongoose.model('Post', postSchema);

// Add sample blog posts to the database
Post.insertMany([
    { title: 'First Post', content: 'This is my first blog post.' },
    { title: 'Second Post', content: 'This is my second blog post.' },
])
.then(result => console.log('Sample blog posts added'))
.catch(error => console.error('Error adding sample posts:', error));

// Start the server
const PORT = process.env.PORT || 3000; // Use the provided port or default to 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
