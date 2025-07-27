import React from "react";

const DSA = () => {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto bg-gradient-to-b from-[#e0f7f1] to-[#fcebe9] text-[#1f3f3f]">
      <h1 className="text-4xl font-bold text-teal-700 mb-8 text-center">📚 Data Structures & Algorithms (DSA)</h1>

      {/* What is DSA */}
      <section className="bg-white shadow-lg rounded-2xl p-6 mb-8 border border-[#c7e7df]">
        <h2 className="text-2xl font-semibold text-coral-600 mb-4">🔰 What is DSA?</h2>
        <p className="text-lg text-[#2d3e3e]">
          DSA stands for <strong>Data Structures and Algorithms</strong>. It is the foundation of efficient programming and problem-solving. Data Structures deal with how data is stored and organized, while Algorithms define a step-by-step method to solve a problem.
        </p>
      </section>

      {/* Types of Data Structures */}
      <section className="bg-white shadow-lg rounded-2xl p-6 mb-8 border border-[#c7e7df]">
        <h2 className="text-2xl font-semibold text-coral-600 mb-4">📦 Types of Data Structures</h2>
        <ul className="list-disc list-inside text-lg space-y-1 text-[#1f3f3f]">
          <li>Arrays and Strings</li>
          <li>Linked Lists (Singly, Doubly, Circular)</li>
          <li>Stacks and Queues</li>
          <li>Trees (Binary Trees, BST, AVL, Heaps)</li>
          <li>Graphs (Adjacency Matrix/List, BFS, DFS)</li>
          <li>Hash Tables and Hashing</li>
          <li>Tries, Disjoint Sets, Segment Trees</li>
        </ul>
      </section>

      {/* Algorithms */}
      <section className="bg-white shadow-lg rounded-2xl p-6 mb-8 border border-[#c7e7df]">
        <h2 className="text-2xl font-semibold text-coral-600 mb-4">⚙️ Types of Algorithms</h2>
        <ul className="list-disc list-inside text-lg space-y-1 text-[#1f3f3f]">
          <li>Searching (Linear, Binary)</li>
          <li>Sorting (Bubble, Merge, Quick, Heap)</li>
          <li>Recursion & Backtracking</li>
          <li>Greedy Algorithms</li>
          <li>Dynamic Programming</li>
          <li>Divide and Conquer</li>
          <li>Graph Algorithms (Dijkstra, Floyd-Warshall, MST)</li>
        </ul>
      </section>

      {/* Code Examples */}
      <section className="bg-white shadow-lg rounded-2xl p-6 mb-8 border border-[#c7e7df]">
        <h2 className="text-2xl font-semibold text-coral-600 mb-4">💻 Sample Code: Binary Search</h2>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm text-[#2d3e3e]">
{`// Binary Search in C++
int binarySearch(int arr[], int n, int key) {
    int low = 0, high = n - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == key) return mid;
        else if (arr[mid] < key) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}`}
        </pre>
      </section>

      {/* Practice Questions & Tips */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-[#c7e7df]">
          <h3 className="text-xl font-semibold text-teal-700 mb-3">📝 Practice Questions</h3>
          <ul className="list-disc list-inside space-y-1 text-lg text-[#1f3f3f]">
            <li>Two Sum / Pair with Target Sum</li>
            <li>Longest Substring Without Repeating</li>
            <li>Merge Intervals</li>
            <li>Detect Cycle in a Linked List</li>
            <li>Maximum Subarray (Kadane’s Algo)</li>
            <li>Top K Frequent Elements</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-[#c7e7df]">
          <h3 className="text-xl font-semibold text-teal-700 mb-3">💡 Tips & Tricks</h3>
          <ul className="list-disc list-inside space-y-1 text-lg text-[#1f3f3f]">
            <li>Always analyze time & space complexity.</li>
            <li>Practice writing code without IDEs.</li>
            <li>Use dry run and visualizations for recursion & trees.</li>
            <li>For DP problems, memorize base cases clearly.</li>
            <li>Graph traversal = BFS/DFS first approach.</li>
          </ul>
        </div>
      </section>

      {/* Interview Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          {
            title: "📌 Must-Know Concepts",
            content: [
              "Time & Space Complexity",
              "Recursion and Stack Memory",
              "Hashing Techniques",
              "Sliding Window, Two Pointers",
              "Prefix Sums, Binary Lifting",
            ],
          },
          {
            title: "🧠 Advanced Topics",
            content: [
              "Segment Trees & Fenwick Tree",
              "Disjoint Set Union (DSU)",
              "Topological Sorting",
              "Shortest Path (Dijkstra, Bellman-Ford)",
              "Minimax & Alpha-Beta Pruning",
            ],
          },
          {
            title: "🎯 Interview Tips",
            content: [
              "Start with brute force, then optimize.",
              "Clarify edge cases with interviewer.",
              "Write clean, modular code.",
              "Explain logic out loud while coding.",
              "Use meaningful variable names.",
            ],
          },
        ].map((card, index) => (
          <div key={index} className="bg-white p-5 rounded-2xl shadow-md border border-[#c7e7df]">
            <h4 className="text-xl font-semibold text-coral-600 mb-3">{card.title}</h4>
            <ul className="list-disc list-inside space-y-1 text-lg text-[#1f3f3f]">
              {card.content.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Conclusion */}
      <section className="bg-white p-6 rounded-2xl shadow-lg border border-[#c7e7df]">
        <h2 className="text-2xl font-semibold text-coral-600 mb-4">✅ Conclusion</h2>
        <p className="text-lg leading-relaxed text-[#2d3e3e]">
          Mastering DSA is essential for excelling in technical interviews and competitive programming. It builds the foundation for writing efficient, optimized code to solve real-world problems. Stay consistent with practice, understand problem patterns, and gradually explore advanced topics.
        </p>
      </section>
    </div>
  );
};

export default DSA;
