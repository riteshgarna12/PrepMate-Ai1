import React from "react";

const MySQLGuide = () => {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-teal-700 mb-6">🗃️ MySQL Guide: From Basics to Advanced</h1>

      {/* Theory Section */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white shadow-xl rounded-xl p-6 border-l-4 border-blue-500">
          <h2 className="text-2xl font-semibold mb-2">📌 What is MySQL?</h2>
          <p className="text-lg">MySQL is a popular open-source relational database management system (RDBMS) based on SQL (Structured Query Language).</p>
        </div>
        <div className="bg-white shadow-xl rounded-xl p-6 border-l-4 border-green-500">
          <h2 className="text-2xl font-semibold mb-2">🧱 Tables & Databases</h2>
          <p className="text-lg">Data in MySQL is stored in tables within databases. Each table consists of rows and columns.</p>
        </div>
        <div className="bg-white shadow-xl rounded-xl p-6 border-l-4 border-purple-500">
          <h2 className="text-2xl font-semibold mb-2">🛠️ DDL & DML</h2>
          <p className="text-lg"><b>DDL</b> includes commands like <code>CREATE</code>, <code>ALTER</code>, <code>DROP</code>. <b>DML</b> includes <code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code>.</p>
        </div>
        <div className="bg-white shadow-xl rounded-xl p-6 border-l-4 border-yellow-500">
          <h2 className="text-2xl font-semibold mb-2">🔗 Joins</h2>
          <p className="text-lg">Used to combine rows from two or more tables based on related columns.</p>
        </div>
        <div className="bg-white shadow-xl rounded-xl p-6 border-l-4 border-pink-500">
          <h2 className="text-2xl font-semibold mb-2">🧮 Indexes</h2>
          <p className="text-lg">Indexes speed up search operations in large tables. Use them wisely to improve performance.</p>
        </div>
        <div className="bg-white shadow-xl rounded-xl p-6 border-l-4 border-red-500">
          <h2 className="text-2xl font-semibold mb-2">🔐 Constraints</h2>
          <p className="text-lg">Constraints like <code>PRIMARY KEY</code>, <code>UNIQUE</code>, <code>FOREIGN KEY</code> maintain data integrity.</p>
        </div>
      </div>

      {/* Examples */}
      <h2 className="text-3xl font-bold text-teal-600 mb-4">🧪 Example Queries</h2>
      <div className="space-y-4 mb-12">
        <div className="bg-gray-100 p-4 rounded-lg">
          <p><strong>1. Create Table:</strong></p>
          <code>CREATE TABLE Students (id INT PRIMARY KEY, name VARCHAR(100), age INT);</code>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p><strong>2. Insert Data:</strong></p>
          <code>INSERT INTO Students (id, name, age) VALUES (1, 'Alice', 20);</code>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p><strong>3. Select Query:</strong></p>
          <code>SELECT * FROM Students WHERE age &gt; 18;</code>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p><strong>4. Inner Join Example:</strong></p>
          <code>SELECT Orders.id, Customers.name FROM Orders INNER JOIN Customers ON Orders.customer_id = Customers.id;</code>
        </div>
      </div>

      {/* Tips & Tricks */}
      <h2 className="card text-3xl font-bold text-teal-600 mb-4">💡 Tips & Tricks</h2>
      <ul className="list-disc list-inside text-lg mb-12 card">
        <li>Use indexes on columns involved in WHERE or JOIN.</li>
        <li>Use LIMIT to restrict query results while debugging.</li>
        <li>Avoid SELECT * in production — be specific.</li>
        <li>Normalize your tables to reduce redundancy.</li>
        <li>Use aliases to simplify complex queries.</li>
      </ul>

      {/* Interview Questions */}
      <h2 className="card text-3xl font-bold text-teal-600 mb-4">📝 Interview Questions</h2>
      <ul className="list-decimal list-inside text-lg mb-12 card">
        <li>What is the difference between INNER JOIN and LEFT JOIN?</li>
        <li>How does indexing work in MySQL?</li>
        <li>What are ACID properties in MySQL?</li>
        <li>How to optimize slow queries?</li>
        <li>What is a subquery? Give an example.</li>
        <li>Explain normalization and denormalization with pros & cons.</li>
      </ul>

      {/* Conclusion */}
      <div className= " card bg-blue-50 p-6 rounded-xl shadow-md border-l-4 border-blue-500">
        <h2 className="text-2xl font-semibold mb-2">🎯 Conclusion</h2>
        <p className="text-lg">
          MySQL is the backbone of data-driven web applications. Understanding DDL, DML, Joins, Indexes, and Query Optimization is essential for both backend and full-stack developers. Practice writing real-world queries and keep database performance in mind when scaling.
        </p>
      </div>
       <h1 className="text-4xl font-bold text-teal -700 mb-6">🗄️ Structured Query Language (SQL) – Intermediate to Advanced</h1>

      {/* Section: Aggregate Functions */}
      <section className="grid gap-6 mb-10">
        <div className="bg-white light:bg-neutral-900 shadow-md p-6 rounded-xl border border-purple-300 light:border-purple-600">
          <h2 className="text-2xl font-semibold text-teal -600 mb-3">🔢 Aggregate Functions</h2>
          <p className="text-base leading-relaxed">
            SQL provides aggregate functions that operate on a set of values and return a single value. Common ones are:
          </p>
          <ul className="list-disc list-inside mt-3 ml-2 text-base">
            <li><code>COUNT()</code> – Counts the number of rows</li>
            <li><code>SUM()</code> – Returns the total sum of a column</li>
            <li><code>AVG()</code> – Returns the average value</li>
            <li><code>MAX()</code>, <code>MIN()</code> – Find maximum or minimum</li>
          </ul>
          <pre className="bg-gray-100 light:bg-neutral-800 p-4 rounded-md mt-4 text-sm overflow-auto">
{`SELECT AVG(salary) FROM employees;
SELECT MAX(age) FROM customers;
SELECT COUNT(*) FROM orders WHERE status = 'completed';`}
          </pre>
        </div>
      </section>

      {/* Section: GROUP BY & HAVING */}
      <section className="grid gap-6 mb-10">
        <div className="bg-white light:bg-neutral-900 shadow-md p-6 rounded-xl border border-blue-300 light:border-blue-600">
          <h2 className="text-2xl font-semibold text-teal-600 mb-3">📊 GROUP BY and HAVING</h2>
          <p className="text-base leading-relaxed">
            The <code>GROUP BY</code> statement is used with aggregate functions to group result-set rows. The <code>HAVING</code> clause is used to filter groups.
          </p>
          <pre className="bg-gray-100 light:bg-neutral-800 p-4 rounded-md mt-4 text-sm overflow-auto">
{`SELECT department, COUNT(*) 
FROM employees 
GROUP BY department 
HAVING COUNT(*) > 5;`}
          </pre>
        </div>
      </section>

      {/* Section: Subqueries */}
      <section className="grid gap-6 mb-10">
        <div className="bg-white light:bg-neutral-900 shadow-md p-6 rounded-xl border border-indigo-300 light:border-indigo-600">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-3">🔍 Subqueries</h2>
          <p className="text-base leading-relaxed">
            A subquery is a query nested inside another SQL query. It can be used in <code>SELECT</code>, <code>FROM</code>, or <code>WHERE</code> clauses.
          </p>
          <pre className="bg-gray-100 light:bg-neutral-800 p-4 rounded-md mt-4 text-sm overflow-auto">
{`SELECT name 
FROM employees 
WHERE salary > (SELECT AVG(salary) FROM employees);`}
          </pre>
        </div>
      </section>

      {/* Section: JOINS Recap */}
      <section className="grid gap-6 mb-10">
        <div className="bg-white light:bg-neutral-900 shadow-md p-6 rounded-xl border border-green-300 light:border-green-600">
          <h2 className="text-2xl font-semibold text-green-600 mb-3">🔗 JOINS (Recap + Examples)</h2>
          <p className="text-base leading-relaxed">
            SQL joins are used to combine rows from two or more tables.
          </p>
          <ul className="list-disc ml-4 mt-3">
            <li><strong>INNER JOIN</strong> – only matching rows</li>
            <li><strong>LEFT JOIN</strong> – all from left, matches from right</li>
            <li><strong>RIGHT JOIN</strong> – all from right, matches from left</li>
            <li><strong>FULL JOIN</strong> – all from both</li>
          </ul>
          <pre className="bg-gray-100 light:bg-neutral-800 p-4 rounded-md mt-4 text-sm overflow-auto">
{`SELECT employees.name, departments.name 
FROM employees 
INNER JOIN departments 
ON employees.dept_id = departments.id;`}
          </pre>
        </div>
      </section>

      {/* Section: Set Operations */}
      <section className="grid gap-6 mb-10">
        <div className="bg-white light:bg-neutral-900 shadow-md p-6 rounded-xl border border-yellow-300 light:border-yellow-600">
          <h2 className="text-2xl font-semibold text-yellow-600 mb-3">🔀 Set Operations (UNION, INTERSECT, EXCEPT)</h2>
          <p className="text-base leading-relaxed">
            These operations combine results of two SELECT queries:
          </p>
          <ul className="list-disc ml-4 mt-3">
            <li><code>UNION</code> – combines and removes duplicates</li>
            <li><code>UNION ALL</code> – includes duplicates</li>
            <li><code>INTERSECT</code> – common rows in both</li>
            <li><code>EXCEPT</code> – rows in first not in second</li>
          </ul>
          <pre className="bg-gray-100 light:bg-neutral-800 p-4 rounded-md mt-4 text-sm overflow-auto">
{`SELECT city FROM customers
UNION
SELECT city FROM suppliers;`}
          </pre>
        </div>
      </section>

      {/* Section: Practice Interview Questions */}
      <section className="grid gap-6 mb-10">
        <div className="bg-white light:bg-neutral-900 shadow-md p-6 rounded-xl border border-pink-300 light:border-pink-600">
          <h2 className="text-2xl font-semibold text-pink-600 mb-3">🎯 Practice Interview Questions</h2>
          <ul className="list-disc ml-4 mt-2 text-base">
            <li>What is the difference between <code>WHERE</code> and <code>HAVING</code>?</li>
            <li>Explain different types of joins with real examples.</li>
            <li>How do you write a query to find the second highest salary?</li>
            <li>What is a correlated subquery? How is it different from a simple subquery?</li>
            <li>Write a query to find duplicate rows in a table.</li>
          </ul>
        </div>
      </section>

      {/* Conclusion */}
      <section className="grid gap-6">
        <div className="bg-white light:bg-neutral-900 shadow-md p-6 rounded-xl border border-purple-400 light:border-purple-700">
          <h2 className="text-2xl font-semibold text-teal -700 mb-3">📌 Conclusion</h2>
          <p className="text-base leading-relaxed">
            SQL is the backbone of data management in relational databases. Mastering its syntax, subqueries, joins, grouping, and set operations prepares you well for real-world applications and interviews.
          </p>
          <p className="text-base mt-3">
            Next, you can explore stored procedures, triggers, transactions, and optimization techniques.
          </p>
        </div>
      </section>
    </div>
  );
};

export default MySQLGuide;
