# 📚 BookBloom

BookBloom is a simple and responsive **online book store interface** created using **HTML, CSS, and JavaScript**. It allows users to browse a collection of books, search by title, filter by category, sort by price or name, and switch between light and dark mode.

This project is designed as a beginner-friendly frontend web development project.

## ✨ Features

- 📖 Display books in a responsive grid layout
- 🔍 Search books by name
- 🏷️ Filter books by category
- ↕️ Sort books by:
  - Price: Low to High
  - Price: High to Low
  - Name: A to Z
- 🌙 Light and Dark mode
- ⏳ Simple loading animation
- ❌ No-results message when no books match the search/filter
- 📱 Responsive design for desktop, tablet, and mobile screens
- 💰 Display book descriptions, categories, and prices
- 🖼️ Local book cover images

## 🛠️ Technologies Used

- **HTML5** – Page structure and content
- **CSS3** – Styling, layout, responsive design, and dark mode
- **JavaScript** – Book data, search, filtering, sorting, loading, and theme switching

## 📂 Project Structure

```text
BookBloom/
│
├── index.html
├── style.css
├── script.js
│
└── images/
    ├── canwe.jpg
    ├── hp.jpg
    ├── ikigai.jpg
    ├── images.jpg
    ├── itends.jpg
    ├── kalivarai.jpg
    ├── kiterunner.jpg
    ├── matmv.jpg
    ├── nelsonmandela.jpg
    ├── poetry1.jpg
    ├── rdpd.jpg
    ├── sns1.jpg
    ├── snsm.jpg
    ├── whitent.png
    └── withoutwndw.jpg
```

> Note: The project also contains a file named `style` with CSS content. The main page loads `style.css`.

## 📚 Book Categories

The website includes category options such as:

- Fiction
- Self-Help
- Classic
- Fantasy
- Finance
- Tamil Fiction
- Biography
- Science Fiction
- Poetry

## 📖 Current Book Data

The JavaScript file contains book information including:

- Book name
- Category
- Price
- Book cover image
- Short description

Example books include:

- The Kite Runner
- Can We Be Strangers Again
- Kalivarai Irukai
- Ikigai
- Harry Potter Full Set
- It Ends With Us
- Sila Nerangalil Sila Manidharhal
- Rich Dad Poor Dad

## 🚀 How to Run the Project

No database or server is required.

### Method 1 – Open Directly

1. Download or clone the project.
2. Open the project folder.
3. Double-click `index.html`.
4. The BookBloom website will open in your browser.

### Method 2 – Using VS Code

1. Open the project folder in **Visual Studio Code**.
2. Open `index.html`.
3. Run it using the **Live Server** extension.
4. The website will open in your browser.

## 🔎 How the Search Works

When the user enters a book name in the search box, JavaScript checks the book names stored in the `books` array.

Only matching books are displayed.

The search can also be combined with the category filter.

## 🏷️ How Filtering Works

Users can select a category from the category dropdown.

JavaScript compares the selected category with each book's category and displays only matching books.

## ↕️ How Sorting Works

The sorting option allows users to arrange books by:

- Lowest price first
- Highest price first
- Alphabetical order by book name

## 🌙 Dark Mode

The theme button switches between:

- Light Mode
- Dark Mode

JavaScript adds or removes the `dark-mode` class from the `<body>` element, while CSS controls the appearance of the dark theme.

## 📱 Responsive Design

BookBloom uses CSS media queries to adapt the layout for different screen sizes.

- **Desktop:** 4 book cards per row
- **Tablet:** 2 book cards per row
- **Mobile:** 1 book card per row

The search and filter controls also adjust for smaller screens.

## 🗄️ Database

BookBloom currently **does not use a database**.

All book information is stored directly inside `script.js` in a JavaScript array.

This makes the project simple to run and suitable for a frontend practice project.

## 🔮 Future Improvements

Possible future features include:

- 🛒 Add to Cart
- ❤️ Wishlist
- 👤 User registration and login
- 💳 Online payment
- 📦 Order management
- 🗄️ MySQL database integration
- 🔐 PHP backend
- 📊 Admin dashboard
- 📖 Individual book details page
- ⭐ Book ratings and reviews
- 🔎 More advanced search
- 🌐 Multi-language support

## 🎯 Project Purpose

The main purpose of BookBloom is to practice frontend web development concepts such as:

- HTML page structure
- CSS styling and responsive layouts
- JavaScript DOM manipulation
- Arrays and objects
- Search functionality
- Filtering and sorting
- Event handling
- Dynamic content generation
- Dark/light theme switching

## 👩‍💻 Author

Created as a student web development project.
