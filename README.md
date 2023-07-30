
The core classes, functions, and methods that will be necessary for the ecommerce webapp are as follows:

1. App.js: This is the entry point of the React application. It will contain the main component and handle routing.

2. Auth.js: This class will handle user authentication using Firebase. It will have methods for email and password sign in, sign up, sign out, and sign in with Google.

3. Database.js: This class will handle database operations using Firebase Firestore. It will have methods for retrieving and updating user details, order history, and product information.

4. Product.js: This class will represent a single product. It will have properties for the product name, image, details, price per unit, cost per unit, and quantity.

5. Cart.js: This class will handle the user's shopping cart. It will have methods for adding products to the cart, updating quantities, and removing products.

6. Order.js: This class will represent a single order. It will have properties for the order ID, user ID, products, total price, and order status.

7. OrderHistory.js: This class will handle the user's order history. It will have methods for retrieving and displaying the user's past orders.

8. ProductList.js: This class will display a list of products. It will fetch the product data from the database and render each product as a separate component.

9. ProductDetails.js: This class will display detailed information about a specific product. It will fetch the product data from the database and allow the user to select the quantity and add the product to the cart.

10. Navbar.js: This class will display the navigation bar at the top of the webapp. It will contain links to different pages and display the user's authentication status.

11. Footer.js: This class will display the footer at the bottom of the webapp. It will contain links to social media and other relevant information.

12. Routes.js: This file will define the routes for the webapp using React Router. It will map each route to the corresponding component.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
