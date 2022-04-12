# WHRDL Word Guessing Game

This is a mobile app built with [Expo](https://docs.expo.dev/) and [React Native](https://reactnative.dev/).  It employs React functional Components, React hooks, React router, and React Native built-in components.

WHRDL is a riff on a popular word-guessing game.  The player has up to six tries to guess a five-letter word correctly.  With each incorrect guess, hints are provided in the form of color-coded letter cards and keyboard keys.

## The app consists of six total Components:

* **App**, the root component 
* **Header**, **Board**, and **Keyboard** 
   

## The site is designed to be responsive to screen size (desktop vs mobile) in three ways:
   * **`CSS flexbox styling`** adapts the layout to display eye-appealing flow in any screen size, orientation, or aspect ratio.  You can test this by adjusting your browser window to any size, or by visiting the site on mobile side-by-side with desktop.
   * **`CSS media queries`**  change the CSS properties of some elements based on screen size
   * **`A custom React hook`**  "listens" for the size of the browser window and conditionally renders elements based on that size.  This hook mimics the classic media query, but is written in JavaScript, making it more powerful and able to render items conditionally based on screen size match.

All links are styled to flow with the theme of the site (default blue color and underline are removed); all links behave consistently with one another, with styling that responds to mouse hover, becomes bold when clicked (active), and returns to the original state when not active.  There is one 'Easter Egg' link:  clicking on my name in the center of the home page takes the user to the About page.
