# FSDI 108 – Class 1: Files to Update

Go through this list in order. For each file, open it in this project, copy ALL of it, and paste it over the same file in your project (or create the file if you don't have it). Every file has comments explaining the code.

## 0. Before you start

Check your Node version (it must be 22 or newer):

```
node -v
```

Install the packages for Class 1 (run in the VS Code terminal, inside your project folder):

```
npm uninstall bootstrap
npm install bootstrap@5 react-router-dom
```

## 1. Rename a folder

- [ ] Rename `src/dataServices` to `src/Services` (capital S)

## 2. Files to UPDATE (you already have these: replace their contents)

- [ ] `src/main.jsx`
- [ ] `src/index.css`
- [ ] `src/App.css`
- [ ] `src/App.jsx`
- [ ] `src/Services/dataService.js`
- [ ] `src/components/Navbar.jsx`
- [ ] `src/components/Footer.jsx`
- [ ] `src/components/Footer.css`
- [ ] `src/components/Product.jsx`
- [ ] `src/components/Product.css`
- [ ] `src/components/QuantityPicker.jsx`
- [ ] `src/pages/Catalog.jsx`
- [ ] `src/pages/Catalog.css`

## 3. Files to CREATE (new files: create them, then paste)

- [ ] `src/pages/Home.jsx`
- [ ] `src/pages/About.jsx`
- [ ] `src/pages/Contact.jsx`
- [ ] `src/pages/NotFound.jsx`

## 4. Run it

```
npm run dev
```

Check that these pages all work:

- [ ] `/` shows the Home page
- [ ] `/catalog` shows 3 product cards
- [ ] `/about` shows the About page
- [ ] `/contact` shows the Contact page
- [ ] `/anything-else` shows the 404 page

If the page is white, press F12, open the Console tab, and read the first red error.
