import React from "react";

const CppOOPsSection = () => {
  return (
    <div className="px-6 py-10 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-teal-700 mb-8">
        🧱 Object-Oriented Programming in C++
      </h1>

      {/* Theory Card */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-8 border-l-4 border-teal-500">
        <h2 className="text-2xl font-semibold text-teal-600 mb-2">📘 Theory: Object-Oriented Programming</h2>
        <p className="text-lg mb-3">
          C++ is an object-oriented programming language that allows developers to build modular, reusable, and scalable programs by organizing code around objects and classes.
        </p>
        <ul className="list-disc pl-6 text-base space-y-1">
          <li><strong>Class</strong>: A blueprint for objects.</li>
          <li><strong>Object</strong>: An instance of a class.</li>
          <li><strong>Encapsulation</strong>: Wrapping data and code together.</li>
          <li><strong>Abstraction</strong>: Hiding internal details.</li>
          <li><strong>Inheritance</strong>: Reusing code through parent-child relationships.</li>
          <li><strong>Polymorphism</strong>: Performing different tasks using the same function name (compile-time & runtime).</li>
        </ul>
      </div>

      {/* Code Example Card */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-8 border-l-4 border-blue-500">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">💻 Code Example: Class, Object & Inheritance</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`#include <iostream>
using namespace std;

// Base Class
class Animal {
public:
  void speak() {
    cout << "Animal speaks." << endl;
  }
};

// Derived Class
class Dog : public Animal {
public:
  void bark() {
    cout << "Dog barks!" << endl;
  }
};

int main() {
  Dog d;
  d.speak();  // Inherited
  d.bark();   // Own method
  return 0;
}`}
        </pre>
      </div>

      {/* Advanced OOPs Card */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-8 border-l-4 border-indigo-500">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-2">🧩 Advanced OOP Concepts</h2>
        <ul className="list-disc pl-6 text-base space-y-1">
          <li><strong>Constructor & Destructor</strong>: Special methods for object lifecycle.</li>
          <li><strong>Constructor Overloading</strong>: Multiple constructors with different signatures.</li>
          <li><strong>Operator Overloading</strong>: Custom behavior for operators like +, -, etc.</li>
          <li><strong>Virtual Functions</strong>: Enable runtime polymorphism using base class pointers.</li>
          <li><strong>Abstract Classes</strong>: Contain pure virtual functions; can't be instantiated.</li>
          <li><strong>Interfaces</strong>: Achieved using abstract classes and virtual functions.</li>
        </ul>
      </div>

      {/* Tips & Tricks Card */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-8 border-l-4 border-green-500">
        <h2 className="text-2xl font-semibold text-green-600 mb-2">💡 Tips & Tricks</h2>
        <ul className="list-disc pl-6 text-base space-y-1">
          <li>Use `virtual` keyword to ensure correct method resolution in inheritance.</li>
          <li>Always declare destructors `virtual` in base classes to avoid memory leaks.</li>
          <li>Use access specifiers (`public`, `private`, `protected`) properly to enforce encapsulation.</li>
          <li>Use initializer lists for efficient constructor initialization.</li>
        </ul>
      </div>

      {/* Interview Questions Card */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-8 border-l-4 border-yellow-500">
        <h2 className="text-2xl font-semibold text-yellow-600 mb-2">🧠 Common Interview Questions</h2>
        <ul className="list-decimal pl-6 text-base space-y-2">
          <li>What is the difference between compile-time and run-time polymorphism?</li>
          <li>Explain virtual functions and their usage in C++.</li>
          <li>How is abstraction different from encapsulation?</li>
          <li>What is a pure virtual function and how is it used?</li>
          <li>Can constructors be inherited in C++?</li>
        </ul>
      </div>

      {/* Conclusion Card */}
      <div className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-pink-500">
        <h2 className="text-2xl font-semibold text-pink-600 mb-2">✅ Conclusion</h2>
        <p className="text-lg">
          Mastering OOP in C++ is essential for developing complex and maintainable applications. Focus on real-world modeling using classes and objects, understand the power of polymorphism and inheritance, and leverage abstraction to keep your designs clean.
        </p>
      </div>
      <br /> 
      {/* change */}
      
      {/* Theory Card */}
      <div className="bg-white light:bg-gray-900 shadow-lg rounded-2xl p-6 mb-8 border-l-4 border-teal-500">
        <h2 className="text-2xl font-semibold mb-3 text-teal-600">📘 Theory</h2>
        <p className="mb-2">
          Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects", which contain data (fields) and code (methods).
        </p>
        <ul className="list-disc pl-6 space-y-1 text-base">
          <li><strong>Class</strong>: A blueprint for creating objects.</li>
          <li><strong>Object</strong>: An instance of a class.</li>
          <li><strong>Encapsulation</strong>: Binding data and methods together and hiding internal details.</li>
          <li><strong>Inheritance</strong>: One class can inherit from another to reuse code.</li>
          <li><strong>Polymorphism</strong>: Many forms — function overriding and overloading.</li>
          <li><strong>Abstraction</strong>: Showing essential details and hiding complexities.</li>
        </ul>
      </div>

      {/* Code Example Card */}
      <div className="bg-white light:bg-gray-900 shadow-lg rounded-2xl p-6 mb-8 border-l-4 border-teal-500">
        <h2 className="text-2xl font-semibold mb-3 text-teal-600">🧑‍💻 Code Example</h2>
        <pre className="bg-gray-100 light:bg-gray-800 p-4 rounded text-sm overflow-auto">
{`#include <iostream>
using namespace std;

// Base Class
class Animal {
public:
    void speak() {
        cout << "Animal speaks" << endl;
    }
};

// Derived Class
class Dog : public Animal {
public:
    void speak() {
        cout << "Dog barks" << endl;
    }
};

// Abstract Class
class Shape {
public:
    virtual void draw() = 0;  // pure virtual
};

// Derived class with polymorphism
class Circle : public Shape {
public:
    void draw() override {
        cout << "Drawing Circle" << endl;
    }
};

int main() {
    Dog d;
    d.speak(); // Overridden method

    Circle c;
    c.draw(); // Polymorphic call
    return 0;
}`}
        </pre>
      </div>

      {/* Tips & Tricks Card */}
      <div className="bg-white light:bg-gray-900 shadow-lg rounded-2xl p-6 mb-8 border-l-4 border-teal-500">
        <h2 className="text-2xl font-semibold mb-3 text-teal-600">💡 Tips & Tricks</h2>
        <ul className="list-disc pl-6 space-y-2 text-base">
          <li>Use <code>virtual</code> keyword to enable runtime polymorphism.</li>
          <li>Constructors can be overloaded for different initialization logic.</li>
          <li>Use access specifiers (<code>private</code>, <code>public</code>, <code>protected</code>) wisely.</li>
          <li>Destructor in base class should be virtual when using inheritance.</li>
          <li>Abstract classes are defined using pure virtual functions.</li>
        </ul>
      </div>

      {/* Interview Questions Card */}
      <div className="bg-white light:bg-gray-900 shadow-lg rounded-2xl p-6 mb-8 border-l-4 border-teal-500">
        <h2 className="text-2xl font-semibold mb-3 text-teal-600">🎯 Interview Questions</h2>
        <ul className="list-decimal pl-6 space-y-2 text-base">
          <li>What is the difference between compile-time and runtime polymorphism?</li>
          <li>What is a virtual function? Why is it important?</li>
          <li>How does C++ support multiple inheritance?</li>
          <li>What is the use of <code>this</code> pointer?</li>
          <li>Explain abstraction with an example in C++.</li>
        </ul>
      </div>

      {/* Conclusion Card */}
      <div className="bg-white light:bg-gray-900 shadow-lg rounded-2xl p-6 mb-4 border-l-4 border-teal-500">
        <h2 className="text-2xl font-semibold mb-3 text-teal-600">📌 Conclusion</h2>
        <p>
          OOP is the backbone of modern C++ development. Understanding key concepts like classes, inheritance, polymorphism, and abstraction enables developers to write reusable, scalable, and maintainable code. Practice by building small OOP-based projects such as bank systems, inventory management, or games to master these concepts.
        </p>
      </div>

    <div className="px-6 py-12 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-teal-700 mb-6">
        🚀 Advanced C++ Concepts
      </h1>

      {/* Templates and STL */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-6 border-l-4 border-teal-500">
        <h2 className="text-2xl font-semibold text-teal-600 mb-2">
          🧩 Templates and STL (Standard Template Library)
        </h2>
        <p className="text-lg mb-4">
          Templates in C++ allow you to write generic programs. STL provides
          powerful ready-to-use classes and functions like vectors, sets,
          maps, stacks, etc.
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-2">
{`// Function Template
template <typename T>
T maxValue(T a, T b) {
  return (a > b) ? a : b;
}

// STL Vector Example
#include <iostream>
#include <vector>
using namespace std;

int main() {
  vector<int> v = {10, 20, 30};
  v.push_back(40);
  for (int x : v) cout << x << " ";
  return 0;
}`}
        </pre>
      </div>

      {/* Exception Handling */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-6 border-l-4 border-red-500">
        <h2 className="text-2xl font-semibold text-red-600 mb-2">
          🚨 Exception Handling
        </h2>
        <p className="text-lg mb-4">
          Exception handling in C++ uses <code>try</code>, <code>catch</code>,
          and <code>throw</code> blocks to manage runtime errors gracefully.
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-2">
{`#include <iostream>
using namespace std;

int main() {
  int x = 0;
  try {
    if (x == 0)
      throw "Division by zero!";
    cout << 10 / x;
  } catch (const char* msg) {
    cerr << "Error: " << msg << endl;
  }
  return 0;
}`}
        </pre>
      </div>

      {/* File I/O */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-6 border-l-4 border-blue-500">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">
          📁 File Input/Output in C++
        </h2>
        <p className="text-lg mb-4">
          File I/O in C++ is done using fstream, ifstream (input), and ofstream
          (output). You can read/write text or binary files easily.
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-2">
{`#include <fstream>
#include <iostream>
using namespace std;

int main() {
  ofstream fout("sample.txt");
  fout << "Welcome to C++ File I/O!";
  fout.close();

  string line;
  ifstream fin("sample.txt");
  while (getline(fin, line)) {
    cout << line << endl;
  }
  fin.close();
  return 0;
}`}
        </pre>
      </div>

      {/* Tips and Tricks */}
      <div className="bg-teal-50 border-l-4 border-teal-400 p-6 rounded-xl mb-6">
        <h2 className="text-xl font-semibold text-teal-600 mb-2">🎯 Tips & Tricks</h2>
        <ul className="list-disc list-inside text-base">
          <li>Use STL containers (vector, map, set) for efficient code.</li>
          <li>Templates reduce redundancy in generic functions/classes.</li>
          <li>Always close file streams after use.</li>
          <li>Use try-catch to handle exceptions, avoid program crashes.</li>
        </ul>
      </div>

      {/* Interview Questions */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-6 border-l-4 border-gray-500">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          💬 Common Interview Questions
        </h2>
        <ul className="list-decimal list-inside text-base space-y-1">
          <li>What is a template? How is it different from macros?</li>
          <li>How does C++ handle exceptions?</li>
          <li>What are the benefits of STL?</li>
          <li>Explain the use of vectors vs arrays.</li>
          <li>How do you perform file read/write in C++?</li>
        </ul>
      </div>

      {/* Conclusion */}
      <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-xl mb-6">
        <h2 className="text-xl font-semibold text-green-600 mb-2">✅ Conclusion</h2>
        <p className="text-base">
          Advanced features like templates, STL, exception handling, and file I/O
          allow C++ developers to build efficient, reliable, and scalable software.
          Mastering these topics will give you an edge in both development and
          interviews.
        </p>
      </div>
    </div>
    </div>
  );
};

export default CppOOPsSection;
