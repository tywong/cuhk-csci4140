# React JS Lab for CSCI 4140

What is so good about React JS?  It is a design that separates the state of the application from the UI components.

The following image best describes such a key feature:

![Source: https://medium.com/@arqex/react-the-simple-way-cabdf1f42f12#.y34mthx9m](images/react.png)

In this lab, you will go through steps in transforming an HTML page into an React JS application. Our target is to write a web-based Othello game, which is already implemented in [our course repo](https://github.com/tywong/cuhk-csci4140/tree/master/react-othello).

1. First, let us have a taste on a React JS project. You are going to set up a docker container that is able to compile JS files, and run the React project.

2. Given a HTML page representing the game layout, we identify and decompose it into small components. We will also identify what the game state is.

3. For each component, we package it into a *React Component*. We will construct our first React component, and we will introduce what the JSX code is, which is extensively used by React JS.

4. Further, we construct the entire game layout using the layout that we decomposed.

5. Next, we hard code the game state so as to see if the correct game layout is displayed accordingly.

6. Last, we introduce the change of the game state through mouse click event.

7. By the way, we did not talk about the game logic. Well, it depends on the time in the lab. Probably, we will skip the implementation of the game logic.

---
By [Dr. WONG Tsz Yeung](http://www.cse.cuhk.edu.hk/~tywong)
