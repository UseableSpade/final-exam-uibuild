console.log(books)

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    // Create the header
    const headerHTML = `
      <header>NEW YORK TIMES BESTSELLERS</header>
    `;

    // Generate cards
    const cardsHTML = books.map((book, index) => `
    <div class="book-item">  
        <div class="card">
            <div class="number-box">${index + 1}</div>
            <div class="author">${book.sub.toUpperCase()}</div>
            <h2 class="title">${book.title}</h2>
            <p class="text">${book.text}</p>
        </div>
      <button class="read-more">read more</button>
    </div>
    `).join('');

    // Container for cards
    const containerHTML = `
      <div class="container">
        ${cardsHTML}
      </div>
    `;

    // Put everything together
    root.insertAdjacentHTML('beforeend', headerHTML + containerHTML);
});