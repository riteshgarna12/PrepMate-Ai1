import React from "react";

const JavaBasics = () => {
  return (
    <div className="px-6 py-12 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-teal-700 mb-4">☕ Introduction to Java</h1>

      <div className="bg-white light:bg-gray-800 rounded-xl shadow-md p-6 mb-6 border border-purple-300">
        <h2 className="text-2xl font-semibold text-teal-600 mb-2">📌 What is Java?</h2>
        <p className="text-lg leading-relaxed">
          Java is a high-level, object-oriented, class-based programming language developed by Sun Microsystems and now maintained by Oracle. It is platform-independent due to the Java Virtual Machine (JVM), which allows compiled Java code to run on any system.
        </p>
      </div>

      <div className="bg-white light:bg-gray-800 rounded-xl shadow-md p-6 mb-6 border border-purple-300">
        <h2 className="text-2xl font-semibold text-teal-600 mb-2">🔧 Features of Java</h2>
        <ul className="list-disc pl-6 text-lg">
          <li>Platform Independent</li>
          <li>Object-Oriented</li>
          <li>Simple and Secure</li>
          <li>Multithreaded and Robust</li>
          <li>Portable and Dynamic</li>
        </ul>
      </div>

      <div className="bg-white light:bg-gray-800 rounded-xl shadow-md p-6 border border-purple-300">
        <h2 className="text-2xl font-semibold text-teal-600 mb-2">💻 Hello World Example</h2>
        <pre className="bg-gray-100 light:bg-gray-900 text-sm p-4 rounded-md overflow-auto">
{`public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}`}
        </pre>
      </div>
      <br />
      <h1 className="text-4xl font-bold text-teal-700 mb-6">🔠 Java Basics</h1>

      {/* Variables and Data Types */}
      <div className="bg-white light:bg-gray-800 rounded-xl shadow-md p-6 mb-6 border border-purple-300">
        <h2 className="text-2xl font-semibold text-teal-600 mb-2">🧮 Variables and Data Types</h2>
        <p className="text-lg mb-2">
          Variables are containers for storing data values. Java is statically typed, so each variable must be declared with a type.
        </p>
        <ul className="list-disc pl-6 text-lg mb-4">
          <li><strong>int</strong>: Integer (e.g., 1, 10)</li>
          <li><strong>double</strong>: Floating-point (e.g., 3.14)</li>
          <li><strong>char</strong>: Character (e.g., 'A')</li>
          <li><strong>boolean</strong>: true or false</li>
          <li><strong>String</strong>: Text (not a primitive)</li>
        </ul>
        <pre className="bg-gray-100 light:bg-gray-900 text-sm p-4 rounded-md overflow-auto">
{`int age = 25;
double price = 19.99;
char grade = 'A';
boolean isJavaFun = true;
String name = "Alice";`}
        </pre>
      </div>

      {/* Operators */}
      <div className="bg-white light:bg-gray-800 rounded-xl shadow-md p-6 border border-purple-300">
        <h2 className="text-2xl font-semibold text-teal-600 mb-2">➕ Operators in Java</h2>
        <p className="text-lg mb-2">
          Operators are used to perform operations on variables and values.
        </p>
        <ul className="list-disc pl-6 text-lg mb-4">
          <li><strong>Arithmetic</strong>: +, -, *, /, %</li>
          <li><strong>Relational</strong>: ==, !=, &gt;, &lt;, &gt;=, &lt;=</li>
          <li><strong>Logical</strong>: &&, ||, !</li>
          <li><strong>Assignment</strong>: =, +=, -=, *=, etc.</li>
        </ul>
        <pre className="bg-gray-100 light:bg-gray-900 text-sm p-4 rounded-md overflow-auto">
{`int a = 10, b = 20;
int sum = a + b;
boolean result = (a < b) && (b > 15);`}
        </pre>
      </div>
      <section className="mb-12">
  <h2 className="text-2xl font-bold text-yellow-600 mb-4">🔁 Control Flow in Java</h2>
  <p className="text-lg mb-4">
    Java supports standard control flow mechanisms including conditional and loop statements. These help control the flow of execution based on certain conditions or repeatedly perform actions.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* if-else */}
    <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-500">
      <h3 className="text-xl font-semibold mb-2">if-else Statement</h3>
      <p className="mb-2">Used to execute block of code based on a condition.</p>
      <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
{`int num = 10;
if (num > 0) {
  System.out.println("Positive");
} else {
  System.out.println("Negative or Zero");
}`}
      </pre>
    </div>

    {/* switch */}
    <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-500">
      <h3 className="text-xl font-semibold mb-2">switch Statement</h3>
      <p className="mb-2">Useful when checking multiple exact values.</p>
      <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
{`int day = 2;
switch(day) {
  case 1: System.out.println("Monday"); break;
  case 2: System.out.println("Tuesday"); break;
  default: System.out.println("Other day");
}`}
      </pre>
    </div>

    {/* for loop */}
    <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-500">
      <h3 className="text-xl font-semibold mb-2">for Loop</h3>
      <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
{`for (int i = 0; i < 5; i++) {
  System.out.println("i = " + i);
}`}
      </pre>
    </div>

    {/* while and do-while */}
    <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-500">
      <h3 className="text-xl font-semibold mb-2">while & do-while</h3>
      <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
{`int i = 0;
while (i < 5) {
  System.out.println(i);
  i++;
}

// do-while
int j = 0;
do {
  System.out.println(j);
  j++;
} while (j < 5);`}
      </pre>
    </div>
  </div>
</section>
<section className="mb-12">
  <h2 className="text-2xl font-bold text-yellow-600 mb-4">🧠 Java Methods (Functions)</h2>
  <p className="text-lg mb-4">
    Methods are blocks of code designed to perform a specific task. Java supports modular code using functions with return types, parameters, and overloading.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    {/* Defining a method */}
    <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-500">
      <h3 className="text-xl font-semibold mb-2">Basic Method</h3>
      <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
{`public static void greet() {
  System.out.println("Hello, World!");
}

public static void main(String[] args) {
  greet(); // Calling the method
}`}
      </pre>
    </div>

    {/* Method with Parameters */}
    <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-500">
      <h3 className="text-xl font-semibold mb-2">Method with Parameters</h3>
      <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
{`public static int add(int a, int b) {
  return a + b;
}

public static void main(String[] args) {
  int result = add(5, 7);
  System.out.println(result);
}`}
      </pre>
    </div>

    {/* Method Overloading */}
    <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-500">
      <h3 className="text-xl font-semibold mb-2">Method Overloading</h3>
      <p className="mb-2">Same method name with different parameter types/number.</p>
      <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
{`public static int multiply(int a, int b) {
  return a * b;
}
public static double multiply(double a, double b) {
  return a * b;
}`}
      </pre>
    </div>

    {/* Return Types */}
    <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-500">
      <h3 className="text-xl font-semibold mb-2">Return Types</h3>
      <p className="mb-2">A method can return any valid type or void if nothing.</p>
      <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
{`public static boolean isEven(int num) {
  return num % 2 == 0;
}`}
      </pre>
    </div>
  </div>
</section>
<section className="mb-6 bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold text-teal-600 mb-4">🔁 Control Flow in Java</h2>
        <p>
          Control flow allows your program to make decisions and repeat operations. Java supports conditionals and looping constructs similar to other programming languages.
        </p>

        <h3 className="text-lg font-semibold text-teal-500 mt-4">Conditional Statements:</h3>
        <ul className="list-disc list-inside">
          <li><code>if</code>, <code>else if</code>, and <code>else</code> blocks</li>
          <li><code>switch</code> statements</li>
        </ul>

        <pre className="bg-gray-100 p-4 rounded overflow-auto mt-2">
          <code>{`int age = 18;
if (age >= 18) {
  System.out.println("Adult");
} else {
  System.out.println("Minor");
}`}</code>
        </pre>

        <h3 className="text-lg font-semibold text-teal-500 mt-4">Switch Example:</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-auto">
          <code>{`int day = 2;
switch(day) {
  case 1: System.out.println("Monday"); break;
  case 2: System.out.println("Tuesday"); break;
  default: System.out.println("Another day");
}`}</code>
        </pre>

        <h3 className="text-lg font-semibold text-teal-500 mt-4">Loops:</h3>
        <ul className="list-disc list-inside">
          <li><code>for</code></li>
          <li><code>while</code></li>
          <li><code>do-while</code></li>
        </ul>

        <pre className="bg-gray-100 p-4 rounded overflow-auto mt-2">
          <code>{`for (int i = 0; i < 5; i++) {
  System.out.println("Count: " + i);
}`}</code>
        </pre>
      </section>

      {/* 🔹 Section 4: Methods and Recursion */}
      <section className="mb-6 bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold text-teal-600 mb-4">🧮 Methods and Recursion</h2>
        <p>
          Methods are blocks of code that perform a specific task. They help in code reusability and structure.
        </p>

        <h3 className="text-lg font-semibold text-teal-500 mt-4">Defining a Method:</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-auto">
          <code>{`public class Demo {
  static void greet() {
    System.out.println("Hello, Java!");
  }

  public static void main(String[] args) {
    greet();
  }
}`}</code>
        </pre>

        <h3 className="text-lg font-semibold text-teal-500 mt-4">Method with Parameters & Return:</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-auto">
          <code>{`public class Calculator {
  static int add(int a, int b) {
    return a + b;
  }

  public static void main(String[] args) {
    int result = add(5, 3);
    System.out.println("Sum: " + result);
  }
}`}</code>
        </pre>

        <h3 className="text-lg font-semibold text-teal-500 mt-4">Recursion Example:</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-auto">
          <code>{`public class RecursionExample {
  static int factorial(int n) {
    if (n == 0) return 1;
    return n * factorial(n - 1);
  }

  public static void main(String[] args) {
    System.out.println(factorial(5)); // 120
  }
}`}</code>
        </pre>
      </section>
      <section className="mb-12">
  <h2 className="text-2xl font-bold text-teal-600 mb-4">🔄 Control Flow in Java</h2>
  <p className="text-lg leading-relaxed mb-4">
    Control flow statements determine the order in which individual statements, instructions, or function calls are executed in a Java program.
  </p>

  {/* If-Else Statement */}
  <div className="bg-white light:bg-gray-800 shadow-md rounded-xl p-5 mb-6">
    <h3 className="text-xl font-semibold text-teal-500 mb-2">👉 If-Else Statement</h3>
    <p className="mb-3">Used to execute a block of code based on a condition.</p>
    <pre className="bg-gray-100 light:bg-gray-900 p-4 rounded overflow-x-auto text-sm">
{`int number = 10;
if (number > 0) {
    System.out.println("Positive number");
} else {
    System.out.println("Non-positive number");
}`}
    </pre>
  </div>

  {/* Nested If and Else If */}
  <div className="bg-white light:bg-gray-800 shadow-md rounded-xl p-5 mb-6">
    <h3 className="text-xl font-semibold text-teal-500 mb-2">🔁 Nested If / Else If</h3>
    <p className="mb-3">Allows checking multiple conditions.</p>
    <pre className="bg-gray-100 light:bg-gray-900 p-4 rounded overflow-x-auto text-sm">
{`int marks = 85;
if (marks >= 90) {
    System.out.println("Grade A");
} else if (marks >= 75) {
    System.out.println("Grade B");
} else {
    System.out.println("Grade C");
}`}
    </pre>
  </div>

  {/* Switch Statement */}
  <div className="bg-white light:bg-gray-800 shadow-md rounded-xl p-5 mb-6">
    <h3 className="text-xl font-semibold text-teal-500 mb-2">🧭 Switch Statement</h3>
    <p className="mb-3">Efficient for selecting between many options based on a variable.</p>
    <pre className="bg-gray-100 light:bg-gray-900 p-4 rounded overflow-x-auto text-sm">
{`int day = 3;
switch (day) {
    case 1: System.out.println("Monday"); break;
    case 2: System.out.println("Tuesday"); break;
    case 3: System.out.println("Wednesday"); break;
    default: System.out.println("Invalid day");
}`}
    </pre>
  </div>

  {/* Loops - For Loop */}
  <div className="bg-white light:bg-gray-800 shadow-md rounded-xl p-5 mb-6">
    <h3 className="text-xl font-semibold text-teal-500 mb-2">🔂 For Loop</h3>
    <p className="mb-3">Executes a block of code a specific number of times.</p>
    <pre className="bg-gray-100 light:bg-gray-900 p-4 rounded overflow-x-auto text-sm">
{`for (int i = 1; i <= 5; i++) {
    System.out.println("Count: " + i);
}`}
    </pre>
  </div>

  {/* While Loop */}
  <div className="bg-white light:bg-gray-800 shadow-md rounded-xl p-5 mb-6">
    <h3 className="text-xl font-semibold text-teal-500 mb-2">🔁 While Loop</h3>
    <p className="mb-3">Executes code repeatedly as long as the condition is true.</p>
    <pre className="bg-gray-100 light:bg-gray-900 p-4 rounded overflow-x-auto text-sm">
{`int i = 1;
while (i <= 5) {
    System.out.println(i);
    i++;
}`}
    </pre>
  </div>

  {/* Do-While Loop */}
  <div className="bg-white light:bg-gray-800 shadow-md rounded-xl p-5 mb-6">
    <h3 className="text-xl font-semibold text-teal-500 mb-2">🔁 Do-While Loop</h3>
    <p className="mb-3">Executes code block at least once, then repeats while the condition is true.</p>
    <pre className="bg-gray-100 light:bg-gray-900 p-4 rounded overflow-x-auto text-sm">
{`int i = 1;
do {
    System.out.println(i);
    i++;
} while (i <= 5);`}
    </pre>
  </div>

  {/* Break and Continue */}
  <div className="bg-white light:bg-gray-800 shadow-md rounded-xl p-5">
    <h3 className="text-xl font-semibold text-teal-500 mb-2">🛑 Break and Continue</h3>
    <p className="mb-3">Used to alter the flow of loops.</p>
    <pre className="bg-gray-100 light:bg-gray-900 p-4 rounded overflow-x-auto text-sm">
{`for (int i = 1; i <= 5; i++) {
    if (i == 3) continue;
    if (i == 4) break;
    System.out.println(i);
}
// Output: 1 2`}
    </pre>
  </div>
</section>
<section className="mb-12 card">
  <h2 className="text-2xl font-bold text-blue-700 mb-4">🧮 Arrays and Strings in Java</h2>
  <p className="text-lg mb-4">
    Arrays and Strings are fundamental data structures in Java. Arrays store fixed-size collections of elements of the same type, while Strings represent sequences of characters.
  </p>

  {/* Arrays */}
  <div className="mb-8">
    <h3 className="text-xl font-semibold text-blue-600 mb-2">📌 Arrays</h3>
    <p className="text-base mb-3">
      An array is a container object that holds a fixed number of values of a single type. Arrays are zero-indexed and must be declared with a size.
    </p>
    <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-2">
      {`// Declaring and initializing an array
int[] numbers = {1, 2, 3, 4, 5};

// Accessing elements
System.out.println(numbers[0]); // Output: 1

// Looping through array
for(int i = 0; i < numbers.length; i++) {
    System.out.println(numbers[i]);
}`}
    </pre>
    <p className="text-base">
      Java also supports multi-dimensional arrays (e.g., 2D arrays) using syntax like <code>int[][] matrix = new int[3][3];</code>
    </p>
  </div>

  {/* Strings */}
  <div>
    <h3 className="text-xl font-semibold text-blue-600 mb-2">📌 Strings</h3>
    <p className="text-base mb-3">
      In Java, Strings are objects of the <code>String</code> class. Strings are immutable, meaning once created, they cannot be changed.
    </p>
    <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-2">
      {`// Creating Strings
String name = "Alice";
String city = new String("Mumbai");

// String concatenation
String fullName = name + " from " + city;

// Length of a string
System.out.println(name.length());

// Accessing characters
System.out.println(name.charAt(0)); // Output: A

// String comparison
System.out.println(name.equals("Alice")); // true
System.out.println(name.equalsIgnoreCase("alice")); // true
`}
    </pre>
    <p className="text-base mb-2">
      Strings offer a variety of built-in methods like <code>substring()</code>, <code>replace()</code>, <code>toUpperCase()</code>, <code>split()</code>, etc.
    </p>
    <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
      {`// String methods example
String message = "Hello Java World!";
System.out.println(message.substring(6));     // Output: Java World!
System.out.println(message.replace("Java", "Python")); // Output: Hello Python World!
System.out.println(message.toUpperCase());    // Output: HELLO JAVA WORLD!`}
    </pre>
  </div>
</section>
<section className="mb-12 card">
  <h2 className="text-2xl font-bold text-blue-700 mb-4">🧠 Methods and OOP Basics in Java</h2>
  <p className="text-lg mb-6 ">
    Java is an object-oriented programming language. It uses **classes** and **objects** to structure code. Methods (also called functions) define reusable blocks of logic within classes.
  </p>

  {/* Methods */}
  <div className="mb-8">
    <h3 className="text-xl font-semibold text-blue-600 mb-2">🔁 Java Methods</h3>
    <p className="text-base mb-3 card">
      A method is a block of code that performs a specific task. Java methods can return values or be void (return nothing). Methods improve code reusability and modularity.
    </p>
    <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-2">
      {`// Method with return value
public static int add(int a, int b) {
    return a + b;
}

// Void method
public static void greet(String name) {
    System.out.println("Hello, " + name);
}

// Calling methods in main
public static void main(String[] args) {
    int sum = add(10, 20);
    System.out.println("Sum: " + sum);

    greet("Alice");
}`}
    </pre>
    <p className="text-base">
      Methods can be overloaded by changing parameters. Java also supports recursion for problems like factorial or Fibonacci.
    </p>
  </div>

  {/* OOP Basics */}
  <div >
    <h3 className="text-xl font-semibold text-blue-600 mb-2 card">🏗️ Object-Oriented Programming (OOP)</h3>
    <p className="text-base mb-3">
      Java is based on four main pillars of OOP:
      <strong> Encapsulation, Inheritance, Polymorphism,</strong> and <strong>Abstraction</strong>.
    </p>

    <ul className="list-disc pl-5 mb-4 text-base space-y-1">
      <li><strong>Class:</strong> Blueprint for creating objects.</li>
      <li><strong>Object:</strong> Instance of a class containing data and methods.</li>
      <li><strong>Encapsulation:</strong> Wrapping data and code in a class.</li>
    </ul>

    <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-3">
      {`// Simple class and object example
class Person {
    String name;
    int age;

    // Constructor
    Person(String n, int a) {
        name = n;
        age = a;
    }

    // Method
    void display() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
}

public class Main {
    public static void main(String[] args) {
        Person p1 = new Person("Alice", 25);
        p1.display();
    }
}`}
    </pre>

    <p className="text-base mb-2">
      Java also supports access modifiers like <code>private</code>, <code>public</code>, and <code>protected</code> to control visibility.
    </p>
    <p className="text-base">
      Classes can inherit using <code>extends</code>, and methods can be overridden for polymorphic behavior. Interfaces and abstract classes help achieve abstraction.
    </p>
  </div>
</section>
<section className="mb-12">
  <h2 className="text-2xl font-bold text-blue-700 mb-4">🧠 Methods and OOP Basics in Java</h2>
  <p className="text-lg mb-6">
    Java is an object-oriented programming language. It uses **classes** and **objects** to structure code. Methods (also called functions) define reusable blocks of logic within classes.
  </p>

  {/* Methods */}
  <div className="mb-8">
    <h3 className="text-xl font-semibold text-blue-600 mb-2">🔁 Java Methods</h3>
    <p className="text-base mb-3">
      A method is a block of code that performs a specific task. Java methods can return values or be void (return nothing). Methods improve code reusability and modularity.
    </p>
    <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-2">
      {`// Method with return value
public static int add(int a, int b) {
    return a + b;
}

// Void method
public static void greet(String name) {
    System.out.println("Hello, " + name);
}

// Calling methods in main
public static void main(String[] args) {
    int sum = add(10, 20);
    System.out.println("Sum: " + sum);

    greet("Alice");
}`}
    </pre>
    <p className="text-base">
      Methods can be overloaded by changing parameters. Java also supports recursion for problems like factorial or Fibonacci.
    </p>
  </div>

  {/* OOP Basics */}
  <div>
    <h3 className="text-xl font-semibold text-blue-600 mb-2 card">🏗️ Object-Oriented Programming (OOP)</h3>
    <p className="text-base mb-3">
      Java is based on four main pillars of OOP:
      <strong> Encapsulation, Inheritance, Polymorphism,</strong> and <strong>Abstraction</strong>.
    </p>

    <ul className="list-disc pl-5 mb-4 text-base space-y-1 card">
      <li><strong>Class:</strong> Blueprint for creating objects.</li>
      <li><strong>Object:</strong> Instance of a class containing data and methods.</li>
      <li><strong>Encapsulation:</strong> Wrapping data and code in a class.</li>
    </ul>

    <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-3">
      {`// Simple class and object example
class Person {
    String name;
    int age;

    // Constructor
    Person(String n, int a) {
        name = n;
        age = a;
    }

    // Method
    void display() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
}

public class Main {
    public static void main(String[] args) {
        Person p1 = new Person("Alice", 25);
        p1.display();
    }
}`}
    </pre>

    <p className="text-base mb-2 card">
      Java also supports access modifiers like <code>private</code>, <code>public</code>, and <code>protected</code> to control visibility.
    </p>
    <p className="text-base card">
      Classes can inherit using <code>extends</code>, and methods can be overridden for polymorphic behavior. Interfaces and abstract classes help achieve abstraction.
    </p>
  </div>
</section>
<section className="mb-12">
  <h2 className="text-2xl font-bold text-blue-700 mb-4">🧬 OOP Advanced Concepts in Java</h2>

  {/* Inheritance */}
  <div className="mb-8 card">
    <h3 className="text-xl font-semibold text-blue-600 mb-2">👨‍👧 Inheritance</h3>
    <p className="text-base mb-3">
      Inheritance allows a class (subclass) to inherit properties and methods from another class (superclass).
      Java uses the <code>extends</code> keyword.
    </p>
    <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-2">
      {`class Animal {
    void sound() {
        System.out.println("Animal makes sound");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Dog barks");
    }
}

public class Test {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.sound();  // inherited method
        d.bark();
    }
}`}
    </pre>
  </div>

  {/* Polymorphism */}
  <div className="mb-8 card">
    <h3 className="text-xl font-semibold text-blue-600 mb-2">🔁 Polymorphism</h3>
    <p className="text-base mb-3">
      Polymorphism allows objects to behave differently based on their data type or class. There are two types:
    </p>
    <ul className="list-disc pl-5 text-base mb-3">
      <li><strong>Compile-time polymorphism</strong> (method overloading)</li>
      <li><strong>Runtime polymorphism</strong> (method overriding)</li>
    </ul>
    <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-2">
      {`// Overriding example (runtime polymorphism)
class Animal {
    void sound() {
        System.out.println("Generic sound");
    }
}

class Cat extends Animal {
    void sound() {
        System.out.println("Meow");
    }
}

public class Test {
    public static void main(String[] args) {
        Animal a = new Cat();  // Upcasting
        a.sound();  // Outputs "Meow"
    }
}`}
    </pre>
  </div>

  {/* Abstraction */}
  <div className="mb-8 card">
    <h3 className="text-xl font-semibold text-blue-600 mb-2">🎭 Abstraction</h3>
    <p className="text-base mb-3">
      Abstraction hides internal implementation and shows only essential features. It is achieved using:
    </p>
    <ul className="list-disc pl-5 text-base mb-2">
      <li><strong>Abstract classes:</strong> Use <code>abstract</code> keyword, can have both abstract and concrete methods.</li>
      <li><strong>Interfaces:</strong> Fully abstract (in Java 8+, can have default methods).</li>
    </ul>
    <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-2">
      {`abstract class Shape {
    abstract void draw();  // Abstract method
}

class Circle extends Shape {
    void draw() {
        System.out.println("Drawing Circle");
    }
}

public class Test {
    public static void main(String[] args) {
        Shape s = new Circle();
        s.draw();
    }
}`}
    </pre>
  </div>

  {/* Interfaces */}
  <div className="card">
    <h3 className="text-xl font-semibold text-blue-600 mb-2">🔌 Interfaces</h3>
    <p className="text-base mb-3">
      Interfaces define a contract that implementing classes must fulfill. A class uses <code>implements</code> to use an interface.
    </p>
    <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-2">
      {`interface Vehicle {
    void start();
}

class Car implements Vehicle {
    public void start() {
        System.out.println("Car started");
    }
}

public class Test {
    public static void main(String[] args) {
        Vehicle v = new Car();
        v.start();
    }
}`}
    </pre>
    <p className="text-base">
      A class can implement multiple interfaces, making them a key part of Java’s multiple inheritance.
    </p>
  </div>
</section>
<section className="mb-12">
  <h2 className="text-3xl font-bold text-blue-700 mb-6">🧰 Exception Handling & Packages in Java</h2>

  {/* Exception Handling - Theory */}
  <div className="bg-white light:bg-[#1e293b] rounded-2xl shadow-md p-6 mb-6 border border-gray-200 light:border-gray-700">
    <h3 className="text-2xl font-semibold text-blue-600 mb-2">📌 What is Exception Handling?</h3>
    <p className="text-base leading-relaxed">
      Exception handling in Java allows a program to deal with unexpected events (runtime errors) without crashing. It ensures the program remains in a stable state.
    </p>
    <ul className="list-disc pl-6 mt-2">
      <li><strong>try:</strong> Wraps code that may throw an exception.</li>
      <li><strong>catch:</strong> Catches and handles the exception.</li>
      <li><strong>finally:</strong> Executes code regardless of an exception occurring.</li>
      <li><strong>throw:</strong> Manually throw an exception.</li>
      <li><strong>throws:</strong> Declares exceptions a method may throw.</li>
    </ul>
  </div>

  {/* Exception Handling - Code Example */}
  <div className="bg-white light:bg-[#1e293b] rounded-2xl shadow-md p-6 mb-6 border border-gray-200 light:border-gray-700">
    <h3 className="text-xl font-semibold text-teal-600 mb-2">💡 Example: Try-Catch-Finally</h3>
    <pre className="bg-gray-100 light:bg-gray-800 p-4 rounded text-sm overflow-x-auto">
{`public class ExceptionExample {
  public static void main(String[] args) {
    try {
      int result = 10 / 0;
      System.out.println("Result: " + result);
    } catch (ArithmeticException e) {
      System.out.println("Exception: " + e.getMessage());
    } finally {
      System.out.println("Always executed.");
    }
  }
}`}
    </pre>
  </div>

  {/* Custom Exception */}
  <div className="bg-white light:bg-[#1e293b] rounded-2xl shadow-md p-6 mb-6 border border-gray-200 light:border-gray-700">
    <h3 className="text-xl font-semibold text-teal-600 mb-2">🚨 Creating a Custom Exception</h3>
    <pre className="bg-gray-100 light:bg-gray-800 p-4 rounded text-sm overflow-x-auto">
{`class MyException extends Exception {
  public MyException(String message) {
    super(message);
  }
}

public class Test {
  public static void main(String[] args) {
    try {
      throw new MyException("This is a custom exception!");
    } catch (MyException e) {
      System.out.println("Caught: " + e.getMessage());
    }
  }
}`}
    </pre>
  </div>

  {/* Packages - Theory */}
  <div className="bg-white light:bg-[#1e293b] rounded-2xl shadow-md p-6 mb-6 border border-gray-200 light:border-gray-700">
    <h3 className="text-2xl font-semibold text-blue-600 mb-2">📦 What are Packages?</h3>
    <p className="text-base leading-relaxed">
      A package in Java is a namespace that organizes related classes and interfaces. Think of it like a folder for your Java files.
    </p>
    <ul className="list-disc pl-6 mt-2">
      <li>Helps avoid class name conflicts</li>
      <li>Provides access protection</li>
      <li>Controls visibility of classes and members</li>
    </ul>
  </div>

  {/* Packages - Example */}
  <div className="bg-white light:bg-[#1e293b] rounded-2xl shadow-md p-6 mb-6 border border-gray-200 light:border-gray-700">
    <h3 className="text-xl font-semibold text-teal-600 mb-2">📁 Creating and Using a Package</h3>
    <pre className="bg-gray-100 light:bg-gray-800 p-4 rounded text-sm overflow-x-auto">
{`// File: mypack/Message.java
package mypack;
public class Message {
  public void greet() {
    System.out.println("Hello from package!");
  }
}

// File: TestPackage.java
import mypack.Message;

public class TestPackage {
  public static void main(String[] args) {
    Message msg = new Message();
    msg.greet();
  }
}`}
    </pre>
  </div>
</section>
 <section className="px-6 py-12 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-teal-700 mb-8">🚀 Advanced Java Topics</h1>

      {/* Multithreading */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-8 border-l-4 border-purple-400">
        <h2 className="text-2xl font-semibold text-teal-600 mb-2">🔷 Multithreading</h2>
        <p className="mb-4">
          Multithreading allows concurrent execution of two or more threads. Java provides the <code>Thread</code> class and the <code>Runnable</code> interface to create and manage threads.
        </p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-auto text-sm">
{`class MyThread extends Thread {
  public void run() {
    System.out.println("Thread is running...");
  }
  public static void main(String[] args) {
    MyThread t1 = new MyThread();
    t1.start();
  }
}`}
        </pre>
      </div>

      {/* Collections Framework */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-8 border-l-4 border-purple-400">
        <h2 className="text-2xl font-semibold text-teal-600 mb-2">🔷 Collections Framework</h2>
        <p className="mb-4">
          The Java Collections Framework provides a set of interfaces and classes like <code>List</code>, <code>Set</code>, <code>Map</code>, and <code>Queue</code> for storing and manipulating data efficiently.
        </p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-auto text-sm">
{`import java.util.*;
public class Example {
  public static void main(String[] args) {
    List<String> list = new ArrayList<>();
    list.add("Java");
    list.add("Python");
    for (String s : list) {
      System.out.println(s);
    }
  }
}`}
        </pre>
      </div>

      {/* File I/O */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-8 border-l-4 border-purple-400">
        <h2 className="text-2xl font-semibold text-teal-600 mb-2">🔷 File I/O in Java</h2>
        <p className="mb-4">
          Java provides classes like <code>File</code>, <code>FileReader</code>, <code>BufferedReader</code>, and <code>FileWriter</code> to handle file input and output operations.
        </p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-auto text-sm">
{`import java.io.*;
public class FileReadExample {
  public static void main(String[] args) throws IOException {
    BufferedReader reader = new BufferedReader(new FileReader("file.txt"));
    String line;
    while ((line = reader.readLine()) != null) {
      System.out.println(line);
    }
    reader.close();
  }
}`}
        </pre>
      </div>

      {/* Java GUI with Swing */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-8 border-l-4 border-purple-400">
        <h2 className="text-2xl font-semibold text-teal-600 mb-2">🔷 Java GUI (Swing)</h2>
        <p className="mb-4">
          Swing is a part of Java Foundation Classes (JFC) used to create window-based applications. It provides GUI components like <code>JButton</code>, <code>JFrame</code>, and <code>JLabel</code>.
        </p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-auto text-sm">
{`import javax.swing.*;
public class MyFrame {
  public static void main(String[] args) {
    JFrame frame = new JFrame("Hello Swing");
    JButton button = new JButton("Click Me");
    frame.add(button);
    frame.setSize(300, 200);
    frame.setLayout(null);
    button.setBounds(100, 80, 100, 40);
    frame.setVisible(true);
  }
}`}
        </pre>
      </div>

      {/* Java 8 Features */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-8 border-l-4 border-purple-400">
        <h2 className="text-2xl font-semibold text-teal-600 mb-2">🔷 Java 8 Features (Lambda, Streams)</h2>
        <p className="mb-4">
          Java 8 introduced powerful features like Lambda expressions, Stream API, functional interfaces, and more.
        </p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-auto text-sm">
{`import java.util.*;
public class LambdaExample {
  public static void main(String[] args) {
    List<String> names = Arrays.asList("Java", "Python", "C++");
    names.forEach(name -> System.out.println(name));
  }
}`}
        </pre>
      </div>

      {/* Interview Questions */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-8 border-l-4 border-purple-600">
        <h2 className="text-2xl font-semibold text-teal-700 mb-2">🎯 Common Java Interview Questions</h2>
        <ul className="list-disc pl-6 text-lg space-y-2">
          <li>What is the difference between abstract class and interface?</li>
          <li>Explain the concept of multithreading in Java.</li>
          <li>How does Java achieve platform independence?</li>
          <li>What are lambda expressions and where are they used?</li>
          <li>How do you handle exceptions in Java?</li>
          <li>Explain the difference between HashMap and Hashtable.</li>
          <li>What is the use of the <code>final</code> keyword?</li>
        </ul>
      </div>

      {/* Conclusion */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mt-8 border-l-4 border-green-500">
        <h2 className="text-2xl font-bold text-green-600 mb-2">📘 Conclusion</h2>
        <p className="text-lg leading-relaxed">
          Java remains one of the most popular and versatile programming languages in the industry. Mastering core concepts like OOP, exception handling, collections, and newer additions like Lambda expressions can make you proficient in backend development, desktop apps, and Android development. Practice consistently and build real-world projects to strengthen your skills.
        </p>
      </div>
    </section>
    </div>
  );
};

export default JavaBasics;
