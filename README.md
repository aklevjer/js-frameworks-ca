# JavaScript Frameworks CA - DirectShop

![Screen shot of the e-commerce site](https://sinnsykt.net/screenshots/directshop-screen.png)

An e-commerce site developed as the course assignment in the JavaScript Frameworks course at Noroff.

## Description

This project was developed as the course assignment in the JavaScript Frameworks course at Noroff. The task was to demonstrate knowledge of React by creating an e-commerce site using the framework.

Some features include the ability for users to browse, search, and view individual products. Users can also add and remove items from the cart, as well as complete the checkout process. Additionally, it features a contact form with validation.

**The site contains the following pages:**

- Home
- Product Details
- Checkout
- Checkout Success
- Contact

## Built With

- **React** for building the user interface.
- **React Router** for handling navigation and routing.
- **React Query** for managing asynchronous data fetching and state.
- **Zustand** for global state management.
- **React Hook Form** and **Yup** for form handling and validation.
- **Tailwind CSS** for utility-based styling and responsive design.
- **Vite** for bundling and development.

## Getting Started

### Installing

1. Clone the repository:

```bash
git clone git@github.com:aklevjer/js-frameworks-ca.git
```

2.  Install the dependencies:

```bash
npm install
```

### Setting Up Environment Variables

This project requires an environment variable to run the application. Create a `.env` file in the root directory of the project and add the following variable:

```
VITE_API_URL=
```

**To obtain and configure the API URL:**

1. Visit the [Noroff API documentation](https://docs.noroff.dev/docs/v2/basic/online-shop) to obtain the API URL.
2. Use this API URL as the value for `VITE_API_URL` in the `.env` file.

### Running

To run the app in development mode, use the following command:

```bash
npm run dev
```

To build the app for production, use the following command:

```bash
npm run build
```

## Project Commands

### Code Formatting and Linting

To format the code using Prettier:

```bash
npm run format
```

To lint the code using ESLint:

```bash
npm run lint
```

To fix linting issues using ESLint:

```bash
npm run lint-fix
```

## Live Site

The site is deployed on **Netlify**, and can be seen live [here](https://directshop.netlify.app).
