# JSX Classwork

## Objective:

Practice writing basic JSX code and rendering it in a React app.

---

## Step 1: Create a New Component

1. Create a new file called **WelcomeMessage.jsx**.
2. Inside this file, write a functional component called **WelcomeMessage**.
3. The component should return a `<div>` that contains:
   - A `<h1>` element that displays the message: **"Hello, World!"**
   - A `<p>` element that displays the message: **"Welcome to learning JSX!"**

---

## Step 2: Render the Component in `App.jsx`

1. Open the **App.jsx** file.
2. Import the **WelcomeMessage** component at the top of the file.
3. Inside the `App` component's return statement, render the `WelcomeMessage` component.

---

## Step 3: Run the Application

1. Run the app in your development environment.
2. You should see the **"Hello, World!"** message along with **"Welcome to learning JSX!"** displayed in your browser.

---

---

# JSX Homework

---

### Step 1: Create a Header Component

1. Create a new file called **Header.jsx**.
2. Inside this file, create a functional component named **Header**.
3. The **Header** component should return a `<header>` element with the following:
   - A `<h1>` element with the text **"Welcome to My Website!"**
   - A `<nav>` element containing three links (`<a>`) with the text:
     - **"Home"**
     - **"About"**
     - **"Contact"**

---

### Step 2: Create a Footer Component

1. Create a new file called **Footer.jsx**.
2. Inside this file, create a functional component named **Footer**.
3. The **Footer** component should return a `<footer>` element with:
   - A `<p>` containing the text **"© 2024 My Website"**.

---

### Step 3: Create a MainContent Component

1. Create a new file called **MainContent.jsx**.
2. Inside this file, create a functional component named **MainContent**.
3. The **MainContent** component should return a `<main>` element containing:
   - A `<h2>` element with the text **"Main Content"**.
   - A `<p>` element with any text of your choice.

---

### Step 4: Render Components Inside App.jsx

1. In your **App.jsx** file, import the **Header, MainContent, and Footer** components:

   ```jsx
   import Header from "./Header";
   import MainContent from "./MainContent";
   import Footer from "./Footer";
   ```

2. Inside the **App** component's return statement, render the three components inside a single `<div>`, in the following order:

   - **Header**
   - **MainContent**
   - **Footer**

3. Your **App.jsx** file should look like this:

   ```jsx
   function App() {
     return (
       <div>
         <Header />
         <MainContent />
         <Footer />
       </div>
     );
   }

   export default App;
   ```

---

### Expected Output:

When you run your React app, you should see the following structure in your browser:

```
Welcome to My Website!

Home   About   Contact

Main Content
(Your custom paragraph text)

© 2024 My Website
```

---

### Bonus Challenge:

Try adding some CSS styles to improve the layout and appearance of your components.

---
