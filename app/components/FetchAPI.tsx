import React from "react";

export default function FetchAPI() {
  const Abc = function (s) {
    return s.json();
  };
  const data = function (data) {
    console.log(data);
  };
  
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(Abc)
    .then(data)
    .catch((error) => {
      console.error("Error:", error);
    });
  return (
    <div className="flex flex-col space-y-5 w-full">
      <div className=" bg-white text-black text-2xl flex justify-center">
        Which of these 4 fetch API method is the easiest?
      </div>
      <div className="flex gap-5 ">
        <div className="flex justify-center w-6/12 bg-slate-500 p-10 items-center text-black text-lg">
          <div className="text-white">
            {`fetch('https://jsonplaceholder.typicode.com/todos/1')`}
            <p>{`.then((res) => res.json())`}</p>
            <p>{`.then((data) => {`}</p>
            <p>{`console.log(data);`}</p>
            <p>{` })`}</p>
          </div>
        </div>
        <div className="flex justify-center w-6/12 bg-slate-900 p-10 items-center  text-black text-lg">
          <div className="text-white">
            {`const Abc = (s) => s.json();`}
            <p>{`const data = (data) => {`}</p>
            <p>{`console.log(data);`}</p>
            <p>{`};`}</p>
            <p>{`fetch("https://jsonplaceholder.typicode.com/todos/1")`}</p>
            <p>{`.then(Abc)`}</p>
            <p>{`.then(data)`}</p>
            <p>{`.catch((error) => {`}</p>
            <p>{`console.error("Error:", error);`}</p>
            <p>{`});`}</p>
          </div>
        </div>
      </div>
      <div className="flex gap-5 ">
        <div className="flex justify-center w-6/12 space-y-4 bg-slate-600 p-10 items-center  text-black text-lg">
          <div className="text-white">
            {`function Abc(s) {`}
            <p>{`return s.json();`}</p>
            <p>{`}`}</p>
            <p>{`const data = (data) => {`}</p>
            <p>{`console.log(data);`}</p>
            <p>{`};`}</p>
            <p>{`fetch("https://jsonplaceholder.typicode.com/todos/1")`}</p>
            <p>{`.then(Abc)`}</p>
            <p>{`.then(data)`}</p>
            <p>{`.catch((error) => {`}</p>
            <p>{`console.error("Error:", error);`}</p>
            <p>{`});`}</p>
          </div>
        </div>
        <div className="flex justify-center w-6/12 bg-slate-800 p-10 items-center  text-black text-lg">
          <div className="text-white">
            {` const Abc = function (s) {`}
            <p>{`return s.json();`}</p>
            <p>{`};`}</p>
            <p>{` const data = function (data) {`}</p>
            <p>{` console.log(data);`}</p>
            <p>{`};`}</p>
        
            <p>{`fetch("https://jsonplaceholder.typicode.com/todos/1")`}</p>
            <p>{`.then(Abc)`}</p>
            <p>{`.then(function(data) {`}</p>
           
            <p>{`console.log(data);`}</p>
            <p>{`});`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
