const CIntroduction = () => {
  return (
    <div className="card max-w-6xl mx-auto px-6 py-12 text-gray-800 light:text-gray-200">
      <h1 className="text-4xl font-extrabold text-teal-700 mb-6 border-b-4 border-teal-700 pb-2">
        🔰 Introduction to C Programming
      </h1>

      {/* What is C? */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-teal-600 mb-2">💡 What is C?</h2>
        <p className="text-lg leading-relaxed">
          C is a powerful and widely-used general-purpose programming language developed in the early 1970s by Dennis Ritchie at Bell Labs. It was designed to write system software but quickly became popular for developing application software as well due to its performance, portability, and simplicity.
        </p>
      </section>

      {/* Why Learn C? */}
      <section className="mb-10 border-t pt-6">
        <h2 className="text-2xl font-bold text-teal-600 mb-2">🚀 Why Learn C?</h2>
        <p className="text-lg leading-relaxed">
          C provides deep insight into how software interacts with hardware. It's the foundation of many modern languages like C++, Java, and Python. Learning C strengthens your grasp of memory management, pointer operations, and low-level computation — skills vital for systems programming, embedded systems, and operating systems.
        </p>
      </section>

      {/* History of C */}
      <section className="mb-10 border-t pt-6">
        <h2 className="text-2xl font-bold text-teal-600 mb-2">📜 History of C Language</h2>
        <p className="text-lg leading-relaxed">
          C evolved from the B language (itself influenced by BCPL). It was developed at Bell Labs in 1972 as part of the Unix project. Over the years, C has become a standard in software development. The ANSI standardization in 1989 (ANSI C) and the ISO version solidified its place in academia and industry.
        </p>
      </section>

      {/* Features */}
      <section className="mb-10 border-t pt-6">
        <h2 className="text-2xl font-bold text-teal-600 mb-2">🌟 Key Features of C</h2>
        <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
          <li><strong>Simple & Efficient:</strong> Offers a small set of keywords and syntax for powerful programming.</li>
          <li><strong>Structured:</strong> Supports functions, loops, and conditionals to write clean and modular code.</li>
          <li><strong>Low-level Access:</strong> Allows pointer manipulation and direct memory access.</li>
          <li><strong>Fast & Lightweight:</strong> Generates efficient machine code, ideal for performance-critical applications.</li>
          <li><strong>Portable:</strong> Programs written in C can be compiled and run on different machines with minimal changes.</li>
        </ul>
      </section>

      {/* Setting Up the Environment */}
      <section className="mb-10 border-t pt-6">
        <h2 className="text-2xl font-bold text-teal-600 mb-2">🛠️ Setting Up the Development Environment</h2>
        <p className="text-lg leading-relaxed mb-4">
          To begin writing C programs, you need:
        </p>
        <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
          <li><strong>Compiler:</strong> GCC (GNU Compiler Collection) is the most popular open-source compiler.</li>
          <li><strong>Editor/IDE:</strong> You can use VS Code, Code::Blocks, Turbo C, or any text editor.</li>
          <li><strong>Terminal:</strong> Useful for compiling and running C programs using CLI (e.g., <code>gcc hello.c -o hello</code>).</li>
        </ul>
        <p className="text-lg mt-4">
          On Windows, install <strong>MinGW</strong> to get GCC. On Linux/macOS, GCC is typically pre-installed or available via package managers.
        </p>
      </section>
       <section className="mb-12">
        <h2 className="text-2xl font-bold text-teal-600 mb-2">🧮 Variables and Constants</h2>
        <p className="text-lg leading-relaxed">
          Variables are named memory locations used to store data during program execution. Constants are fixed values that do not change throughout the program.
        </p>

        <h3 className="text-xl font-semibold text-teal-500 mt-4 mb-2">🧠 Syntax:</h3>
        <pre className="bg-gray-100 light:bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`int age = 25;     // Variable
const float pi = 3.14;  // Constant`}</code>
        </pre>

        <h3 className="text-xl font-semibold text-teal-500 mt-4 mb-2">💻 Example:</h3>
        <pre className="bg-gray-100 light:bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`#include <stdio.h>

int main() {
    int marks = 90;
    const float pi = 3.14;
    printf("Marks: %d\\n", marks);
    printf("Value of Pi: %.2f", pi);
    return 0;
}`}</code>
        </pre>
      </section>

      {/* Data Types */}
      <section className="mb-12 border-t pt-6">
        <h2 className="text-2xl font-bold text-teal-600 mb-2">🔤 Data Types in C</h2>
        <p className="text-lg leading-relaxed mb-4">
          C provides several built-in data types. These are used to declare variables and allocate memory for them.
        </p>
        <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
          <li><strong>int</strong> – for integers (e.g., 10, -5)</li>
          <li><strong>float</strong> – for decimal numbers (e.g., 3.14)</li>
          <li><strong>double</strong> – for high-precision decimal numbers</li>
          <li><strong>char</strong> – for single characters (e.g., 'A')</li>
          <li><strong>void</strong> – represents no value (used in functions)</li>
        </ul>

        <h3 className="text-xl font-semibold text-teal-500 mt-4 mb-2">💻 Example:</h3>
        <pre className="bg-gray-100 light:bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`#include <stdio.h>

int main() {
    int age = 21;
    float height = 5.9;
    char grade = 'A';

    printf("Age: %d\\n", age);
    printf("Height: %.1f\\n", height);
    printf("Grade: %c", grade);
    return 0;
}`}</code>
        </pre>
      </section>

      {/* Operators */}
      <section className="mb-12 border-t pt-6">
        <h2 className="text-2xl font-bold text-teal-600 mb-2">➕ Operators and Expressions</h2>
        <p className="text-lg leading-relaxed mb-4">
          Operators are used to perform operations on variables and values. An expression combines variables, constants, and operators to produce a result.
        </p>
        <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
          <li><strong>Arithmetic:</strong> +, -, *, /, %</li>
          <li><strong>Relational:</strong> ==, !=, &gt;, &lt;, &gt;=, &lt;=</li>
          <li><strong>Logical:</strong> &&, ||, !</li>
          <li><strong>Assignment:</strong> =, +=, -=, *=, /=</li>
          <li><strong>Increment/Decrement:</strong> ++, --</li>
        </ul>

        <h3 className="text-xl font-semibold text-teal-500 mt-4 mb-2">💻 Example:</h3>
        <pre className="bg-gray-100 light:bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`#include <stdio.h>

int main() {
    int a = 10, b = 5;
    printf("Addition: %d\\n", a + b);
    printf("Comparison: %d\\n", a > b);
    printf("Logical AND: %d", (a > 0) && (b > 0));
    return 0;
}`}</code>
        </pre>
      </section>

      {/* Input/Output */}
      <section className="mb-12 border-t pt-6">
        <h2 className="text-2xl font-bold text-teal-600 mb-2">🖨️ Input and Output</h2>
        <p className="text-lg leading-relaxed mb-4">
          Input and output in C are handled using standard library functions:
        </p>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li><strong>printf()</strong> – outputs data to the console</li>
          <li><strong>scanf()</strong> – reads input from the user</li>
          <li><strong>getchar(), putchar()</strong> – character I/O</li>
        </ul>

        <h3 className="text-xl font-semibold text-teal-500 mt-4 mb-2">💻 Example:</h3>
        <pre className="bg-gray-100 light:bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`#include <stdio.h>

int main() {
    int number;
    printf("Enter a number: ");
    scanf("%d", &number);
    printf("You entered: %d", number);
    return 0;
}`}</code>
        </pre>
      </section>
      {/* Conclusion */}
      <section className="mb-10 border-t pt-6">
        <h2 className="text-2xl font-bold text-teal-600 mb-2">📌 Summary</h2>
        <p className="text-lg leading-relaxed">
          C is the backbone of modern programming languages. By mastering C, you gain the foundational knowledge needed to write efficient code and understand how software interacts with hardware. Before jumping into advanced languages, learning C provides a solid grounding in computer science principles.
        </p>
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-teal-600 mb-2">🧠 Conditional Statements</h2>
        <p className="text-lg leading-relaxed mb-4">
          Conditional statements allow your program to make decisions and execute code blocks based on certain conditions.
        </p>

        <h3 className="text-xl font-semibold text-teal-500 mb-2">1. if...else</h3>
        <p className="text-lg mb-2">
          Executes one block of code if the condition is true; otherwise another.
        </p>
        <pre className="bg-gray-100 light:bg-gray-900 p-4 rounded-lg text-sm">
          <code>{`int num = 5;
if (num > 0) {
    printf("Positive number");
} else {
    printf("Negative number or zero");
}`}</code>
        </pre>

        <h3 className="text-xl font-semibold text-teal-500 mt-6 mb-2">2. else if Ladder</h3>
        <pre className="bg-gray-100 light:bg-gray-900 p-4 rounded-lg text-sm">
          <code>{`int score = 75;
if (score >= 90)
    printf("Grade A");
else if (score >= 75)
    printf("Grade B");
else
    printf("Grade C");`}</code>
        </pre>

        <h3 className="text-xl font-semibold text-teal-500 mt-6 mb-2">3. switch...case</h3>
        <p className="text-lg mb-2">
          A cleaner alternative to multiple if-else when checking fixed values.
        </p>
        <pre className="bg-gray-100 light:bg-gray-900 p-4 rounded-lg text-sm">
          <code>{`int day = 3;
switch (day) {
    case 1: printf("Monday"); break;
    case 2: printf("Tuesday"); break;
    case 3: printf("Wednesday"); break;
    default: printf("Other Day");
}`}</code>
        </pre>
      </section>

      {/* Loops */}
      <section className="mb-12 border-t pt-6">
        <h2 className="text-2xl font-bold text-teal-600 mb-2">🔁 Looping Statements</h2>
        <p className="text-lg leading-relaxed mb-4">
          Loops are used to repeat a block of code multiple times until a condition is met.
        </p>

        <h3 className="text-xl font-semibold text-teal-500 mb-2">1. for Loop</h3>
        <pre className="bg-gray-100 light:bg-gray-900 p-4 rounded-lg text-sm">
          <code>{`for (int i = 1; i <= 5; i++) {
    printf("%d\\n", i);
}`}</code>
        </pre>

        <h3 className="text-xl font-semibold text-teal-500 mt-6 mb-2">2. while Loop</h3>
        <pre className="bg-gray-100 light:bg-gray-900 p-4 rounded-lg text-sm">
          <code>{`int i = 1;
while (i <= 5) {
    printf("%d\\n", i);
    i++;
}`}</code>
        </pre>

        <h3 className="text-xl font-semibold text-teal-500 mt-6 mb-2">3. do...while Loop</h3>
        <p className="text-lg mb-2">
          Executes the block at least once before checking the condition.
        </p>
        <pre className="bg-gray-100 light:bg-gray-900 p-4 rounded-lg text-sm">
          <code>{`int i = 1;
do {
    printf("%d\\n", i);
    i++;
} while (i <= 5);`}</code>
        </pre>
      </section>

      {/* Jump Statements */}
      <section className="mb-12 border-t pt-6">
        <h2 className="text-2xl font-bold text-teal-600 mb-2">🚀 Jump Statements</h2>
        <p className="text-lg leading-relaxed mb-4">
          Jump statements are used to alter the normal flow of execution in loops and conditionals.
        </p>

        <h3 className="text-xl font-semibold text-teal-500 mb-2">1. break</h3>
        <p className="text-lg mb-2">
          Terminates the loop or switch-case.
        </p>
        <pre className="bg-gray-100 light:bg-gray-900 p-4 rounded-lg text-sm">
          <code>{`for (int i = 1; i <= 10; i++) {
    if (i == 5)
        break;
    printf("%d\\n", i);
}`}</code>
        </pre>

        <h3 className="text-xl font-semibold text-teal-500 mt-6 mb-2">2. continue</h3>
        <p className="text-lg mb-2">
          Skips current iteration and proceeds to the next loop cycle.
        </p>
        <pre className="bg-gray-100 light:bg-gray-900 p-4 rounded-lg text-sm">
          <code>{`for (int i = 1; i <= 5; i++) {
    if (i == 3)
        continue;
    printf("%d\\n", i);
}`}</code>
        </pre>

        <h3 className="text-xl font-semibold text-teal-500 mt-6 mb-2">3. goto</h3>
        <p className="text-lg mb-2">
          Transfers control to a labeled statement. Use with caution.
        </p>
        <pre className="bg-gray-100 light:bg-gray-900 p-4 rounded-lg text-sm">
          <code>{`int x = 1;
if (x < 5)
    goto skip;

printf("This won't be printed");

skip:
printf("Jumped to label!");`}</code>
        </pre>
      </section>
       <section className="mb-12">
        <h2 className="text-2xl font-bold text-teal-600 mb-2">📦 Arrays in C</h2>
        <p className="text-lg leading-relaxed mb-4">
          An array is a collection of elements of the same data type stored in contiguous memory locations. Arrays can be 1D, 2D, or multidimensional.
        </p>

        <h3 className="text-xl font-semibold text-teal-500 mb-2">1. One-Dimensional Array</h3>
        <pre className="bg-gray-100 light:bg-gray-900 p-4 rounded-lg text-sm">
          <code>{`int marks[5] = {90, 80, 85, 70, 95};
for (int i = 0; i < 5; i++) {
    printf("Mark %d: %d\\n", i+1, marks[i]);
}`}</code>
        </pre>

        <h3 className="text-xl font-semibold text-teal-500 mt-6 mb-2">2. Two-Dimensional Array</h3>
        <pre className="bg-gray-100 light:bg-gray-900 p-4 rounded-lg text-sm">
          <code>{`int matrix[2][3] = {{1, 2, 3}, {4, 5, 6}};
for (int i = 0; i < 2; i++) {
    for (int j = 0; j < 3; j++) {
        printf("%d ", matrix[i][j]);
    }
    printf("\\n");
}`}</code>
        </pre>
      </section>

      {/* Strings */}
      <section className="mb-12 border-t pt-6">
        <h2 className="text-2xl font-bold text-teal-600 mb-2">🔤 Strings in C</h2>
        <p className="text-lg leading-relaxed mb-4">
          Strings in C are arrays of characters terminated with a null character (`\0`). C provides several standard library functions to manipulate strings.
        </p>

        <h3 className="text-xl font-semibold text-teal-500 mb-2">Common String Functions:</h3>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li><strong>strlen(s)</strong> – Returns length of string</li>
          <li><strong>strcpy(dest, src)</strong> – Copies one string to another</li>
          <li><strong>strcat(s1, s2)</strong> – Concatenates two strings</li>
          <li><strong>strcmp(s1, s2)</strong> – Compares two strings</li>
        </ul>

        <h3 className="text-xl font-semibold text-teal-500 mt-4 mb-2">💻 Example:</h3>
        <pre className="bg-gray-100 light:bg-gray-900 p-4 rounded-lg text-sm">
          <code>{`#include <stdio.h>
#include <string.h>

int main() {
    char str1[20] = "Hello";
    char str2[] = "World";

    strcat(str1, str2);  // Concatenate
    printf("Concatenated: %s\\n", str1);

    printf("Length: %lu\\n", strlen(str1));
    printf("Compare: %d", strcmp(str1, "HelloWorld"));
    return 0;
}`}</code>
        </pre>
      </section>

      {/* Functions */}
      <section className="mb-12 border-t pt-6">
        <h2 className="text-2xl font-bold text-teal-600 mb-2">🔁 Functions in C</h2>
        <p className="text-lg leading-relaxed mb-4">
          Functions allow modular and reusable code. You define a function once and call it many times.
        </p>

        <h3 className="text-xl font-semibold text-teal-500 mb-2">1. Function Declaration and Definition</h3>
        <pre className="bg-gray-100 light:bg-gray-900 p-4 rounded-lg text-sm">
          <code>{`int add(int a, int b) {
    return a + b;
}

int main() {
    int result = add(5, 3);
    printf("Sum: %d", result);
    return 0;
}`}</code>
        </pre>

        <h3 className="text-xl font-semibold text-teal-500 mt-6 mb-2">2. Recursion</h3>
        <p className="text-lg mb-2">
          A function calling itself is recursion. Useful for problems like factorial, Fibonacci, etc.
        </p>
        <pre className="bg-gray-100 light:bg-gray-900 p-4 rounded-lg text-sm">
          <code>{`int factorial(int n) {
    if (n == 0)
        return 1;
    else
        return n * factorial(n - 1);
}

int main() {
    printf("Factorial of 5: %d", factorial(5));
    return 0;
}`}</code>
        </pre>
      </section>

      {/* Storage Classes */}
      <section className="mb-12 border-t pt-6">
        <h2 className="text-2xl font-bold text-teal-600 mb-2">🧭 Storage Classes in C</h2>
        <p className="text-lg leading-relaxed mb-4">
          Storage classes define the scope, lifetime, and visibility of variables. C has four storage classes:
        </p>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li><strong>auto</strong> – Default for local variables, limited to block scope.</li>
          <li><strong>register</strong> – Suggests storing variable in CPU register (faster access).</li>
          <li><strong>static</strong> – Retains value between function calls, used for global lifetime with limited visibility.</li>
          <li><strong>extern</strong> – Declares global variable defined in another file.</li>
        </ul>

        <h3 className="text-xl font-semibold text-teal-500 mt-4 mb-2">💻 Example (static):</h3>
        <pre className="bg-gray-100 light:bg-gray-900 p-4 rounded-lg text-sm">
          <code>{`void counter() {
    static int count = 0;
    count++;
    printf("Count = %d\\n", count);
}

int main() {
    counter();
    counter();
    counter(); // Output: 1 2 3
    return 0;
}`}</code>
        </pre>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-2">🔹 Command Line Arguments</h2>
        <p className="mb-4">
          Command-line arguments allow the user to pass parameters to the program at runtime. These are handled by the <code>main()</code> function using two parameters: <code>int argc</code> and <code>char *argv[]</code>.
        </p>
        <pre className="bg-gray-900 text-green-200 p-4 rounded overflow-x-auto text-sm mb-4">
{`#include <stdio.h>

int main(int argc, char *argv[]) {
    printf("Program name: %s\\n", argv[0]);
    for(int i = 1; i < argc; i++) {
        printf("Arg %d: %s\\n", i, argv[i]);
    }
    return 0;
}`}
        </pre>
        <p>Run: <code>./a.out hello world</code> → Output: Arg 1: hello, Arg 2: world</p>
      </section>

      {/* Bit Manipulation */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-2">🔹 Bit Manipulation</h2>
        <p className="mb-4">Used to optimize performance, especially in embedded systems. Common bitwise operators: <code>&</code>, <code>|</code>, <code>^</code>, <code>~</code>, <code>&lt;&lt;</code>, <code>&gt;&gt;</code>.</p>
        <pre className="bg-gray-900 text-green-200 p-4 rounded overflow-x-auto text-sm">
{`int a = 5;  // 0101
int b = 3;  // 0011
printf("%d", a & b);  // 1 (0001)`}
        </pre>
      </section>

      {/* Macros and Preprocessors */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-2">🔹 Macros & Preprocessor Directives</h2>
        <p className="mb-4">Macros replace code before compilation. Common directives: <code>#define</code>, <code>#include</code>, <code>#ifdef</code>, <code>#endif</code>.</p>
        <pre className="bg-gray-900 text-green-200 p-4 rounded overflow-x-auto text-sm">
{`#define PI 3.14
#define AREA(r) (PI * (r) * (r))

printf("%f", AREA(5));`}
        </pre>
      </section>

      {/* Dynamic Memory Allocation */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-2">🔹 Dynamic Memory Allocation</h2>
        <p className="mb-4">Memory is allocated at runtime using <code>malloc()</code>, <code>calloc()</code>, <code>realloc()</code>, and <code>free()</code>.</p>
        <pre className="bg-gray-900 text-green-200 p-4 rounded overflow-x-auto text-sm">
{`int *ptr = (int *)malloc(5 * sizeof(int));
if (ptr == NULL) {
    printf("Memory allocation failed");
}
free(ptr);`}
        </pre>
      </section>

      {/* Structures and Unions */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-2">🔹 Structures & Unions</h2>
        <p className="mb-4">Structures group different data types. Unions share memory for different members.</p>
        <pre className="bg-gray-900 text-green-200 p-4 rounded overflow-x-auto text-sm">
{`struct Student {
  int id;
  char name[20];
};

union Data {
  int i;
  float f;
};`}
        </pre>
      </section>

      {/* File Handling */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-2">🔹 File Handling</h2>
        <p className="mb-4">Use file pointers to handle files: <code>FILE *</code>, <code>fopen()</code>, <code>fclose()</code>, <code>fprintf()</code>, <code>fscanf()</code>.</p>
        <pre className="bg-gray-900 text-green-200 p-4 rounded overflow-x-auto text-sm">
{`FILE *fp = fopen("data.txt", "w");
fprintf(fp, "Hello World!");
fclose(fp);`}
        </pre>
      </section>

      {/* Function Pointers */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-2">🔹 Function Pointers</h2>
        <p className="mb-4">Used for callbacks and implementing polymorphism in C.</p>
        <pre className="bg-gray-900 text-green-200 p-4 rounded overflow-x-auto text-sm">
{`void hello() {
  printf("Hello\\n");
}
void (*func_ptr)() = hello;
func_ptr();`}
        </pre>
      </section>

      {/* Double Pointers */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-2">🔹 Double Pointers</h2>
        <p className="mb-4">A pointer to a pointer, useful in dynamic memory allocation and 2D arrays.</p>
        <pre className="bg-gray-900 text-green-200 p-4 rounded overflow-x-auto text-sm">
{`int **ptr;
ptr = (int **)malloc(5 * sizeof(int *));
for(int i = 0; i < 5; i++)
    ptr[i] = (int *)malloc(5 * sizeof(int));`}
        </pre>
      </section>

      {/* Linked Lists */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-2">🔹 Linked Lists (Singly)</h2>
        <p className="mb-4">A dynamic data structure where each node points to the next.</p>
        <pre className="bg-gray-900 text-green-200 p-4 rounded overflow-x-auto text-sm">
{`struct Node {
  int data;
  struct Node* next;
};`}
        </pre>
      </section>

      {/* Debugging */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-2">🔹 Debugging (GDB)</h2>
        <p className="mb-4">Use <code>gdb</code> to debug line-by-line: <code>break</code>, <code>next</code>, <code>print</code>, <code>run</code>, <code>quit</code>.</p>
        <pre className="bg-gray-900 text-green-200 p-4 rounded overflow-x-auto text-sm">
{`gcc -g program.c -o program
gdb ./program`}
        </pre>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-2">🔰 Introduction</h2>
        <p className="text-lg mb-2">
          Data Structures are essential for organizing and storing data efficiently. In C, we use structures, pointers, and memory management functions to implement common data structures like Linked Lists, Stacks, Queues, Trees, and Graphs.
        </p>
      </section>

      {/* Linked List */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-2">📌 Linked List</h2>
        <p className="text-lg mb-4">
          A Linked List is a dynamic data structure where each element (node) contains data and a pointer to the next node.
        </p>

        <h3 className="text-xl font-semibold text-teal-500 mb-1">➡️ Singly Linked List</h3>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-auto mb-4 text-sm">
{`struct Node {
  int data;
  struct Node* next;
};

void printList(struct Node* head) {
  while (head != NULL) {
    printf("%d -> ", head->data);
    head = head->next;
  }
  printf("NULL\\n");
}`}
        </pre>

        <h3 className="text-xl font-semibold text-teal-500 mb-1">➡️ Doubly Linked List</h3>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-auto mb-4 text-sm">
{`struct DNode {
  int data;
  struct DNode* prev;
  struct DNode* next;
};`}
        </pre>

        <h3 className="text-xl font-semibold text-teal-500 mb-1">➡️ Circular Linked List</h3>
        <p className="text-lg mb-2">
          In a circular linked list, the last node points back to the head.
        </p>
      </section>

      {/* Stack */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-2">📌 Stack</h2>
        <p className="text-lg mb-2">
          A Stack follows LIFO (Last-In-First-Out). Common operations are <code>push()</code> and <code>pop()</code>.
        </p>

        <h3 className="text-xl font-semibold text-teal-500 mb-1">➡️ Array Implementation</h3>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-auto mb-4 text-sm">
{`#define SIZE 100
int stack[SIZE];
int top = -1;

void push(int val) {
  if (top < SIZE - 1) {
    stack[++top] = val;
  }
}

int pop() {
  return (top >= 0) ? stack[top--] : -1;
}`}
        </pre>

        <h3 className="text-xl font-semibold text-teal-500 mb-1">➡️ Linked List Implementation</h3>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-auto mb-4 text-sm">
{`struct Node {
  int data;
  struct Node* next;
};

void push(struct Node** top, int val) {
  struct Node* newNode = malloc(sizeof(struct Node));
  newNode->data = val;
  newNode->next = *top;
  *top = newNode;
}`}
        </pre>
      </section>

      {/* Queue */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-2">📌 Queue</h2>
        <p className="text-lg mb-2">
          A Queue follows FIFO (First-In-First-Out). Operations are <code>enqueue()</code> and <code>dequeue()</code>.
        </p>

        <h3 className="text-xl font-semibold text-teal-500 mb-1">➡️ Array Implementation</h3>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-auto mb-4 text-sm">
{`#define SIZE 100
int queue[SIZE];
int front = 0, rear = -1;

void enqueue(int val) {
  if (rear < SIZE - 1) queue[++rear] = val;
}

int dequeue() {
  return (front <= rear) ? queue[front++] : -1;
}`}
        </pre>
      </section>

      {/* Trees */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-2">📌 Trees</h2>
        <p className="text-lg mb-2">
          Trees are hierarchical data structures. The Binary Tree is most commonly used.
        </p>

        <h3 className="text-xl font-semibold text-teal-500 mb-1">➡️ Binary Tree Node</h3>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-auto mb-4 text-sm">
{`struct TreeNode {
  int data;
  struct TreeNode* left;
  struct TreeNode* right;
};`}
        </pre>

        <h3 className="text-xl font-semibold text-teal-500 mb-1">➡️ Inorder Traversal (LNR)</h3>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-auto mb-4 text-sm">
{`void inorder(struct TreeNode* root) {
  if (root != NULL) {
    inorder(root->left);
    printf("%d ", root->data);
    inorder(root->right);
  }
}`}
        </pre>
      </section>

      {/* Graphs */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-2">📌 Graphs</h2>
        <p className="text-lg mb-2">
          Graphs consist of vertices and edges. Common representations are:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li>Adjacency Matrix</li>
          <li>Adjacency List</li>
        </ul>

        <h3 className="text-xl font-semibold text-teal-500 mb-1">➡️ Adjacency Matrix Example</h3>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-auto mb-4 text-sm">
{`int graph[5][5] = {
  {0, 1, 0, 0, 1},
  {1, 0, 1, 0, 0},
  {0, 1, 0, 1, 0},
  {0, 0, 1, 0, 1},
  {1, 0, 0, 1, 0}
};`}
        </pre>

        <h3 className="text-xl font-semibold text-teal-500 mb-1">➡️ Depth First Search (DFS)</h3>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-auto text-sm">
{`void DFS(int v, int visited[], int graph[5][5]) {
  visited[v] = 1;
  printf("%d ", v);
  for (int i = 0; i < 5; i++) {
    if (graph[v][i] == 1 && !visited[i])
      DFS(i, visited, graph);
  }
}`}
        </pre>
      </section>
      {/* Pointers */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-teal-600 mb-4">🔗 Pointers in C</h2>
        <p className="mb-4 text-lg">
          Pointers are variables that store the address of another variable. They are crucial for memory management and dynamic data structures in C.
        </p>

        <h3 className="text-2xl font-semibold text-teal-500 mb-2">👉 Declaration & Initialization</h3>
        <p className="mb-2">A pointer is declared using the <code>*</code> operator:</p>
        <pre className="bg-gray-100 p-4 rounded mb-4">
{`int x = 10;
int *p = &x;  // p holds address of x
printf("%d", *p);  // prints value at address, i.e., 10`}
        </pre>

        <h3 className="text-2xl font-semibold text-teal-500 mb-2">👉 Pointer Arithmetic</h3>
        <p className="mb-2">You can increment or decrement a pointer to traverse arrays:</p>
        <pre className="bg-gray-100 p-4 rounded mb-4">
{`int arr[] = {1, 2, 3};
int *p = arr;
printf("%d", *(p + 1)); // prints 2`}
        </pre>

        <h3 className="text-2xl font-semibold text-teal-500 mb-2">👉 Pointers and Functions</h3>
        <p className="mb-2">Functions can accept pointers to change values outside their scope:</p>
        <pre className="bg-gray-100 p-4 rounded mb-4">
{`void update(int *p) {
  *p = 20;
}

int main() {
  int a = 10;
  update(&a);
  printf("%d", a);  // Output: 20
}`}
        </pre>

        <h3 className="text-2xl font-semibold text-teal-500 mb-2">👉 Double Pointers & Dangling Pointers</h3>
        <pre className="bg-gray-100 p-4 rounded mb-4">
{`int x = 5;
int *p = &x;
int **pp = &p;
printf("%d", **pp);  // Output: 5

// Dangling pointer
int *dp;
{
  int y = 10;
  dp = &y;
}
// y is now out of scope, dp is dangling`}
        </pre>
      </section>

      {/* Dynamic Memory Allocation */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-teal-600 mb-4">📦 Dynamic Memory Allocation</h2>
        <p className="mb-4 text-lg">
          Dynamic memory allows allocation during runtime using the standard library functions in <code>&lt;stdlib.h&gt;</code>.
        </p>

        <ul className="list-disc ml-6 text-lg mb-4">
          <li><code>malloc()</code>: Allocates memory of given size and returns void pointer.</li>
          <li><code>calloc()</code>: Allocates memory for an array and initializes it to 0.</li>
          <li><code>realloc()</code>: Reallocates memory block to a new size.</li>
          <li><code>free()</code>: Frees previously allocated memory.</li>
        </ul>

        <pre className="bg-gray-100 p-4 rounded mb-4">
{`int *arr;
arr = (int*) malloc(5 * sizeof(int));
if (arr == NULL) {
  printf("Memory not allocated!");
}
for (int i = 0; i < 5; i++) {
  arr[i] = i + 1;
}
free(arr);  // Always free memory after use`}
        </pre>
      </section>

      {/* File Handling */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-teal-600 mb-4">📁 File Handling in C</h2>
        <p className="mb-4 text-lg">
          File handling allows reading from and writing to files using the <code>FILE*</code> pointer and standard functions from <code>&lt;stdio.h&gt;</code>.
        </p>

        <h3 className="text-2xl font-semibold text-teal-500 mb-2">👉 File Opening Modes</h3>
        <ul className="list-disc ml-6 text-lg mb-4">
          <li><code>"r"</code>: Open for reading.</li>
          <li><code>"w"</code>: Open for writing (overwrites existing).</li>
          <li><code>"a"</code>: Append to end of file.</li>
          <li><code>"rb", "wb", "ab"</code>: Same as above but in binary mode.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-teal-500 mb-2">👉 Writing to File</h3>
        <pre className="bg-gray-100 p-4 rounded mb-4">
{`FILE *fp = fopen("data.txt", "w");
if (fp != NULL) {
  fprintf(fp, "Hello File!");
  fclose(fp);
}`}
        </pre>

        <h3 className="text-2xl font-semibold text-teal-500 mb-2">👉 Reading from File</h3>
        <pre className="bg-gray-100 p-4 rounded mb-4">
{`FILE *fp = fopen("data.txt", "r");
char ch;
if (fp != NULL) {
  while ((ch = fgetc(fp)) != EOF) {
    putchar(ch);
  }
  fclose(fp);
}`}
        </pre>

        <p className="text-lg mb-2">
          You can also use <code>fgets()</code> to read strings and <code>fscanf()</code> to read formatted input.
        </p>
      </section>
      <section>
         <h1 className="text-4xl font-bold text-teal-700 mb-6">🧩 Macros and Preprocessors in C</h1>

      <p className="mb-6 text-lg">
        The C Preprocessor (CPP) is a tool that runs before the actual compilation of code begins. It handles **macro substitutions**, **file inclusions**, and **conditional compilation**. These features improve modularity, flexibility, and cross-platform support in C programming.
      </p>

      {/* 1. What are Macros? */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-2">🔹 Macros in C</h2>
        <p className="mb-4">
          A macro is a fragment of code which has been given a name. Whenever the name is used, it is replaced by the contents of the macro. This is done by the preprocessor before actual compilation begins.
        </p>
        <pre className="bg-gray-100 rounded-md p-4 overflow-auto mb-4">
{`#define PI 3.14159

int main() {
    float radius = 5;
    float area = PI * radius * radius;
    printf("Area: %f", area);
    return 0;
}`}
        </pre>
        <p><strong>Note:</strong> Macros don't use memory like variables and have no type checking.</p>
      </section>

      {/* 2. Macro with Arguments */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-2">🔹 Macros with Arguments</h2>
        <p className="mb-4">You can define macros that accept parameters, similar to functions.</p>
        <pre className="bg-gray-100 rounded-md p-4 overflow-auto mb-4">
{`#define SQUARE(x) ((x) * (x))

int main() {
    int num = 4;
    printf("Square: %d", SQUARE(num));
    return 0;
}`}
        </pre>
        <p className="text-yellow-700">⚠️ Be careful with operator precedence while writing macro expressions!</p>
      </section>

      {/* 3. #undef */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-2">🔹 #undef Directive</h2>
        <p className="mb-4">This directive is used to undefine a macro, especially when you want to redefine it.</p>
        <pre className="bg-gray-100 rounded-md p-4 overflow-auto mb-4">
{`#define PI 3.14
#undef PI
#define PI 3.14159`}
        </pre>
      </section>

      {/* 4. File Inclusion */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-2">🔹 File Inclusion: #include</h2>
        <p className="mb-4">
          The `#include` directive tells the compiler to insert contents of another file. Used to include standard libraries or user-defined headers.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li><code>#include &lt;stdio.h&gt;</code> → Standard library</li>
          <li><code>#include "myfile.h"</code> → User-defined file in local directory</li>
        </ul>
      </section>

      {/* 5. Conditional Compilation */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-2">🔹 Conditional Compilation</h2>
        <p className="mb-4">These directives let you compile code selectively depending on certain conditions.</p>
        <pre className="bg-gray-100 rounded-md p-4 overflow-auto mb-4">
{`#define DEBUG

int main() {
#ifdef DEBUG
    printf("Debugging is enabled\\n");
#endif
    return 0;
}`}
        </pre>
        <p className="mt-4">Other directives include:</p>
        <ul className="list-disc list-inside">
          <li><code>#ifdef MACRO</code> – if macro is defined</li>
          <li><code>#ifndef MACRO</code> – if macro is not defined</li>
          <li><code>#if</code>, <code>#else</code>, <code>#elif</code>, <code>#endif</code></li>
        </ul>
      </section>

      {/* 6. Predefined Macros */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-2">🔹 Predefined Macros</h2>
        <p className="mb-4">C provides built-in macros that provide useful metadata:</p>
        <ul className="list-disc list-inside mb-4">
          <li><code>__DATE__</code>: Current date</li>
          <li><code>__TIME__</code>: Current time</li>
          <li><code>__FILE__</code>: Current file name</li>
          <li><code>__LINE__</code>: Current line number</li>
        </ul>
        <pre className="bg-gray-100 rounded-md p-4 overflow-auto">
{`printf("File: %s\\n", __FILE__);
printf("Line: %d\\n", __LINE__);
printf("Date: %s\\n", __DATE__);
printf("Time: %s\\n", __TIME__);`}
        </pre>
      </section>

      {/* 7. Macro Functions vs Inline Functions */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 mb-2">🔹 Macro Functions vs Inline Functions</h2>
        <p className="mb-4">
          Macros are faster but don’t support type checking. Inline functions (available in C99 onwards) are safer and preferred for complex logic.
        </p>
        <pre className="bg-gray-100 rounded-md p-4 overflow-auto mb-2">
{`// Macro
#define MAX(a,b) ((a) > (b) ? (a) : (b))`}
        </pre>
        <pre className="bg-gray-100 rounded-md p-4 overflow-auto">
{`// Inline function
inline int max(int a, int b) {
    return (a > b) ? a : b;
}`}
        </pre>
      </section>

      {/* Summary */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-teal-700 mt-8 mb-4">📌 Summary</h2>
        <ul className="list-disc list-inside">
          <li>Use macros for simple constants or short code fragments.</li>
          <li>Prefer inline functions for type safety and better debugging.</li>
          <li>Use conditional compilation for cross-platform support.</li>
          <li>Understand macro pitfalls like precedence, no type checks, etc.</li>
        </ul>
      </section>
      </section>
      <section>
        <h1 className="text-4xl font-bold text-teal-700 mb-6">🛠️ Command Line Arguments in C</h1>

      <p className="mb-4 text-lg">
        Command line arguments allow users to pass parameters to a program at the time of execution.
        This is widely used in real-world applications like passing file names, flags, or configuration values.
      </p>

      <h2 className="text-2xl font-semibold text-teal-600 mt-8 mb-2">🔑 What are <code>argc</code> and <code>argv</code>?</h2>
      <p className="mb-4">
        In C, the <code>main()</code> function can accept two parameters:
      </p>
      <pre className="bg-gray-100 p-4 rounded mb-4">
        <code>
          int main(int argc, char *argv[]) {"{"} <br />
          {"    // your code"} <br />
          {"}"}
        </code>
      </pre>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>argc</strong>: Argument Count - Total number of command-line arguments.</li>
        <li><strong>argv</strong>: Argument Vector - Array of strings representing the arguments.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-teal-600 mt-8 mb-2">📦 Example: Simple Echo</h2>
      <p className="mb-2">This program prints all command-line arguments:</p>
      <pre className="bg-gray-100 p-4 rounded mb-4">
        <code>
          #include &lt;stdio.h&gt;{"\n"}
          int main(int argc, char *argv[]) {"{"}{"\n"}
          {"    printf(\"Total arguments: %d\\n\", argc);"}{"\n"}
          {"    for (int i = 0; i < argc; i++) {"}{"\n"}
          {"        printf(\"Arg[%d]: %s\\n\", i, argv[i]);"}{"\n"}
          {"    }"}{"\n"}
          {"    return 0;"}{"\n"}
          {"}"}
        </code>
      </pre>

      <h2 className="text-2xl font-semibold text-teal-600 mt-8 mb-2">💡 Use Cases</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Pass file names or paths.</li>
        <li>Toggle flags like verbose/debug mode.</li>
        <li>Batch input data (e.g., arguments to math programs).</li>
        <li>Build Unix-like utilities.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-teal-600 mt-8 mb-2">⚠ Common Mistakes</h2>
      <ul className="list-disc pl-6 mb-8">
        <li>Accessing <code>argv[i]</code> without checking <code>argc</code> can lead to segmentation faults.</li>
        <li>Not converting <code>argv[i]</code> strings to numbers using <code>atoi()</code> or <code>strtol()</code> properly.</li>
      </ul>

      <h1 className="text-4xl font-bold text-teal-700 mb-6">🔧 Bitwise Operations in C</h1>
      <p className="mb-4 text-lg">
        Bitwise operators are used to manipulate individual bits of data. These are useful in low-level programming,
        embedded systems, and memory-efficient algorithms.
      </p>

      <h2 className="text-2xl font-semibold text-teal-600 mt-6 mb-2">🧮 Common Bitwise Operators</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><code>&amp;</code> AND</li>
        <li><code>|</code> OR</li>
        <li><code>^</code> XOR</li>
        <li><code>~</code> NOT</li>
        <li><code>&lt;&lt;</code> Left Shift</li>
        <li><code>&gt;&gt;</code> Right Shift</li>
      </ul>

      <h2 className="text-2xl font-semibold text-teal-600 mt-8 mb-2">📘 Example: Bit Masking</h2>
      <pre className="bg-gray-100 p-4 rounded mb-4">
        <code>
          int num = 10; {"// 1010"}{"\n"}
          int mask = 1 &lt;&lt; 1; {"// 0010"}{"\n"}
          if (num &amp; mask) {"\n"}
          {"    printf(\"Second bit is set\\n\");"}{"\n"}
          else {"\n"}
          {"    printf(\"Second bit is not set\\n\");"}
        </code>
      </pre>

      <h2 className="text-2xl font-semibold text-teal-600 mt-6 mb-2">✅ Use Cases</h2>
      <ul className="list-disc pl-6 mb-8">
        <li>Flag manipulation.</li>
        <li>Permissions in OS (e.g., read/write/execute).</li>
        <li>Efficient math operations.</li>
      </ul>

      <h1 className="text-4xl font-bold text-teal-700 mb-6">🧯 Error Handling in C</h1>
      <p className="mb-4 text-lg">
        C doesn’t provide exception handling like C++/Java, but errors are handled using return values and global error indicators.
      </p>

      <h2 className="text-2xl font-semibold text-teal-600 mt-6 mb-2">📍 errno and perror()</h2>
      <p className="mb-2">
        When a system or library call fails, <code>errno</code> is set to indicate the error.
      </p>
      <pre className="bg-gray-100 p-4 rounded mb-4">
        <code>
          #include &lt;stdio.h&gt;{"\n"}
          #include &lt;errno.h&gt;{"\n"}
          #include &lt;string.h&gt;{"\n"}
          #include &lt;stdlib.h&gt;{"\n"}
          int main() {"{"}{"\n"}
          {"    FILE *fp = fopen(\"nofile.txt\", \"r\");"}{"\n"}
          {"    if (!fp) {"}{"\n"}
          {"        perror(\"Error opening file\");"}{"\n"}
          {"        printf(\"errno: %d - %s\\n\", errno, strerror(errno));"}{"\n"}
          {"    }"}{"\n"}
          {"    return 0;"}{"\n"}
          {"}"}
        </code>
      </pre>

      <h2 className="text-2xl font-semibold text-teal-600 mt-6 mb-2">📌 Tips for Robust Error Handling</h2>
      <ul className="list-disc pl-6 mb-12">
        <li>Always check return values of system calls (e.g., <code>fopen</code>, <code>malloc</code>).</li>
        <li>Use <code>perror()</code> for meaningful messages.</li>
        <li>Use <code>strerror(errno)</code> to log specific errors.</li>
      </ul>
      </section>
      <section>
        <h1 className="text-4xl font-bold text-teal-700 mb-6">
        💡 C Programming Interview Preparation
      </h1>

      <p className="text-lg mb-4">
        This guide contains essential C programming questions and answers for interview preparation, from basics to advanced.
        Read through each carefully and try coding them yourself.
      </p>

      <div className="space-y-10">
        {/* Q1 */}
        <div>
          <h2 className="text-2xl font-semibold text-teal-600 mb-2">
            1. What is the difference between C and C++?
          </h2>
          <ul className="list-disc ml-6 text-lg text-gray-700">
            <li>C is a procedural language, while C++ is a multi-paradigm (procedural + object-oriented).</li>
            <li>C doesn’t support features like classes and inheritance; C++ does.</li>
            <li>C is faster for low-level system programming, while C++ is better for application development.</li>
          </ul>
        </div>

        {/* Q2 */}
        <div>
          <h2 className="text-2xl font-semibold text-teal-600 mb-2">
            2. What is a pointer? How is it different from a normal variable?
          </h2>
          <p className="text-lg mb-2">
            A pointer is a variable that stores the address of another variable.
          </p>
          <ul className="list-disc ml-6 text-lg text-gray-700">
            <li>Normal variable stores actual value, pointer stores address.</li>
            <li>Pointer can be used to access and modify variable indirectly.</li>
            <li>Used in dynamic memory allocation, arrays, and function arguments.</li>
          </ul>
        </div>

        {/* Q3 */}
        <div>
          <h2 className="text-2xl font-semibold text-teal-600 mb-2">
            3. What is the difference between call by value and call by reference?
          </h2>
          <ul className="list-disc ml-6 text-lg text-gray-700">
            <li>In call by value, function gets a copy of the actual variable. Changes don’t reflect outside.</li>
            <li>In call by reference, function gets the address of the variable and can modify the original value.</li>
            <li>Pointers are used for call by reference in C.</li>
          </ul>
        </div>

        {/* Add more blocks as needed */}
        <div>
          <h2 className="text-2xl font-semibold text-teal-600 mb-2">
            4. What is a structure? How is it different from an array?
          </h2>
          <ul className="list-disc ml-6 text-lg text-gray-700">
            <li>Structure can store variables of different data types under one name.</li>
            <li>Array stores multiple elements of the same data type.</li>
            <li>Structures are useful for creating complex data models (e.g., student records).</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-teal-600 mb-2">
            5. Explain memory allocation functions in C.
          </h2>
          <ul className="list-disc ml-6 text-lg text-gray-700">
            <li><code>malloc()</code>: Allocates memory of given size but doesn't initialize it.</li>
            <li><code>calloc()</code>: Allocates and initializes memory with zero.</li>
            <li><code>realloc()</code>: Resizes previously allocated memory.</li>
            <li><code>free()</code>: Frees allocated memory to avoid memory leaks.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-teal-600 mb-2">
            6. What are storage classes in C?
          </h2>
          <ul className="list-disc ml-6 text-lg text-gray-700">
            <li><code>auto</code>: Default for local variables.</li>
            <li><code>register</code>: Requests faster storage in CPU registers.</li>
            <li><code>static</code>: Retains value between function calls.</li>
            <li><code>extern</code>: Declares global variable defined elsewhere.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-teal-600 mb-2">
            7. What are the different data types in C?
          </h2>
          <p className="text-lg text-gray-700">
            Basic types: <code>int</code>, <code>char</code>, <code>float</code>, <code>double</code>.<br />
            Derived types: Arrays, Pointers, Structures, Unions, Enums.
          </p>
        </div>

        {/* Add more Q&A sections as needed from your file */}
      </div>
      
      </section>
    </div>
  );
};

export default CIntroduction;
