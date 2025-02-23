Fetch-Repos-Github is a simple web application that allows users to fetch and display repositories from GitHub by utilizing the GitHub API.
This project is built using **HTML**, **CSS**, and **JavaScript** to create an interactive and responsive UI that fetches and showcases repositories from any GitHub user.

## Features

- **Fetch Repositories:** Allows users to input a GitHub username and fetch all public repositories for that user.
- **Display Repository Details:** Shows essential details for each repository such as the name, description, and a link to the repository on GitHub.
- **Interactive Search:** Provides an input box for users to type in any GitHub username and retrieve their repositories instantly.
- **Responsive UI:** A simple, clean, and responsive design that adjusts seamlessly to different screen sizes.
- **Loading Spinner:** Displays a loading spinner while fetching data from GitHub to enhance the user experience.

## Technologies Used

- **HTML5:** Structure of the webpage.
- **CSS3:** Styling and layout to make the page attractive and responsive.
- **JavaScript (ES6+):** Fetching data from the GitHub API and handling user interactions dynamically.

## How It Works

1. **User Input:**
   - The user enters a GitHub username in the input field and presses the "Fetch Repositories" button.
   
2. **GitHub API Call:**
   - The application makes an API request to GitHub's public repositories API (`https://api.github.com/users/{username}/repos`) to fetch the data.

3. **Display Data:**
   - Once the data is retrieved, the repositories are displayed in a clean, organized list. Each repository shows:
     - Name of the repository
     - Description (if available)
     - A link to the repository on GitHub
   
