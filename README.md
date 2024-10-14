# first-activity
This is my first git repository.



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">        
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book Management System</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        form { max-width: 400px; }
        label { display: block; margin: 10px 0 5px; }
        input, select { width: 100%; padding: 8px; margin-bottom: 10px; }
        button { padding: 10px; background-color: #28a745; color: white; border: none; cursor: pointer; }
        button:hover { background-color: #218838; }
    </style>
</head>
<body>
    <h1>Add a New Book</h1>
    <form id="bookForm">
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" required>

        <label for="author">Author:</label>
        <input type="text" id="author" name="author" required>

        <label for="isbn">ISBN:</label>
        <input type="text" id="isbn" name="isbn" required>

        <label for="pubDate">Publication Date:</label>
        <input type="date" id="pubDate" name="pubDate" required>

        <label for="genre">Genre:</label>
        <input type="text" id="genre" name="genre" required>

        <button type="submit">Add Book</button>
    </form>
    <script>
        document.getElementById('bookForm').addEventListener('submit', function(event) {
            event.preventDefault();
            // Add logic to handle form submission
            alert('Book added!');
        });
    </script>
</body>
</html>
