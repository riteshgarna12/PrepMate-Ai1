import React from "react";

const DbmsTopic = () => {
  return (
    <div className="px-6 py-12 max-w-5xl mx-auto text-left">
      <h1 className="text-4xl font-bold text-teal-700 mb-8">📚 DBMS (Database Management System)</h1>

      {/* Theory Section */}
      <div className="grid gap-6">
        <div className="bg-white rounded-2xl shadow-md p-6 border border-teal-300">
          <h2 className="text-2xl font-semibold text-teal-600 mb-2">🧠 DBMS Theory</h2>
          <p className="text-lg">
            A DBMS is software that allows users to define, create, maintain, and control access to databases. It helps manage data efficiently and allows users to perform multiple tasks such as insertion, deletion, updating, and querying data.
          </p>
          <ul className="list-disc pl-6 mt-4 text-base">
            <li><strong>Types:</strong> Hierarchical, Network, Relational (RDBMS), Object-Oriented</li>
            <li><strong>Popular DBMS:</strong> MySQL, PostgreSQL, Oracle, SQL Server, MongoDB</li>
            <li><strong>Data Models:</strong> Relational, Entity-Relationship, Document, Key-Value</li>
            <li><strong>Normalization:</strong> Reduces redundancy, improves data integrity</li>
            <li><strong>Transactions:</strong> ACID properties (Atomicity, Consistency, Isolation, Durability)</li>
          </ul>
        </div>

        {/* Code Examples */}
        <div className="bg-white rounded-2xl shadow-md p-6 border border-teal-300">
          <h2 className="text-2xl font-semibold text-teal-600 mb-2">📘 Example Queries (SQL)</h2>
          <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`-- Create Table
CREATE TABLE Students (
  ID INT PRIMARY KEY,
  Name VARCHAR(100),
  Age INT
);

-- Insert Data
INSERT INTO Students VALUES (1, 'Alice', 20);

-- Query Data
SELECT * FROM Students WHERE Age > 18;

-- Update Data
UPDATE Students SET Age = 21 WHERE ID = 1;

-- Delete Data
DELETE FROM Students WHERE ID = 1;`}
          </pre>
        </div>

        {/* Tips & Tricks */}
        <div className="bg-white rounded-2xl shadow-md p-6 border border-teal-300">
          <h2 className="text-2xl font-semibold text-teal-600 mb-2">💡 Tips & Tricks</h2>
          <ul className="list-disc pl-6 text-base">
            <li>Always use <code>PRIMARY KEY</code> and <code>FOREIGN KEY</code> constraints to maintain integrity.</li>
            <li>Normalize your tables to at least 3NF to avoid redundancy.</li>
            <li>Use <code>JOIN</code> to fetch data across multiple tables efficiently.</li>
            <li>Indexes improve performance of <code>SELECT</code> queries, but slow down <code>INSERT</code>/<code>UPDATE</code>.</li>
            <li>Practice <code>GROUP BY</code>, <code>HAVING</code>, and subqueries for complex data retrieval.</li>
          </ul>
        </div>

        {/* Interview Questions */}
        <div className="bg-white rounded-2xl shadow-md p-6 border border-teal-300">
          <h2 className="text-2xl font-semibold text-teal-600 mb-2">📝 Interview Questions</h2>
          <ul className="list-decimal pl-6 text-base">
            <li>What is normalization and its types?</li>
            <li>Difference between DELETE, TRUNCATE, and DROP.</li>
            <li>Explain ACID properties of a transaction.</li>
            <li>What is indexing and how does it work?</li>
            <li>What are different types of JOINs in SQL?</li>
            <li>How is DBMS different from RDBMS?</li>
            <li>Explain the concept of views in SQL.</li>
            <li>What is a foreign key?</li>
            <li>What is denormalization?</li>
            <li>Explain the role of a database schema.</li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="bg-white rounded-2xl shadow-md p-6 border border-teal-300">
          <h2 className="text-2xl font-semibold text-teal-600 mb-2">✅ Conclusion</h2>
          <p className="text-lg">
            DBMS is a cornerstone of modern software systems. From simple data retrieval to complex transaction management, a strong understanding of database concepts ensures efficient application design and data integrity. Mastering SQL and understanding data models will greatly enhance your backend and full-stack development capabilities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DbmsTopic;
