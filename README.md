# Google Analytics Integration with Next.js (v14.1.2)

This repository demonstrates how to integrate Google Analytics into a Next.js (v14.1.2) project. The guide includes steps to set up Google Analytics, obtain a Measurement ID, and track user activity in your application.

## Live Demo

[**Google Analytics Demo Website**](https://google-analytics-arfat.vercel.app/)

## Contact Me

If you have any questions, feel free to [connect with me](https://arfat.app/).

---

## Table of Contents

1. [Features](#features)
2. [Prerequisites](#prerequisites)
3. [Setup Instructions](#setup-instructions)
   - [Step 1: Clone the Repository](#step-1-clone-the-repository)
   - [Step 2: Install Dependencies](#step-2-install-dependencies)
   - [Step 3: Configure Environment Variables](#step-3-configure-environment-variables)
   - [Step 4: Start the Development Server](#step-4-start-the-development-server)
4. [Verifying the Integration](#verifying-the-integration)
5. [Deployment](#deployment)
6. [Additional Resources](#additional-resources)

---

## Features

- Easy integration of Google Analytics with Next.js.
- Environment-based configuration for the `Measurement ID`.
- Reusable setup for any Next.js project.

---

## Prerequisites

Before starting, ensure you have the following installed:

- **Node.js** (>=16.8.0)
- **npm** (>=7.0.0)
- A Google Analytics account with a `Measurement ID`.

---

## Setup Instructions

### Step 1: Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/<your-username>/google-analytics-nextjs.git
cd google-analytics-nextjs
```

### Step 2: Install Dependencies

Install the required dependencies by running:

```bash
npm install
```

### Step 3: Configure Environment Variables

Create a `.env` file in the root directory of the project and add the following:

```env
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=YOUR_MEASUREMENT_ID
```

Replace `YOUR_MEASUREMENT_ID` with your Google Analytics `Measurement ID`.

### Step 4: Start the Development Server

Run the following command to start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

---

## Verifying the Integration

To verify the Google Analytics integration:

1. Open your browser's developer tools (Right-click > Inspect > Console).
2. Enter the following in the console:

   ```javascript
   dataLayer;
   ```

   If Google Analytics is integrated correctly, you will see the `dataLayer` object populated with data.

3. Navigate to the **Network** tab in the developer tools.
4. Refresh the page and search for `gtag.js`, `analytics.js`, or `ga.js` to confirm the script is loaded.

---

## Deployment

To deploy the application, follow these steps:

1. Push your code to a repository (e.g., GitHub).
2. Deploy the project to a hosting service like [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).
3. After deployment, verify the Google Analytics setup using the [Real-Time Report](https://support.google.com/analytics/answer/11549684).

---

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Google Analytics Setup Guide](https://support.google.com/analytics/answer/9304153?hl=en)
- [Vercel Deployment Documentation](https://vercel.com/docs)

---

**Author**: [Arfatur Rahman](https://arfat.app/)  
Feel free to reach out for support or collaboration!

```

```
