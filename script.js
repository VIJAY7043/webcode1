// script.js
document.addEventListener('DOMContentLoaded', async () => {
    const apiUrl = 'https://anapioficeandfire.com/api/books';
    const booksContainer = document.getElementById('books-container');
    let data; // Move data to a higher scope

    try {
        const response = await fetch(apiUrl);
        data = await response.json();

        data.slice(0, 10).forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.innerHTML = `
                <h2>${book.name}</h2>
                <p><strong>ISBN:</strong> ${book.isbn}</p>
                <p><strong>Pages:</strong> ${book.numberOfPages}</p>
                <p><strong>Authors:</strong> ${book.authors.join(', ')}</p>
                <p><strong>Publisher:</strong> ${book.publisher}</p>
                <p><strong>Released Date:</strong> ${book.released}</p>
            `;

            booksContainer.appendChild(bookElement);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }

    const searchInput = document.createElement('input');
    searchInput.placeholder = 'Search books';

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();

        // Filter books based on the search term
        const filteredBooks = data.filter(book => book.name.toLowerCase().includes(searchTerm));

        // Update the display with filtered books
        booksContainer.innerHTML = ''; // Clear previous content
        filteredBooks.slice(0, 10).forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.innerHTML = `
                <h2>${book.name}</h2>
                <p><strong>ISBN:</strong> ${book.isbn}</p>
                <p><strong>Pages:</strong> ${book.numberOfPages}</p>
                <p><strong>Authors:</strong> ${book.authors.join(', ')}</p>
                <p><strong>Publisher:</strong> ${book.publisher}</p>
                <p><strong>Released Date:</strong> ${book.released}</p>
            `;

            booksContainer.appendChild(bookElement);
        });
    });

    document.body.insertBefore(searchInput, booksContainer);
});
