# Employee Management App

## Overview
This is a React-based Employee Management Application that allows users to manage employee records, including viewing, editing, and deleting employee details. The app also includes authentication to ensure secure access.

## Prerequisites
Ensure you have the following installed before running the project:
- **Node.js** (v16 or later recommended)
- **npm** (Node Package Manager) or **yarn**

## Installation
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd Employee Management
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

## Running the Project
To start the development server, run:
```sh
npm run dev
```

This will launch the application on `http://localhost:3000`.

## Authentication Handling
- The app checks for an authentication token in **localStorage**.
- If a token exists, the user is considered logged in.
- To log out, click the **Logout** button, which removes the token and reloads the page.

## Considerations & Assumptions
- Users must log in to access employee records.
- The backend API (if applicable) must be running to fetch and update employee data.
- The project assumes a JSON-based API response.

## Troubleshooting
### Buttons Misalignment Issue
If buttons appear misaligned:
1. Ensure the latest CSS updates are applied.
2. Restart the development server (`Ctrl + C` then `npm run dev`).

### Auto Login Issue
If the app logs in automatically:
1. Clear **localStorage** manually in the browser.
2. Ensure `localStorage.removeItem("token")` is called on logout.

## Contributing
Feel free to submit pull requests or report issues via GitHub.

## License
This project is licensed under the MIT License.

