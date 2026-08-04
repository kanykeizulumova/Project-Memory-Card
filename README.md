# RingsDB Memory Card Game 🃏

Welcome to the **RingsDB Memory Card Game**! This is a simple, interactive web game built with React, Zustand, and React Query, fetching real card data from the RingsDB API.
### This game is part of [The Odin Project React Course](https://www.theodinproject.com/paths/full-stack-javascript/courses/react)

## 🎯 The Goal of the Game
The objective is simple: **test your memory**. 
You will be presented with a set of 10 unique cards. To win, you must click on each of the 10 cards exactly **once**.

## 🎮 How to Play
1. **Click any card** to start the game. You will earn 1 point.
2. After every click, the cards will **shuffle** and change their positions randomly.
3. You must remember which cards you have already clicked.
4. **Click a new, unclicked card** to earn another point.
5. **Winning:** Successfully click all 10 unique cards without repeating a single one!
6. **Losing:** If you click on a card that you have *already* clicked during this round, it's Game Over!

## 🚀 Technologies Used
* **React** (UI and Components)
* **Zustand** (Global State Management for scores and clicked cards)
* **React Query / TanStack Query** (Data fetching and caching from the API)
* **RingsDB API** (Providing the card images and data)

Good luck, and have fun testing your memory! 🧠✨
