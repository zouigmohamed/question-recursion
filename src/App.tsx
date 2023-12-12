import Questions from "./components/Questions";

export default function App() {
  return (
    <div className="mt-2">
      <h2 className="text-center w-1/2 mx-auto border-2 p-2 border-slate-400 rounded-lg">
        Recursion is a programming concept where a function calls itself in its
        own definition. In other words, a function that uses recursion solves a
        problem by solving a smaller instance of the same problem.
        so in this project I have tried to use this functionality using an array of question with sub-questions, 
        the recursive component called himself again whenever the question has a sub-question. I have also tried to use state functionality to show and hide the answer 
      </h2>
      <div className="text-lg w-full mx-auto md:w-2/3 lg:1/4">
        <Questions />
      </div>
    </div>
  );
}
