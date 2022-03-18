# Organic

A template to showcase products with three different themes.

![enter image description here](https://raw.githubusercontent.com/farhad-gh-dev/organic/master/src/assets/images/screenshot.png)

## Tech stack

React JS (Typescript) - Redux - Redux Thunk - Sass

## Development and Build

In case of any use of this project, contribution to my [github account](https://github.com/farhad-gh-dev) is needed. To use this template clone this repository or download it, then run **npm install** to install project packages.

    git clone https://github.com/farhad-gh-dev/organic.git
    npm install

\-
Now in the project directory, you can run the app in the development mode.
Open [http://localhost:3000](http://localhost:3000/) to view it in the browser.

      npm run start

\-
You can also build the app for production mode, It correctly bundles React in production mode and optimizes the build for the best performance.

      npm run build

Now you can deploy this project!

## Project Structure

    .
    ├── design
    ├── public                  # Html, favicon and manifist related files
    ├── src                     # Source files
    ├── .gitignore
    ├── README.md
    ├── package-lock.json
    ├── package.json
    └── tsconfig.json

src folder structure:

    ├─── src
        ├─── assets
        │   ├─── images
        │   ├─── logo
        │   └─── videos
        ├─── components
        │   ├─── Carousel
        │   │   └─── ItemCard
        │   ├─── Graphics
        │   ├─── Header
        │   ├─── Loading
        │   ├─── Navbar
        │   │   ├─── NavbarItems
        │   │   │   └─── NavbarItem
        │   │   └─── SearchBox
        │   └─── VideoPanel
        ├─── redux
        └─── style
            └─── fonts

- Style Folder contains all global styles, style resets, fonts, style variables, mixins and animations
- In Components folder each component has a tsx and a scss (style) file
