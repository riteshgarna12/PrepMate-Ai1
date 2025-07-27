// WebDevSection.jsx

import React from "react";

const WebDevSection = () => {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto text-[var(--color-text-main)]">
      <h1 className="text-4xl font-bold text-[var(--color-accent)] mb-8 text-center">🌐 Web Development</h1>

      {/* Theory Card */}
      <div className="card mb-8">
        <h2 className="text-2xl font-semibold text-[var(--color-accent)] mb-4">📚 Theory</h2>
        <p className="mb-3 text-lg">
          Web development is the process of building websites and web applications that run in a browser. It involves both
          frontend (client-side) and backend (server-side) development.
        </p>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li><strong>Frontend:</strong> Involves HTML, CSS, JavaScript, and frameworks like React, Angular, Vue.</li>
          <li><strong>Backend:</strong> Server-side logic using Node.js, Python (Django/Flask), PHP, etc.</li>
          <li><strong>Database:</strong> Storage layer (SQL or NoSQL) for dynamic data. Examples: MongoDB, MySQL.</li>
          <li><strong>Full Stack:</strong> Combination of frontend and backend technologies.</li>
        </ul>
      </div>

      {/* Code Examples Card */}
      <div className="card mb-8">
        <h2 className="text-2xl font-semibold text-[var(--color-accent)] mb-4">💻 Code Examples</h2>
        <h3 className="text-xl font-semibold mb-2">HTML + CSS + JavaScript Example</h3>
        <pre className="bg-[var(--color-text-muted)] text-white p-4 rounded-lg text-sm overflow-x-auto">
{`<!DOCTYPE html>
<html>
<head>
  <title>My Web Page</title>
  <style>
    body { font-family: sans-serif; background: #f0f0f0; text-align: center; }
    button { padding: 10px 20px; background: #ee6c4d; color: white; border: none; }
  </style>
</head>
<body>
  <h1>Hello Web!</h1>
  <button onclick="alert('Welcome!')">Click Me</button>
</body>
</html>`}
        </pre>

        <h3 className="text-xl font-semibold mt-4 mb-2">React Example (Component)</h3>
        <pre className="bg-[var(--color-text-muted)] text-white p-4 rounded-lg text-sm overflow-x-auto">
{`import React from 'react';

const Welcome = () => {
  return (
    <div>
      <h1>Hello from React!</h1>
      <button onClick={() => alert('React says hi!')}>Click</button>
    </div>
  );
};

export default Welcome;`}
        </pre>
      </div>

      {/* Tips & Tricks Card */}
      <div className="card mb-8">
        <h2 className="text-2xl font-semibold text-[var(--color-accent)] mb-4">🎯 Tips & Tricks</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Use semantic HTML for better SEO and accessibility.</li>
          <li>Learn Flexbox and Grid for responsive layouts.</li>
          <li>Follow mobile-first design and use media queries.</li>
          <li>Minimize CSS and JS files before deployment.</li>
          <li>Use tools like Vite, Webpack, or Parcel for bundling.</li>
          <li>Make use of browser dev tools to debug UI issues.</li>
        </ul>
      </div>

      {/* More Info & Tools Card */}
      <div className="card mb-8">
        <h2 className="text-2xl font-semibold text-[var(--color-accent)] mb-4">🔍 More Info & Tools</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg">
          <div className="p-4 rounded-lg border border-[var(--color-card-border)]">
            <h3 className="font-semibold text-[var(--color-text-muted)]">Frontend Tools</h3>
            <ul className="list-disc list-inside">
              <li>VS Code</li>
              <li>Tailwind CSS</li>
              <li>React / Vue / Angular</li>
              <li>Figma (for UI design)</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg border border-[var(--color-card-border)]">
            <h3 className="font-semibold text-[var(--color-text-muted)]">Backend Tools</h3>
            <ul className="list-disc list-inside">
              <li>Node.js + Express</li>
              <li>Django / Flask (Python)</li>
              <li>MongoDB / MySQL</li>
              <li>Postman (for API testing)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Conclusion & Interview Questions */}
      <div className="card">
        <h2 className="text-2xl font-semibold text-[var(--color-accent)] mb-4">📝 Conclusion & Interview Qs</h2>
        <p className="text-lg mb-4">
          Web development is an essential skill in modern tech. Whether you aim to become a frontend, backend, or full-stack
          developer, mastering the core tools and frameworks is crucial.
        </p>
        <h3 className="text-xl font-semibold text-[var(--color-text-muted)] mb-2">Sample Interview Questions:</h3>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>What is the difference between HTML and HTML5?</li>
          <li>How does the DOM work in JavaScript?</li>
          <li>Explain event bubbling and event delegation.</li>
          <li>What is a virtual DOM and how React uses it?</li>
          <li>Explain RESTful APIs and their usage in backend.</li>
          <li>How would you secure a web application?</li>
        </ul>
      </div>
    </div>
  );
};

export default WebDevSection;
