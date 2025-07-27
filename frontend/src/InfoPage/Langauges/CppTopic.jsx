import React from "react";

const CppIntroSection = () => {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-teal-700 mb-8">🔰 C++ Programming – Introduction & Basics</h1>

      {/* Theory Card */}
      <div className="bg-white light:bg-gray-900 rounded-2xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">📘 What is C++?</h2>
        <p className="text-lg leading-relaxed">
          C++ is a powerful, high-performance programming language that supports both procedural and object-oriented paradigms. 
          Developed by Bjarne Stroustrup as an extension of the C language, it adds features like classes, inheritance, and polymorphism.
        </p>
        <p className="mt-4 text-lg">
          C++ is widely used in system/software development, game development, competitive programming, and real-time systems due to its speed and control over hardware.
        </p>
      </div>

      {/* Program Structure Card */}
      <div className="bg-white light:bg-gray-900 rounded-2xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">🧱 Structure of a C++ Program</h2>
        <ul className="list-disc ml-6 text-lg">
          <li><strong>Preprocessor Directives</strong> – e.g., <code>#include &lt;iostream&gt;</code></li>
          <li><strong>Namespace</strong> – to avoid naming conflicts (like <code>using namespace std;</code>)</li>
          <li><strong>Main Function</strong> – program execution starts here</li>
          <li><strong>Statements & Semicolons</strong> – every statement ends with a <code>;</code></li>
          <li><strong>Braces</strong> – code blocks are wrapped in <code>{ }</code></li>
        </ul>
      </div>

      {/* Code Example Card */}
      <div className="bg-gray-100 light:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">🖥️ Hello World Example</h2>
        <pre className="bg-black text-green-300 p-4 rounded-md overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`}
        </pre>
        <p className="mt-4 text-lg text-gray-700 light:text-gray-300">
          This simple program demonstrates the basic syntax of C++, including input/output, namespace usage, and function structure.
        </p>
      </div>

      {/* Tips & Tricks Card */}
      <div className="bg-white light:bg-gray-900 rounded-2xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">💡 Tips & Tricks</h2>
        <ul className="list-disc ml-6 text-lg">
          <li>Use <code>std::</code> prefix if not using <code>using namespace std;</code></li>
          <li><code>endl</code> moves to the next line and flushes the output buffer</li>
          <li>Always end <code>main()</code> with <code>return 0;</code> to indicate successful execution</li>
        </ul>
      </div>

      {/* Interview Questions Card */}
      <div className="bg-white light:bg-gray-900 rounded-2xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">🎯 Interview Questions</h2>
        <ul className="list-decimal ml-6 text-lg">
          <li>What are the main features of C++?</li>
          <li>How is C++ different from C?</li>
          <li>Explain the purpose of <code>using namespace std;</code></li>
          <li>What happens if you omit <code>return 0;</code> in main?</li>
          <li>What is the role of <code>#include &lt;iostream&gt;</code>?</li>
        </ul>
      </div>

      {/* Conclusion Card */}
      <div className=" text-white rounded-2xl shadow-lg p-6 mb-12">
        <h2 className="text-2xl font-semibold mb-2">✅ Conclusion</h2>
        <p className="text-lg">
          C++ combines the power of low-level memory control with the elegance of object-oriented programming. 
          Mastering its basics lays a strong foundation for advanced topics like OOP, STL, templates, and competitive coding.
        </p>
      </div>

      {/* Conditional Statements */}
      <section className="bg-white light:bg-gray-800 shadow-lg rounded-2xl p-6 mb-6">
        <h2 className="text-2xl font-semibold text-teal-600 mb-2">✅ Conditional Statements</h2>
        <p className="text-lg leading-relaxed mb-4">
          Conditional statements allow the program to execute certain blocks of code based on conditions.
        </p>
        <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
{`int age = 18;
if (age >= 18) {
    cout << "Eligible to vote";
} else {
    cout << "Not eligible";
}`}
        </pre>
      {/* Theory Card */}
      <div className="bg-white light:bg-gray-900 shadow-md rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-semibold text-teal-600 mb-3">📘 Theory</h2>
        <p className="text-lg leading-relaxed mb-4">
          In C++, <strong>variables</strong> are used to store data values that can be manipulated during program execution. A variable must be declared with a specific data type which defines the kind of data it can store. 
          C++ supports a wide range of <strong>data types</strong> including <code>int</code>, <code>float</code>, <code>double</code>, <code>char</code>, and <code>bool</code>.
        </p>
        <p className="text-lg leading-relaxed">
          <strong>Operators</strong> are symbols used to perform operations on variables and values. These include:
          <ul className="list-disc pl-6 mt-2">
            <li>Arithmetic Operators: <code>+ - * / %</code></li>
            <li>Relational Operators: <code>== != &lt; &gt; &lt;= &gt;=</code></li>
            <li>Logical Operators: <code>&& || !</code></li>
            <li>Assignment Operators: <code>= += -= *= /=</code></li>
          </ul>
        </p>
      </div>

      {/* Code Example Card */}
      <div className="bg-white light:bg-gray-900 shadow-md rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-semibold text-teal-600 mb-3">💻 Code Example</h2>
        <pre className="bg-gray-100 light:bg-gray-800 p-4 rounded-md overflow-auto text-sm">
{`#include <iostream>
using namespace std;

int main() {
    int a = 10, b = 3;
    float c = 5.5;
    char ch = 'X';
    bool flag = true;

    cout << "a + b = " << (a + b) << endl;
    cout << "a % b = " << (a % b) << endl;
    cout << "c = " << c << endl;
    cout << "Character: " << ch << endl;
    cout << "Boolean: " << flag << endl;

    return 0;
}`}
        </pre>
      </div>

      {/* Tips & Tricks Card */}
      <div className="bg-white light:bg-gray-900 shadow-md rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-semibold text-teal-600 mb-3">⚡ Tips & Tricks</h2>
        <ul className="list-disc pl-6 text-lg leading-relaxed">
          <li>Always initialize variables before use to avoid garbage values.</li>
          <li>Use <code>const</code> to declare constants that shouldn't change.</li>
          <li>Prefer <code>double</code> over <code>float</code> for higher precision calculations.</li>
          <li>Use meaningful variable names to improve code readability.</li>
        </ul>
      </div>

      {/* Interview Questions Card */}
      <div className="bg-white light:bg-gray-900 shadow-md rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-semibold text-teal-600 mb-3">🎯 Interview Questions</h2>
        <ol className="list-decimal pl-6 text-lg leading-relaxed">
          <li>What are the basic data types in C++?</li>
          <li>How do arithmetic and relational operators differ?</li>
          <li>What is the difference between <code>float</code> and <code>double</code>?</li>
          <li>How can you define a constant variable in C++?</li>
          <li>What is the purpose of logical operators?</li>
        </ol>
      </div>

      {/* Conclusion Card */}
      <div className="bg-white light:bg-gray-900 shadow-md rounded-xl p-6">
        <h2 className="text-2xl font-semibold text-teal-600 mb-3">📝 Conclusion</h2>
        <p className="text-lg leading-relaxed">
          Mastering variables, data types, and operators is the first step to becoming proficient in C++. They form the building blocks for all programming logic. 
          Understanding how to store, manipulate, and compare data efficiently is essential for solving complex problems in the real world.
        </p>
      </div>
    </section>
 
      {/* Loops */}
      <section className="bg-white light:bg-gray-800 shadow-lg rounded-2xl p-6 mb-6">
        <h2 className="text-2xl font-semibold text-teal-600 mb-2">🔁 Loops in C++</h2>
        <p className="text-lg mb-4">Loops are used to execute a block of code repeatedly.</p>
        <ul className="list-disc pl-6 text-lg mb-4">
          <li><strong>for loop</strong> – Used when the number of iterations is known</li>
          <li><strong>while loop</strong> – Used when the condition is checked before loop execution</li>
          <li><strong>do-while loop</strong> – Executes at least once before checking condition</li>
        </ul>
        <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto mb-4">
{`for (int i = 1; i <= 5; i++) {
    cout << i << " ";
}
// Output: 1 2 3 4 5`}
        </pre>
        <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto mb-4">
{`int i = 1;
while (i <= 5) {
    cout << i << " ";
    i++;
}`}
        </pre>
        <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
{`int i = 1;
do {
    cout << i << " ";
    i++;
} while (i <= 5);`}
        </pre>
      </section>

      {/* Switch Statement */}
      <section className="bg-white light:bg-gray-800 shadow-lg rounded-2xl p-6 mb-6">
        <h2 className="text-2xl font-semibold text-teal-600 mb-2">🔘 Switch Statement</h2>
        <p className="text-lg leading-relaxed mb-4">
          The switch statement is used when you need to compare the same variable with multiple values.
        </p>
        <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
{`int day = 3;
switch (day) {
  case 1: cout << "Monday"; break;
  case 2: cout << "Tuesday"; break;
  case 3: cout << "Wednesday"; break;
  default: cout << "Invalid";
}
// Output: Wednesday`}
        </pre>
      </section>

      {/* Tips Card */}
      <section className="bg-gradient-to-r from-teal-100 to-teal-200 light:from-gray-700 light:to-gray-800 rounded-2xl p-6 shadow mb-6">
        <h3 className="text-xl font-semibold text-teal-700 mb-2">💡 Tips & Tricks</h3>
        <ul className="list-disc pl-6 text-lg">
          <li>Use <code>break</code> inside switch to prevent fall-through.</li>
          <li>For simple conditions, use ternary operators like: <code>condition ? expr1 : expr2</code></li>
          <li>Avoid infinite loops by updating loop variables correctly.</li>
        </ul>
      </section>

      {/* Practice Questions Card */}
      <section className="bg-gradient-to-r from-pink-100 to-teal-100 light:from-gray-700 light:to-gray-800 rounded-2xl p-6 shadow mb-6">
        <h3 className="text-xl font-semibold text-teal-700 mb-2">📝 Practice Questions</h3>
        <ul className="list-decimal pl-6 text-lg space-y-2">
          <li>Write a program to check if a number is even or odd.</li>
          <li>Print all even numbers between 1 and 50 using a loop.</li>
          <li>Write a program to implement a simple calculator using switch-case.</li>
          <li>Write a program to print the multiplication table of a number using a loop.</li>
        </ul>
      </section>

      {/* Interview Questions */}
      <section className="bg-white light:bg-gray-800 shadow-lg rounded-2xl p-6 mb-6">
        <h3 className="text-xl font-semibold text-teal-600 mb-2">📌 Interview Questions</h3>
        <ul className="list-disc pl-6 text-lg space-y-2">
          <li>What's the difference between while and do-while loops?</li>
          <li>How does a switch statement work in C++?</li>
          <li>When would you use a ternary operator over if-else?</li>
        </ul>
      </section>

      {/* Conclusion */}
      <section className="bg-teal-100 light:bg-gray-900 rounded-2xl p-6 shadow-lg">
        <h3 className="text-xl font-semibold text-teal-700 mb-2">🔚 Conclusion</h3>
        <p className="text-lg">
          Understanding control flow is key to writing logical and structured programs in C++. Practice different
          scenarios using loops and conditions to build strong logic skills.
        </p>
      </section>

// File: CppFunctionsArrays.jsx
      {/* 📘 Theory */}
      <div className="bg-white light:bg-gray-900 p-6 rounded-2xl shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">📘 Theory</h2>
        <p className="mb-3 text-lg">
          Functions in C++ allow you to break your program into smaller, reusable parts. There are two main types: 
          <strong> built-in functions</strong> (like <code>cin</code>, <code>sqrt()</code>, etc.) and <strong>user-defined functions</strong> (which you write).
        </p>
        <p className="mb-3 text-lg">
          Arrays in C++ are used to store multiple values of the same type in contiguous memory locations. C++ supports single-dimensional, multi-dimensional, and character arrays.
        </p>
      </div>

      {/* 💻 Code Examples */}
      <div className="bg-white light:bg-gray-900 p-6 rounded-2xl shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">💻 Code Examples</h2>
        
        <h3 className="text-xl font-medium text-teal-500">➡️ User-defined Function</h3>
        <pre className="bg-gray-100 light:bg-gray-800 p-4 rounded-md overflow-x-auto mb-4">
{`#include<iostream>
using namespace std;

// Function declaration
int add(int a, int b) {
    return a + b;
}

int main() {
    int result = add(5, 7);
    cout << "Sum is: " << result << endl;
    return 0;
}`}
        </pre>

        <h3 className="text-xl font-medium text-teal-500">➡️ Array Example</h3>
        <pre className="bg-gray-100 light:bg-gray-800 p-4 rounded-md overflow-x-auto">
{`#include<iostream>
using namespace std;

int main() {
    int marks[5] = {90, 85, 78, 92, 88};
    for(int i = 0; i < 5; i++) {
        cout << "Mark " << i+1 << ": " << marks[i] << endl;
    }
    return 0;
}`}
        </pre>
      </div>

      {/* 💡 Tips and Tricks */}
      <div className="bg-white light:bg-gray-900 p-6 rounded-2xl shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">💡 Tips & Tricks</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg">
          <li>Always declare a function before main or use function prototypes.</li>
          <li>Arrays are 0-indexed in C++, i.e., the first element is at index 0.</li>
          <li>Pass arrays to functions using pointers or directly by reference.</li>
          <li>Use `const` keyword for read-only arrays passed to functions.</li>
        </ul>
      </div>

      {/* ❓ Interview Questions */}
      <div className="bg-white light:bg-gray-900 p-6 rounded-2xl shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">❓ Interview Questions</h2>
        <ul className="list-decimal pl-5 space-y-2 text-lg">
          <li>What is the difference between call by value and call by reference?</li>
          <li>How are arrays stored in memory?</li>
          <li>How do you pass an array to a function in C++?</li>
          <li>What are inline functions?</li>
          <li>Explain recursion and give an example.</li>
        </ul>
      </div>

      {/* 📌 Conclusion */}
      <div className="bg-white light:bg-gray-900 p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">📌 Conclusion</h2>
        <p className="text-lg">
          Functions and arrays are foundational concepts in C++. They allow modular code development and efficient data handling. Mastering them is key for solving real-world problems and clearing coding interviews.
        </p>
      </div>
  <section className="mb-12">
        <h2 className="text-3xl font-bold text-teal-700 mb-4">🔚 Conclusion</h2>
        <div className="bg-white light:bg-gray-800 shadow-md rounded-xl p-6 mb-6">
          <p className="text-lg leading-relaxed text-gray-800 light:text-gray-100">
            Congratulations! You’ve covered the fundamentals of C++ — from variables and control flow to functions and OOP. With a strong foundation in syntax and logic, you're now equipped to dive deeper into advanced concepts, competitive programming, and real-world development.
          </p>
          <p className="text-lg mt-4 text-gray-800 light:text-gray-100">
            Keep practicing consistently and explore real-world projects or open-source contributions to solidify your understanding. Remember: mastering C++ takes patience and persistence!
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-teal-700 mb-4">🚀 Advanced C++ Topics (Quick Glance)</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "STL (Standard Template Library)",
              desc: "Includes containers like vector, map, set, stack, and algorithms like sort, find, etc."
            },
            {
              title: "Templates",
              desc: "Enable generic programming – write functions or classes that work with any data type."
            },
            {
              title: "File Handling",
              desc: "Perform file input/output using `ifstream`, `ofstream`, and `fstream` classes."
            },
            {
              title: "Exception Handling",
              desc: "`try-catch-throw` mechanism to handle runtime errors gracefully."
            },
            {
              title: "Lambda Functions",
              desc: "Anonymous functions introduced in C++11 for inline use, often with STL algorithms."
            },
            {
              title: "Smart Pointers",
              desc: "Memory management tools like `unique_ptr`, `shared_ptr`, introduced in C++11."
            },
            {
              title: "Multithreading",
              desc: "Handle concurrency using `<thread>` library in C++11 and above."
            },
            {
              title: "Move Semantics & Rvalue References",
              desc: "Optimize performance by avoiding unnecessary copying of data."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white light:bg-gray-800 p-4 rounded-xl shadow-md">
              <h4 className="text-xl font-semibold text-teal-600 mb-2">{item.title}</h4>
              <p className="text-gray-700 light:text-gray-100">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-teal-700 mb-4">🎯 C++ Interview Questions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "What is the difference between class and struct in C++?",
            "Explain virtual functions and their use in polymorphism.",
            "What is the Rule of Three/Five in C++?",
            "How do you implement dynamic memory management in C++?",
            "What are smart pointers? Differentiate between shared_ptr and unique_ptr.",
            "What is the STL and how does it improve productivity?",
            "Explain the concept of function overloading and operator overloading.",
            "What is the use of `mutable` keyword in C++?",
            "How is memory allocated for virtual functions?",
            "What is RAII (Resource Acquisition Is Initialization)?"
          ].map((q, i) => (
            <div key={i} className="bg-white light:bg-gray-800 p-4 rounded-xl shadow-md">
              <h4 className="text-lg font-semibold text-teal-600 mb-2">Q{i + 1}.</h4>
              <p className="text-gray-700 light:text-gray-100">{q}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default CppIntroSection;
