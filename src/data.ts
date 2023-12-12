export const reactQuestions = [
  // Question 1
  {
    id: "1",
    key: "what-is-react",
    question: "What is ReactJS?",
    answer: "ReactJS is an open-source JavaScript library used for building user interfaces or UI components, particularly for single-page applications where UI updates are frequent.",
    isQuestion: true,
    subQuestions: [
      {
        id: "1.1",
        key: "when-was-react-created",
        question: "When was React created?",
        answer: "React was created by Jordan Walke, a software engineer at Facebook. It was first deployed on Facebook's newsfeed in 2011.",
        isQuestion: true,
      },
    ],
  },
  // Question 2
  {
    id: "2",
    key: "what-is-jsx",
    question: "What is JSX?",
    answer: "JSX (JavaScript XML) is a syntax extension for JavaScript, recommended by React. It allows you to write HTML elements and components in a syntax similar to XML or HTML in your JavaScript code.",
    isQuestion: true,
    subQuestions: [
      {
        id: "2.1",
        key: "why-use-jsx",
        question: "Why use JSX?",
        answer: "JSX offers a concise and familiar syntax for defining React elements, making it easier to understand and write React code. It also helps catch syntax errors during compilation.",
        isQuestion: true,
      },
    ],
  },
  // Question 3
  {
    id: "3",
    key: "what-are-react-components",
    question: "What are React Components?",
    answer: "React components are reusable, self-contained building blocks that define how UI elements should appear and behave. Components can be either functional or class-based.",
    isQuestion: true,
    subQuestions: [
      {
        id: "3.1",
        key: "functional-vs-class-components",
        question: "Difference between functional and class components?",
        answer: "Functional components are simple JavaScript functions that take props as arguments and return React elements. Class components are ES6 classes that extend React.Component, allowing the use of state and lifecycle methods.",
        isQuestion: true,
        subQuestions: [
          {
            id: "3.1.1",
            key: "when-to-use-functional-components",
            question: "When to use functional components?",
            answer: "Functional components are preferred for simpler components and are ideal when you don't need to manage state or lifecycle methods. They are also easier to test and understand.",
            isQuestion: true,
          },
        ],
      },
    ],
  },
  
  // Question 4
  {
    id: "4",
    key: "what-is-state",
    question: "What is State in React?",
    answer: "State is an object that represents the parts of the application that can change. It is managed within a component and can be updated using the `setState` method.",
    isQuestion: true,
    subQuestions: [
      {
        id: "4.1",
        key: "how-to-update-state",
        question: "How to update state in React?",
        answer: "State can be updated in React by using the `setState` method. This method takes an object or a function that returns an object, allowing you to update the state based on its previous value.",
        isQuestion: true,
      },
    ],
  },
  // Question 5
  {
    id: "5",
    key: "explain-props",
    question: "Explain the concept of Props in React.",
    answer: "Props (short for properties) are inputs that a React component can receive. They are immutable and allow the passing of data from a parent component to its child components.",
    isQuestion: true,
    subQuestions: [
      {
        id: "5.1",
        key: "passing-props",
        question: "How to pass props between components?",
        answer: "Props are passed between components by including them as attributes in the JSX tag when the component is used. The parent component passes data to the child component, which can then access it through props.",
        isQuestion: true,
      },
    ],
  },
  // Question 6
  {
    id: "6",
    key: "what-are-react-hooks",
    question: "What are React Hooks?",
    answer: "Hooks are functions that allow you to use state and other React features in functional components. Some common hooks include useState, useEffect, useContext, etc.",
    isQuestion: true,
    subQuestions: [
      {
        id: "6.1",
        key: "usestate-hook",
        question: "Explain the useState hook.",
        answer: "The useState hook is used to add state to functional components. It returns an array with two elements: the current state value and a function that lets you update it.",
        isQuestion: true,
      },
    ],
  },
  // Question 7
  {
    id: "7",
    key: "what-is-virtual-dom",
    question: "What is the Virtual DOM in React?",
    answer: "The Virtual DOM is a lightweight copy of the actual DOM. React uses it to improve performance by updating only the parts of the DOM that have changed, rather than re-rendering the entire DOM.",
    isQuestion: true,
    subQuestions: [
      {
        id: "7.1",
        key: "how-does-virtual-dom-work",
        question: "How does the Virtual DOM work?",
        answer: "React's Virtual DOM works by creating a virtual representation of the actual DOM. When state changes occur, React compares the virtual DOM with the previous version and calculates the most efficient way to update the actual DOM.",
        isQuestion: true,
      },
    ],
  },
  // Question 8
  {
    id: "8",
    key: "explain-lifecycle-methods",
    question: "Explain the Lifecycle Methods in React.",
    answer: "Lifecycle methods are methods that get called at different stages of a component's life. They include componentDidMount, componentDidUpdate, componentWillUnmount, etc.",
    isQuestion: true,
    subQuestions: [
      {
        id: "8.1",
        key: "componentdidmount",
        question: "What is componentDidMount?",
        answer: "componentDidMount is a lifecycle method that is called after a component has been rendered to the DOM. It is commonly used for initiating API calls or setting up subscriptions.",
        isQuestion: true,
      },
    ],
  },
  // Question 9
  {
    id: "9",
    key: "what-is-react-router",
    question: "What is React Router?",
    answer: "React Router is a standard library for routing in React applications. It enables navigation and rendering of components based on the URL.",
    isQuestion: true,
    subQuestions: [
      {
        id: "9.1",
        key: "how-to-use-react-router",
        question: "How to use React Router?",
        answer: "React Router can be used by installing it as a dependency, defining routes using its components (BrowserRouter, Route, Switch), and then rendering these components based on the application's URL.",
        isQuestion: true,
      },
    ],
  },
  // Question 10
  {
    id: "10",
    key: "what-is-redux",
    question: "What is Redux?",
    answer: "Redux is a state management library for JavaScript applications. It is often used with React to manage the state of an entire application in a predictable way.",
    isQuestion: true,
    subQuestions: [
      {
        id: "10.1",
        key: "core-principles-of-redux",
        question: "What are the core principles of Redux?",
        answer: "The core principles of Redux include a single source of truth (the store), state is read-only, changes are made with pure functions (reducers), and actions describe changes.",
        isQuestion: true,
      },
    ],
  },
  // Question 11
  {
    id: "11",
    key: "what-are-higher-order-components",
    question: "What are Higher-Order Components (HOCs) in React?",
    answer: "HOCs are functions that take a component and return a new component with enhanced functionality. They are used for code reuse, logic abstraction, and adding additional features to components.",
    isQuestion: true,
    subQuestions: [
      {
        id: "11.1",
        key: "how-to-create-a-hoc",
        question: "How to create a Higher-Order Component?",
        answer: "A Higher-Order Component is created by taking an existing component and returning a new component with additional props or behavior. This is typically achieved through function composition.",
        isQuestion: true,
      },
    ],
  },
  {
    id: "12",
    key: "what-are-react-hooks",
    question: "What are React Hooks?",
    answer: "Hooks are functions that allow you to use state and other React features in functional components. Some common hooks include useState, useEffect, useContext, etc.",
    isQuestion: true,
    subQuestions: [
      {
        id: "12.1",
        key: "usestate-hook",
        question: "Explain the useState hook.",
        answer: "The useState hook is used to add state to functional components. It returns an array with two elements: the current state value and a function that lets you update it.",
        isQuestion: true,
      },
    ],
  },
  // Question 13
  {
    id: "13",
    key: "what-is-virtual-dom",
    question: "What is the Virtual DOM in React?",
    answer: "The Virtual DOM is a lightweight copy of the actual DOM. React uses it to improve performance by updating only the parts of the DOM that have changed, rather than re-rendering the entire DOM.",
    isQuestion: true,
    subQuestions: [
      {
        id: "13.1",
        key: "how-does-virtual-dom-work",
        question: "How does the Virtual DOM work?",
        answer: "React's Virtual DOM works by creating a virtual representation of the actual DOM. When state changes occur, React compares the virtual DOM with the previous version and calculates the most efficient way to update the actual DOM.",
        isQuestion: true,
      },
    ],
  },
  // Question 14
  {
    id: "14",
    key: "explain-lifecycle-methods",
    question: "Explain the Lifecycle Methods in React.",
    answer: "Lifecycle methods are methods that get called at different stages of a component's life. They include componentDidMount, componentDidUpdate, componentWillUnmount, etc.",
    isQuestion: true,
    subQuestions: [
      {
        id: "14.1",
        key: "componentdidmount",
        question: "What is componentDidMount?",
        answer: "componentDidMount is a lifecycle method that is called after a component has been rendered to the DOM. It is commonly used for initiating API calls or setting up subscriptions.",
        isQuestion: true,
      },
    ],
  },
  // Question 15
  {
    id: "15",
    key: "what-is-react-router",
    question: "What is React Router?",
    answer: "React Router is a standard library for routing in React applications. It enables navigation and rendering of components based on the URL.",
    isQuestion: true,
    subQuestions: [
      {
        id: "15.1",
        key: "how-to-use-react-router",
        question: "How to use React Router?",
        answer: "React Router can be used by installing it as a dependency, defining routes using its components (BrowserRouter, Route, Switch), and then rendering these components based on the application's URL.",
        isQuestion: true,
      },
    ],
  },
];
