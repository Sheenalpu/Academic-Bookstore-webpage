# LPU Academic Bookstore 🎓📚

A responsive, interactive front-end web application built for engineering students at Lovely Professional University to discover, filter, and manage academic study materials.

This project is a student-built front-end demonstration designed for clarity, responsiveness, and practical interaction. It features a curated, illustrative catalogue of engineering books across various departments and semesters.

## ✨ Features

* **Dynamic Textbook Finder:** Filter books by Engineering Department (CSE, ECE, ME, CE), Semester, Category, and Price Range.
* **Smart Search:** Instantly search for books by title, author, or keyword.
* **Interactive Shopping Cart:** Add new or used books (at a 40% discount) to a study bag. The cart persists across page reloads using browser `localStorage`.
* **Dark & Light Mode:** Seamlessly toggle between a beautifully designed light theme and a high-contrast dark theme.
* **Detailed Modals:** View expanded book descriptions, cover art, and metadata without leaving the page.
* **Fully Responsive:** Carefully crafted CSS ensures a flawless experience on desktop, tablet, and mobile devices.

## 🛠️ Tech Stack

This project was built entirely from scratch without relying on external libraries or frameworks:
* **HTML5:** Semantic structure and accessible layout.
* **CSS3:** Custom styling, CSS variables, CSS Grid/Flexbox layouts, and smooth animations.
* **Vanilla JavaScript (ES6+):** DOM manipulation, dynamic filtering logic, and state management.
* **Local Storage:** Client-side data persistence for the cart and theme preferences.

## 📂 Repository Structure

```text
├── index.html        # Homepage with department links and project info
├── books.html        # Main catalogue page with interactive filters and grid
├── style.css         # Global stylesheet covering layout, themes, and responsiveness
├── script.js         # Core logic for filtering, cart management, and modals
├── bg lpu.jpg.jpeg    # Hero background image for the homepage
└── logo.jpeg         # University logo asset
```

## 🚀 How to Run

Because this is a vanilla front-end project, no build steps, servers, or package installations are required!

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/lpu-academic-bookstore.git
   ```
2. **Open the project:**
   Navigate to the downloaded folder and double-click `index.html` to open it in your default web browser.

## 📌 Disclaimer
*This is a student front-end project. The catalogue contains illustrative sample entries for demonstration purposes and is not an official LPU prescribed-book list. Checkout features are simulated and no real payments are processed.*