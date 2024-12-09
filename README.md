# Better Software Internship Assignment

This project is a React application featuring Sign Up and Login forms, built using TypeScript. It utilizes Formik for form handling and Yup for validation, following clean coding principles and good user experience practices.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Design Choices](#design-choices)
- [Assumptions and Limitations](#assumptions-and-limitations)
- [Contributing](#contributing)
- [License](#license)

## Installation

To set up and run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd better-software-internship
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your web browser and navigate to:
   ```
   http://localhost:3000
   ```

## Usage

The application contains two forms: 
1. **Sign Up Form**: 
   - Fields for username, email, and password.
   - A password strength indicator is shown based on the entered password.
   - On successful submission, a success message "Sign Up Successful" is displayed.

2. **Login Form**: 
   - Fields for email and password.
   - A "Remember Me" checkbox that saves the email to local storage if checked.
   - On successful submission, a success message "Login Successful" is displayed.

## Design Choices

- **Formik**: Used for handling form state and validation, which simplifies form management.
- **Yup**: Integrated for schema-based validation of form fields, ensuring data integrity.
- **TypeScript**: Employed for type safety, enhancing code reliability and maintainability.
- **Password Strength Indicator**: Implemented to provide feedback on the strength of the user's password during sign-up.
- **Local Storage**: Used to store the email for the "Remember Me" feature in the Login form, improving user convenience.
- **Accessibility**: Proper ARIA roles and labels are added to improve usability for screen readers.

## Assumptions and Limitations

- The application does not connect to a backend; submission alerts are used for demonstration purposes only.
- The password strength assessment is based on simple criteria; this can be enhanced further.
- The design is minimal and may require enhancements for a production-level application.
- No external UI libraries (e.g., Material-UI, Ant Design) are used, keeping the design lightweight.
