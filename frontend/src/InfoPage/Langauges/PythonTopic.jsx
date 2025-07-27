import React from "react";

const PythonFullCourse = () => {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-teal-700 mb-8">
        🐍 Python Programming: Basics to Advanced
      </h1>

      {/* Section: Introduction */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[var(--color-accent)] mb-4">
          🔰 Introduction to Python
        </h2>
        <div className="bg-white rounded-xl p-6 shadow-md">
          <p className="text-lg">
            Python is a high-level, interpreted programming language known for its
            simplicity and readability. It supports multiple programming paradigms
            including object-oriented, imperative, and functional programming.
          </p>
          <p className="mt-4 text-base">
            Created by Guido van Rossum in the late 1980s and released in 1991,
            Python is widely used in web development, data science, automation,
            AI/ML, scripting, and more.
          </p>
        </div>
      </section>

      {/* Section: Syntax and Variables */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[var(--color-accent)] mb-4">
          📝 Syntax and Variables
        </h2>
        <div className="bg-white rounded-xl p-6 shadow-md">
          <p className="mb-4 text-base">
            Python uses indentation (whitespace) to define code blocks instead of
            curly braces. Variables are dynamically typed and easy to declare.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`# Example: Variable Declaration
x = 10
y = "Hello"
pi = 3.14
print(x, y, pi)`}
          </pre>
        </div>
      </section>

      {/* Section: Data Types and Operators */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[var(--color-accent)] mb-4">
          🔢 Data Types and Operators
        </h2>
        <div className="bg-white rounded-xl p-6 shadow-md">
          <p className="text-base mb-4">
            Python supports standard data types like integers, floats, strings,
            booleans, lists, tuples, sets, and dictionaries. It also supports
            arithmetic, relational, logical, and bitwise operators.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`# Example: Data Types and Operators
num = 5           # Integer
text = "Python"    # String
lst = [1, 2, 3]    # List
print(num + 2)     # 7
print(text * 2)    # PythonPython`}
          </pre>
        </div>
      </section>

      {/* Section: Control Flow */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[var(--color-accent)] mb-4">
          🔁 Control Flow
        </h2>
        <div className="bg-white rounded-xl p-6 shadow-md">
          <p className="text-base mb-4">
            Control flow tools include <code>if</code>, <code>for</code>, and
            <code>while</code> statements.
          </p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`# Example: Control Flow
x = 10
if x > 5:
    print("x is greater than 5")

for i in range(3):
    print("Loop", i)

while x > 0:
    print(x)
    x -= 3`}
          </pre>
        </div>
      </section>

      {/* Section: Functions */}
<section className="grid md:grid-cols-2 gap-6 mb-12">
  <div className="bg-white rounded-2xl p-6 shadow-md">
    <h2 className="text-2xl font-semibold mb-2 text-blue-700">🔧 User-defined Functions</h2>
    <p className="text-base mb-4">
      Functions help break code into reusable blocks. Python allows defining functions using the <code>def</code> keyword.
    </p>
    <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
      {`def greet(name):\n  print("Hello,", name)\n\ngreet("Alice")`}
    </pre>
    <p className="mt-3 text-sm text-gray-600">
      Output: <code>Hello, Alice</code>
    </p>
  </div>

  <div className="bg-white rounded-2xl p-6 shadow-md">
    <h2 className="text-2xl font-semibold mb-2 text-blue-700">🔁 Recursion</h2>
    <p className="text-base mb-4">
      A recursive function calls itself to solve smaller subproblems. Common in problems like factorial or Fibonacci.
    </p>
    <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
      {`def factorial(n):\n  if n == 0:\n    return 1\n  else:\n    return n * factorial(n-1)\n\nprint(factorial(5))`}
    </pre>
    <p className="mt-3 text-sm text-gray-600">Output: <code>120</code></p>
  </div>
</section>
 {/* Section: Object-Oriented Programming */}
<section className="grid md:grid-cols-2 gap-6 mb-12">
  <div className="bg-white rounded-2xl p-6 shadow-md">
    <h2 className="text-2xl font-semibold mb-2 text-blue-700">🏗️ Classes and Objects</h2>
    <p className="text-base mb-4">
      Python is an object-oriented language. A class is a blueprint for creating objects (instances).
    </p>
    <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
      {`class Person:\n  def __init__(self, name):\n    self.name = name\n  def greet(self):\n    print("Hi, I'm", self.name)\n\np1 = Person("Alice")\np1.greet()`}
    </pre>
    <p className="mt-3 text-sm text-gray-600">Output: <code>Hi, I'm Alice</code></p>
  </div>

  <div className="bg-white rounded-2xl p-6 shadow-md">
    <h2 className="text-2xl font-semibold mb-2 text-blue-700">🧬 Inheritance</h2>
    <p className="text-base mb-4">
      Inheritance allows a class to use methods and properties from another class.
    </p>
    <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
      {`class Animal:\n  def speak(self):\n    print("Animal speaks")\n\nclass Dog(Animal):\n  def bark(self):\n    print("Woof!")\n\nd = Dog()\nd.speak()\nd.bark()`}
    </pre>
    <p className="mt-3 text-sm text-gray-600">Output: <code>Animal speaks<br />Woof!</code></p>
  </div>
</section>

{/* Section: File Handling */}
<section className="grid md:grid-cols-2 gap-6 mb-12">
  <div className="bg-white rounded-2xl p-6 shadow-md">
    <h2 className="text-2xl font-semibold mb-2 text-blue-700">📂 Reading Files</h2>
    <p className="text-base mb-4">
      Python uses the <code>open()</code> function to access files. You can read file contents using <code>read()</code> or iterate line by line.
    </p>
    <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
      {`with open('sample.txt', 'r') as file:\n  content = file.read()\n  print(content)`}
    </pre>
    <p className="mt-3 text-sm text-gray-600">
      Always close files or use <code>with</code> for automatic management.
    </p>
  </div>

  <div className="bg-white rounded-2xl p-6 shadow-md">
    <h2 className="text-2xl font-semibold mb-2 text-blue-700">✍️ Writing Files</h2>
    <p className="text-base mb-4">
      Use <code>'w'</code> or <code>'a'</code> mode to write data. <code>'w'</code> overwrites, <code>'a'</code> appends.
    </p>
    <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
      {`with open('output.txt', 'w') as file:\n  file.write("Hello, file!")`}
    </pre>
    <p className="mt-3 text-sm text-gray-600">Creates or overwrites <code>output.txt</code>.</p>
  </div>
</section>
{/* Section: Exception Handling */}
<section className="grid md:grid-cols-2 gap-6 mb-12">
  <div className="bg-white rounded-2xl p-6 shadow-md">
    <h2 className="text-2xl font-semibold mb-2 text-red-600">⚠️ Try, Except</h2>
    <p className="text-base mb-4">
      Exception handling prevents programs from crashing due to unexpected errors.
      Use <code>try</code> and <code>except</code> blocks to catch and handle exceptions gracefully.
    </p>
    <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
      {`try:\n  x = int(input("Enter a number: "))\n  print(10 / x)\nexcept ZeroDivisionError:\n  print("Cannot divide by zero!")\nexcept ValueError:\n  print("Invalid input!")`}
    </pre>
    <p className="mt-3 text-sm text-gray-600">Catches both division and input errors.</p>
  </div>

  <div className="bg-white rounded-2xl p-6 shadow-md">
    <h2 className="text-2xl font-semibold mb-2 text-red-600">🧹 Finally & Custom Exceptions</h2>
    <p className="text-base mb-4">
      The <code>finally</code> block runs regardless of exceptions. You can also raise custom errors using <code>raise</code>.
    </p>
    <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
      {`try:\n  raise ValueError("Something went wrong!")\nexcept ValueError as e:\n  print("Caught:", e)\nfinally:\n  print("Always runs")`}
    </pre>
    <p className="mt-3 text-sm text-gray-600">Useful for cleanup tasks.</p>
  </div>
</section>

{/* Section: Modules and Packages */}
<section className="grid md:grid-cols-2 gap-6 mb-12">
  <div className="bg-white rounded-2xl p-6 shadow-md">
    <h2 className="text-2xl font-semibold mb-2 text-green-700">📦 Importing Modules</h2>
    <p className="text-base mb-4">
      Modules are Python files containing functions, classes, or variables. Use <code>import</code> to use them in your code.
    </p>
    <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
      {`import math\nprint(math.sqrt(16))  # Output: 4.0\n\nfrom datetime import date\nprint(date.today())`}
    </pre>
    <p className="mt-3 text-sm text-gray-600">Standard libraries make many tasks easier.</p>
  </div>

  <div className="bg-white rounded-2xl p-6 shadow-md">
    <h2 className="text-2xl font-semibold mb-2 text-green-700">📁 Creating Packages</h2>
    <p className="text-base mb-4">
      A package is a directory containing multiple modules and an <code>__init__.py</code> file. Use relative or absolute imports inside packages.
    </p>
    <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
      {`# Folder structure:\n# mypkg/__init__.py\n# mypkg/mathutils.py\n\n# Inside mathutils.py\ndef add(a, b):\n  return a + b\n\n# In main file\nfrom mypkg.mathutils import add\nprint(add(5, 3))`}
    </pre>
    <p className="mt-3 text-sm text-gray-600">Organize your code with reusable modules.</p>
  </div>
</section>
{/* Section: Lambda, Map, Filter, Reduce */}
<section className="grid md:grid-cols-2 gap-6 mb-12">
  <div className="bg-white rounded-2xl p-6 shadow-md">
    <h2 className="text-2xl font-semibold mb-2 text-yellow-600">🔧 Lambda Functions</h2>
    <p className="text-base mb-4">
      Lambda functions are anonymous one-line functions. Use them for quick operations.
    </p>
    <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
      {`add = lambda x, y: x + y\nprint(add(3, 4))  # Output: 7`}
    </pre>
    <p className="mt-3 text-sm text-gray-600">Syntax: <code>lambda arguments: expression</code></p>
  </div>

  <div className="bg-white rounded-2xl p-6 shadow-md">
    <h2 className="text-2xl font-semibold mb-2 text-yellow-600">🔄 Map, Filter, Reduce</h2>
    <p className="text-base mb-4">
      Use functional tools to process collections.
    </p>
    <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
      {`nums = [1, 2, 3, 4, 5]\n\n# Map: double all\nprint(list(map(lambda x: x*2, nums)))\n\n# Filter: even numbers\nprint(list(filter(lambda x: x%2==0, nums)))\n\n# Reduce: sum\nfrom functools import reduce\nprint(reduce(lambda x,y: x+y, nums))`}
    </pre>
    <p className="mt-3 text-sm text-gray-600"><code>map()</code> applies, <code>filter()</code> selects, <code>reduce()</code> combines.</p>
  </div>
</section>

{/* Section: Decorators and Generators */}
<section className="grid md:grid-cols-2 gap-6 mb-12">
  <div className="bg-white rounded-2xl p-6 shadow-md">
    <h2 className="text-2xl font-semibold mb-2 text-indigo-600">🎀 Decorators</h2>
    <p className="text-base mb-4">
      Decorators modify behavior of functions. They are higher-order functions used for logging, access control, etc.
    </p>
    <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
      {`def greet(func):\n  def wrapper():\n    print("Hello!")\n    func()\n  return wrapper\n\n@greet\ndef welcome():\n  print("Welcome!")\n\nwelcome()`}
    </pre>
    <p className="mt-3 text-sm text-gray-600">Output: Hello! then Welcome!</p>
  </div>

  <div className="bg-white rounded-2xl p-6 shadow-md">
    <h2 className="text-2xl font-semibold mb-2 text-indigo-600">🔁 Generators</h2>
    <p className="text-base mb-4">
      Generators yield items one by one using <code>yield</code>. They're memory-efficient for large data.
    </p>
    <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
      {`def countdown(n):\n  while n > 0:\n    yield n\n    n -= 1\n\nfor i in countdown(5):\n  print(i)`}
    </pre>
    <p className="mt-3 text-sm text-gray-600">Generators pause at <code>yield</code> and resume later.</p>
  </div>
</section>
{/* Section: Object-Oriented Programming (OOP) */}
<section className="grid md:grid-cols-2 gap-6 mb-12">
  <div className="bg-white rounded-2xl p-6 shadow-md">
    <h2 className="text-2xl font-semibold mb-2 text-green-600">🏗️ Object-Oriented Programming (OOP)</h2>
    <p className="text-base mb-4">
      Python is an object-oriented language. It allows encapsulating data and functionality into classes and objects.
    </p>
    <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
      {`class Person:\n  def __init__(self, name):\n    self.name = name\n\n  def greet(self):\n    print(f"Hello, my name is {self.name}")\n\np = Person("Alice")\np.greet()`}
    </pre>
    <p className="mt-3 text-sm text-gray-600">Concepts: Class, Object, Constructor, Methods, Inheritance, Encapsulation, Polymorphism.</p>
  </div>

  <div className="bg-white rounded-2xl p-6 shadow-md">
    <h2 className="text-2xl font-semibold mb-2 text-green-600">🧬 Inheritance Example</h2>
    <p className="text-base mb-4">
      Inheritance allows one class to acquire properties of another.
    </p>
    <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
      {`class Animal:\n  def speak(self):\n    print("Animal speaks")\n\nclass Dog(Animal):\n  def speak(self):\n    print("Dog barks")\n\nd = Dog()\nd.speak()  # Output: Dog barks`}
    </pre>
    <p className="mt-3 text-sm text-gray-600">Overriding allows a subclass to define custom behavior.</p>
  </div>
</section>

{/* Section: File Handling */}
<section className="grid md:grid-cols-2 gap-6 mb-12">
  <div className="bg-white rounded-2xl p-6 shadow-md">
    <h2 className="text-2xl font-semibold mb-2 text-blue-600">📄 File Handling (Read/Write)</h2>
    <p className="text-base mb-4">
      Python makes it easy to work with files using built-in functions like <code>open()</code>, <code>read()</code>, and <code>write()</code>.
    </p>
    <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
      {`# Writing to a file\nwith open("demo.txt", "w") as f:\n  f.write("Hello, Python!")\n\n# Reading the file\nwith open("demo.txt", "r") as f:\n  print(f.read())`}
    </pre>
    <p className="mt-3 text-sm text-gray-600">Use modes: <code>"r"</code>, <code>"w"</code>, <code>"a"</code>, <code>"rb"</code>, etc.</p>
  </div>

  <div className="bg-white rounded-2xl p-6 shadow-md">
    <h2 className="text-2xl font-semibold mb-2 text-blue-600">📂 File Handling - Line-by-Line</h2>
    <p className="text-base mb-4">
      Use loops to read files line by line. This is efficient for large files.
    </p>
    <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
      {`with open("demo.txt") as f:\n  for line in f:\n    print(line.strip())`}
    </pre>
    <p className="mt-3 text-sm text-gray-600">Always close files or use <code>with</code> to auto-close.</p>
  </div>
</section>
{/* Section: Exception Handling */}
<section className="grid md:grid-cols-2 gap-6 mb-12">
  <div className="bg-white rounded-2xl p-6 shadow-md">
    <h2 className="text-2xl font-semibold mb-2 text-red-600">🛑 Exception Handling</h2>
    <p className="text-base mb-4">
      Exceptions are errors that occur during execution. Python handles them using <code>try</code>, <code>except</code>, <code>else</code>, and <code>finally</code> blocks.
    </p>
    <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
      {`try:\n  x = int(input("Enter a number: "))\n  print(10 / x)\nexcept ZeroDivisionError:\n  print("Cannot divide by zero!")\nexcept ValueError:\n  print("Invalid input!")\nelse:\n  print("No exceptions occurred.")\nfinally:\n  print("Execution complete.")`}
    </pre>
    <p className="mt-3 text-sm text-gray-600">
      Use specific exception classes to handle known errors. <br />The <code>finally</code> block always executes, useful for cleanup.
    </p>
  </div>

  <div className="bg-white rounded-2xl p-6 shadow-md">
    <h2 className="text-2xl font-semibold mb-2 text-red-600">🔁 Raising Custom Exceptions</h2>
    <p className="text-base mb-4">
      You can raise exceptions manually using the <code>raise</code> keyword.
    </p>
    <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
      {`def set_age(age):\n  if age &lt; 0:\n    raise ValueError("Age cannot be negative")\n  print("Age is", age)\n\nset_age(-2)  # Raises ValueError`}
    </pre>
    <p className="mt-3 text-sm text-gray-600">Helps enforce constraints in functions and classes.</p>
  </div>
</section>

{/* Section: Modules & Packages */}
<section className="grid md:grid-cols-2 gap-6 mb-12">
  <div className="bg-white rounded-2xl p-6 shadow-md">
    <h2 className="text-2xl font-semibold mb-2 text-yellow-600">📦 Modules in Python</h2>
    <p className="text-base mb-4">
      A module is a Python file containing functions and variables. Use <code>import</code> to reuse code from modules.
    </p>
    <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
      {`# math_utils.py\n\ndef add(a, b):\n  return a + b\n\ndef square(n):\n  return n * n`}
    </pre>
    <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto mt-3">
      {`# main.py\nimport math_utils\n\nprint(math_utils.add(5, 3))\nprint(math_utils.square(4))`}
    </pre>
    <p className="mt-3 text-sm text-gray-600">Use <code>from module import func</code> for direct import.</p>
  </div>

  <div className="bg-white rounded-2xl p-6 shadow-md">
    <h2 className="text-2xl font-semibold mb-2 text-yellow-600">📁 Packages and <code>__init__.py</code></h2>
    <p className="text-base mb-4">
      A package is a collection of Python modules in directories with an <code>__init__.py</code> file.
    </p>
    <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
      {`# Directory structure:\nmy_package/\n├── __init__.py\n├── file1.py\n└── file2.py`}
    </pre>
    <p className="mt-3 text-sm text-gray-600">
      Packages help organize large projects. Use dot notation to access: <br />
      <code>from my_package.file1 import function_name</code>
    </p>
  </div>
</section>
{/* Section: Python Interview Questions */}
<section className="mb-12">
  <h2 className="text-3xl font-bold text-teal-700 mb-4">🎯 Top Python Interview Questions</h2>
  <div className="grid md:grid-cols-2 gap-6">
    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="text-xl font-semibold text-teal-600 mb-2">Q1. What are Python's key features?</h3>
      <p className="text-base text-gray-700">Python is dynamically typed, interpreted, supports OOP, and has a vast standard library.</p>
    </div>

    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="text-xl font-semibold text-teal-600 mb-2">Q2. Difference between list and tuple?</h3>
      <p className="text-base text-gray-700">Lists are mutable, whereas tuples are immutable. Tuples are faster and memory efficient.</p>
    </div>

    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="text-xl font-semibold text-teal-600 mb-2">Q3. What is the use of decorators?</h3>
      <p className="text-base text-gray-700">Decorators allow modification of function behavior without changing the actual function code.</p>
    </div>

    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="text-xl font-semibold text-teal-600 mb-2">Q4. What are *args and **kwargs?</h3>
      <p className="text-base text-gray-700"><code>*args</code> is for variable positional arguments, <code>**kwargs</code> is for variable keyword arguments.</p>
    </div>

    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="text-xl font-semibold text-teal-600 mb-2">Q5. Explain Python's memory management?</h3>
      <p className="text-base text-gray-700">Python uses reference counting and garbage collection to manage memory.</p>
    </div>

    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="text-xl font-semibold text-teal-600 mb-2">Q6. What is the difference between is and == in Python?</h3>
      <p className="text-base text-gray-700"><code>is</code> checks identity (same object), while <code>==</code> checks equality of values.</p>
    </div>

    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="text-xl font-semibold text-teal-600 mb-2">Q7. What is a lambda function?</h3>
      <p className="text-base text-gray-700">A lambda is an anonymous function written in a single line using the <code>lambda</code> keyword.</p>
    </div>

    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="text-xl font-semibold text-teal-600 mb-2">Q8. Difference between shallow and deep copy?</h3>
      <p className="text-base text-gray-700">Shallow copy copies only references, deep copy copies nested objects too (independent copy).</p>
    </div>
  </div>
</section>

{/* Section: Conclusion */}
<section className="mb-12">
  <h2 className="text-3xl font-bold text-teal-700 mb-4">🧾 Conclusion</h2>
  <div className="bg-white rounded-2xl p-6 shadow-md text-base leading-relaxed text-gray-800">
    <p className="mb-4">
      Python is one of the most versatile and beginner-friendly programming languages, powering web applications, data science, automation, AI, and more.
    </p>
    <p className="mb-4">
      This guide has walked you through the fundamentals to advanced topics — covering syntax, control structures, functions, OOP, file handling, error handling, modules, and more.
    </p>
    <p className="mb-4">
      Practice is key! Apply your learning by building projects, solving problems on platforms like LeetCode or HackerRank, and contributing to open-source repositories.
    </p>
    <p className="mb-4">
      Stay curious, keep experimenting, and Python will become your powerful ally in the world of programming!
    </p>
    <p className="mt-6 text-teal-600 font-semibold">
      🚀 Happy Coding!
    </p>
  </div>
</section>
    </div>
  );
};

export default PythonFullCourse;
