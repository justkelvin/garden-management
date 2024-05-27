# Clean My Garden

## About The Project

Clean My Garden is a comprehensive solution for managing your garden maintenance needs efficiently. From scheduling sessions with gardeners to tracking session progress, this project simplifies the process of keeping your garden in top shape.

## Key Features

- **Dynamic Homepage:** Easily access essential information on a single page.
- **Session Scheduling:** Seamlessly schedule sessions with gardeners, choosing from available dates and time ranges.
- **Dynamic Session Management:** Flexible time and date range selection for sessions.
- **Gardener Selection:** Choose your preferred gardener for each session.
- **Industry-standard Code Quality:** Utilization of top-notch code conventions, code splitting, and TypeScript in backend development.
- **Email Notifications:** Automated email notifications for session setup and invoicing.
- **Gardener Dashboard:** Dynamic dashboard for gardeners to access customer information and provide online services with customizable remedies.
- **Customer Dashboard:** Customers can track session progress, view procedures, and session details from a dynamic dashboard.
- **Session Tracking:** Track session status using a unique tracking ID directly from the homepage.
- **User Authentication:** Dynamic authentication system allowing user sign-in, sign-up, password recovery, and email verification (for gardeners).

## Getting Started

### Prerequisites
Before getting started, make sure you have the following installed:
- Node.js (globally)
- Prisma CLI
- TypeScript (optional)

### Installation

1. **Clone The Project:** `git clone <project-url>`

2. **Install Frontend:**

    ```
    cd clean-my-garden
    npm install
    npm start
    ```

3. **Install Backend:**

    ```
    cd api
    npm install
    ```


4. **Setup Database:**
- Create a `.env` file
- Create a PostgreSQL Database (or use Railway)
- Copy the database URL into the `.env` file

5. **Install Prisma:**

    ```
    npm install -g prisma
    npx prisma generate
    npx prisma migrate dev
    ```


6. **Setup Google App Password (For Email Notification):**
- Go to Google Account settings
- Navigate to Security > 2-Step Verification > App passwords
- Generate a password for your project and paste it into the `.env` file as EMAIL_PASS

7. **Setup Cloudinary to Upload Image:**
- Create a Cloudinary Account
- Copy credentials (Cloud name, API key, API secret) and paste them into the `.env` file

8. **Start Backend:**

    ```
    npm run dev
    ```

Follow these steps to set up Clean My Garden and enjoy hassle-free garden maintenance!
