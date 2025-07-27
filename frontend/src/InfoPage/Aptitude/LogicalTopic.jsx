import React from "react";

const LogicalAptitude = () => {
  return (
    <div className="bg-gradient-to-b from-[#fafdff] to-[#f0f6ff] max-w-6xl mx-auto px-4 py-10 text-[var(--color-text-main)]">
      <h1 className="text-4xl font-bold mb-6 text-[var(--color-accent-dark)]">🧠 Logical Aptitude</h1>
      <p className="text-lg text-[var(--color-text-muted)] mb-10">
        Logical Aptitude evaluates a candidate's ability to analyze patterns, interpret data, and solve reasoning-based questions. This is crucial for cracking competitive exams, job assessments, and improving problem-solving skills.
      </p>

      {/* Theory Section */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
        <div className="bg-white rounded-xl shadow-md p-6 border border-teal-100">
          <h2 className="text-xl font-semibold text-teal-600 mb-2">🔍 Series & Sequences</h2>
          <p>Identify numeric, alphabetic, or mixed patterns. Requires understanding of progressions and logical shifts.</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 border border-teal-100">
          <h2 className="text-xl font-semibold text-teal-600 mb-2">🧩 Coding-Decoding</h2>
          <p>Translate words or sentences into codes using logical operations like shifting alphabets, reversing, or mathematical rules.</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 border border-teal-100">
          <h2 className="text-xl font-semibold text-teal-600 mb-2">🔗 Blood Relations</h2>
          <p>Determine family relationships from textual descriptions. Diagrams help visualize the relationships.</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 border border-teal-100">
          <h2 className="text-xl font-semibold text-teal-600 mb-2">🏠 Direction Sense</h2>
          <p>Track a person’s path based on directions and distances. Practice converting left/right turns and compass-based moves.</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 border border-teal-100">
          <h2 className="text-xl font-semibold text-teal-600 mb-2">🔃 Syllogisms</h2>
          <p>Logical deductions using Venn diagrams or direct analysis of statements and conclusions.</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 border border-teal-100">
          <h2 className="text-xl font-semibold text-teal-600 mb-2">📊 Data Sufficiency</h2>
          <p>Assess whether provided data is sufficient to answer a question without solving it completely.</p>
        </div>
      </section>

      {/* Practice Questions Section */}
<section className="mb-12">
  <h2 className="text-3xl font-semibold text-teal-700 mb-6">📝 Practice Questions</h2>
  <div className="grid sm:grid-cols-2 gap-6">
    {[
      { q: "Find the next number: 2, 4, 8, 16, ?", a: "Answer: 32 (Each number is doubled)" },
      { q: "If 'FOOD' is coded as 'GPPD', what is the code for 'GOOD'?", a: "Answer: HPPD (Each letter incremented by 1)" },
      { q: "A is the father of B. B is the brother of C. How is A related to C?", a: "Answer: Father" },
      { q: "Ravi walks north for 10m, turns right, walks 5m, turns right, walks 10m. How far is he from the start?", a: "Answer: 5m (forms a rectangle)" },
      { q: "Find the odd one out: 3, 5, 7, 9, 11", a: "Answer: 9 (Others are prime numbers)" },
      { q: "If 15% of x = 20% of y, then x : y is?", a: "Answer: 4:3" },
      { q: "What comes next in the series: A, C, F, J, O, ?", a: "Answer: U (+2, +3, +4... in alphabets)" },
      { q: "Complete the analogy: Dog : Bark :: Cat : ?", a: "Answer: Meow" },
      { q: "Which number replaces the question mark? 1, 4, 9, 16, ?, 36", a: "Answer: 25 (Squares of 1,2,3...)" },
      { q: "Find the next term: 21, 25, 33, 49, ?", a: "Answer: 73 (+4, +8, +16, +24)" },
      { q: "If RAM = 27 and SHYAM = 63, then AMIT = ?", a: "Answer: 48 (Alphabet positions added)" },
      { q: "Which day was it on 15th August 1947?", a: "Answer: Friday" },
      { q: "Find the missing number: 6, 11, 21, 36, ?", a: "Answer: 56 (+5, +10, +15, +20)" },
      { q: "Count the number of triangles in a star made by two overlapping triangles.", a: "Answer: 10" },
      { q: "Rearrange the letters: NAPLANE to make a meaningful word.", a: "Answer: PLANANE (Not possible, maybe typo)" },
      { q: "What is the mirror image of 12:45 on a clock?", a: "Answer: 11:15" },
      { q: "How many squares are there in a 3x3 grid?", a: "Answer: 14 (9 small + 4 medium + 1 big)" },
      { q: "If it is 3 PM now, what will be the angle between the hands?", a: "Answer: 90°" },
      { q: "A cube has how many edges?", a: "Answer: 12" },
      { q: "John is 4 times as old as his son. In 5 years, he will be 3 times as old. What is John's current age?", a: "Answer: 40 years" },
      { q: "If a clock is 5 minutes fast, what is the actual time at 2:05 PM?", a: "Answer: 2:00 PM" },
      { q: "If in a certain code, 'TREE' is written as 'USFF', how is 'BOOK' written?", a: "Answer: CPLL (each letter +1)" },
      { q: "If 9 people shake hands with each other once, how many handshakes occur?", a: "Answer: 36" },
      { q: "Which number should come next: 5, 10, 17, 26, 37, ?", a: "Answer: 50 (+5, +7, +9, +11...)" }
    ].map((item, idx) => (
      <div key={idx} className="bg-white p-4 rounded-lg border border-teal-100 shadow-md">
        <p className="font-medium mb-2">Q{idx + 1}: {item.q}</p>
        <p className="text-teal-600">{item.a}</p>
      </div>
    ))}
  </div>
</section>


      {/* Tips & Tricks Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-teal-700 mb-6">💡 Tips & Tricks</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border-l-4 border-teal-400 shadow">
            <h3 className="text-lg font-semibold mb-2">Practice Timed Sets</h3>
            <p>Use online resources or mock tests to solve logical problems under time pressure to improve speed.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border-l-4 border-teal-400 shadow">
            <h3 className="text-lg font-semibold mb-2">Use Elimination</h3>
            <p>In multiple-choice, eliminate incorrect or illogical options first to improve accuracy.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border-l-4 border-teal-400 shadow">
            <h3 className="text-lg font-semibold mb-2">Draw Diagrams</h3>
            <p>Use charts or tables for blood relations, directions, or puzzles to visualize the logic better.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border-l-4 border-teal-400 shadow">
            <h3 className="text-lg font-semibold mb-2">Re-read Carefully</h3>
            <p>Ensure you don’t misinterpret statements. Logical reasoning often hides the key in the phrasing.</p>
          </div>
        </div>
      </section>
{/* Section: Practice Questions */}
<section className="mb-12">
  <h2 className="text-3xl font-semibold mb-6 text-[var(--color-accent)]">
    📝 Practice Questions
  </h2>
  <div className="grid sm:grid-cols-2 gap-6">
    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="text-xl font-bold mb-2 text-teal-600">🔹 Q1. Seating Arrangement</h3>
      <p className="mb-2 text-base">
        A, B, C, D, E and F are sitting in a circle. A is between D and B. F is between B and C. Who is sitting to the right of D?
      </p>
      <p className="font-semibold text-green-600">Answer: B</p>
    </div>

    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="text-xl font-bold mb-2 text-teal-600">🔹 Q2. Number Series</h3>
      <p className="mb-2 text-base">
        2, 6, 12, 20, 30, ? <br />Find the next number in the series.
      </p>
      <p className="font-semibold text-green-600">Answer: 42</p>
    </div>

    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="text-xl font-bold mb-2 text-teal-600">🔹 Q3. Blood Relation</h3>
      <p className="mb-2 text-base">
        Pointing to a girl, Raj said, “She is the daughter of the only son of my grandfather.” How is the girl related to Raj?
      </p>
      <p className="font-semibold text-green-600">Answer: Sister</p>
    </div>

    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="text-xl font-bold mb-2 text-teal-600">🔹 Q4. Statement & Conclusion</h3>
      <p className="mb-2 text-base">
        Statement: All roses are flowers. Some flowers fade quickly. <br />
        Conclusion: Some roses fade quickly. <br />
        Is the conclusion correct?
      </p>
      <p className="font-semibold text-red-600">Answer: No</p>
    </div>
  </div>
</section>
{/* Practice Questions - Set 2 */}
<section className="bg-white rounded-xl shadow-lg p-6 border border-[var(--color-accent-light)] mb-12">
  <h2 className="text-2xl font-semibold text-[var(--color-accent-dark)] mb-4">🧠 More Practice Questions</h2>
  <ol className="list-decimal pl-6 space-y-4 text-[var(--color-text-main)]">
    <li>
      If in a certain language, “MANGO” is written as “NZOHQ”, how is “APPLE” written?
      <details className="text-sm mt-1 text-gray-600">
        <summary className="cursor-pointer">Show Answer</summary>
        <strong>BQQMF</strong>
      </details>
    </li>
    <li>
      A man walks 4 km north, then turns right and walks 3 km. Then he turns right again and walks 4 km. Which direction is he facing?
      <details className="text-sm mt-1 text-gray-600">
        <summary className="cursor-pointer">Show Answer</summary>
        <strong>South</strong>
      </details>
    </li>
    <li>
      Find the missing letter: A, C, F, J, O, ?
      <details className="text-sm mt-1 text-gray-600">
        <summary className="cursor-pointer">Show Answer</summary>
        <strong>U</strong>
      </details>
    </li>
    <li>
      Statements: All dogs are animals. Some animals are cats. Conclusions: Some cats are dogs. All animals are dogs.
      <details className="text-sm mt-1 text-gray-600">
        <summary className="cursor-pointer">Show Answer</summary>
        <strong>Neither follows</strong>
      </details>
    </li>
    <li>
      12 pens cost ₹180. What is the cost of 20 pens?
      <details className="text-sm mt-1 text-gray-600">
        <summary className="cursor-pointer">Show Answer</summary>
        <strong>₹300</strong>
      </details>
    </li>
    <li>
      What comes next: 2, 6, 12, 20, 30, ?
      <details className="text-sm mt-1 text-gray-600">
        <summary className="cursor-pointer">Show Answer</summary>
        <strong>42</strong>
      </details>
    </li>
    <li>
      A person sells an article at 20% loss. If he had sold it for ₹80 more, he’d gain 10%. Find cost price.
      <details className="text-sm mt-1 text-gray-600">
        <summary className="cursor-pointer">Show Answer</summary>
        <strong>₹400</strong>
      </details>
    </li>
    <li>
      A is 3 times older than B. After 5 years, the sum of their ages is 50. Find A’s age.
      <details className="text-sm mt-1 text-gray-600">
        <summary className="cursor-pointer">Show Answer</summary>
        <strong>30 years</strong>
      </details>
    </li>
    <li>
      Complete the series: 7, 14, 28, 56, ?
      <details className="text-sm mt-1 text-gray-600">
        <summary className="cursor-pointer">Show Answer</summary>
        <strong>112</strong>
      </details>
    </li>
    <li>
      A man can row 20 km downstream in 2 hours and upstream in 4. What’s the speed of the boat in still water?
      <details className="text-sm mt-1 text-gray-600">
        <summary className="cursor-pointer">Show Answer</summary>
        <strong>7.5 km/h</strong>
      </details>
    </li>
    <li>
      Two pipes fill a tank in 12 and 15 hours respectively. Find time taken together.
      <details className="text-sm mt-1 text-gray-600">
        <summary className="cursor-pointer">Show Answer</summary>
        <strong>6 hours 40 mins</strong>
      </details>
    </li>
    <li>
      Simplify: (96 ÷ 4) × (36 ÷ 6)
      <details className="text-sm mt-1 text-gray-600">
        <summary className="cursor-pointer">Show Answer</summary>
        <strong>144</strong>
      </details>
    </li>
    <li>
      If x + y = 12 and xy = 32, find x² + y².
      <details className="text-sm mt-1 text-gray-600">
        <summary className="cursor-pointer">Show Answer</summary>
        x² + y² = (x + y)² - 2xy = 144 - 64 = <strong>80</strong>
      </details>
    </li>
    <li>
      A cone has radius 3 cm and height 4 cm. Find volume.
      <details className="text-sm mt-1 text-gray-600">
        <summary className="cursor-pointer">Show Answer</summary>
        V = (1/3)πr²h = <strong>12π cm³</strong>
      </details>
    </li>
    <li>
      In an exam, 60% passed in English, 70% in Math, and 10% failed in both. What % passed in at least one?
      <details className="text-sm mt-1 text-gray-600">
        <summary className="cursor-pointer">Show Answer</summary>
        <strong>90%</strong>
      </details>
    </li>
    <li>
      If the average of x, x+2, x+4 is 12, find x.
      <details className="text-sm mt-1 text-gray-600">
        <summary className="cursor-pointer">Show Answer</summary>
        (3x + 6)/3 = 12 → x = <strong>10</strong>
      </details>
    </li>
    <li>
      A man buys a chair for ₹450 and sells at 10% profit. Find SP.
      <details className="text-sm mt-1 text-gray-600">
        <summary className="cursor-pointer">Show Answer</summary>
        SP = 450 + 10% = <strong>₹495</strong>
      </details>
    </li>
    <li>
      Find HCF of 84 and 120.
      <details className="text-sm mt-1 text-gray-600">
        <summary className="cursor-pointer">Show Answer</summary>
        <strong>12</strong>
      </details>
    </li>
    <li>
      What is 15% of 240?
      <details className="text-sm mt-1 text-gray-600">
        <summary className="cursor-pointer">Show Answer</summary>
        <strong>36</strong>
      </details>
    </li>
    <li>
      A man saves ₹1200 from his monthly salary which is 20% of his income. Find salary.
      <details className="text-sm mt-1 text-gray-600">
        <summary className="cursor-pointer">Show Answer</summary>
        20% = 1200 → 100% = <strong>₹6000</strong>
      </details>
    </li>
  </ol>
</section>


{/* Section: Tips & Tricks */}
<section className="mb-12">
  <h2 className="text-3xl font-semibold mb-6 text-[var(--color-accent)]">
    🎯 Tips & Tricks
  </h2>
  <div className="grid sm:grid-cols-2 gap-6">
    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="text-xl font-bold text-teal-600 mb-2">🧩 Tip 1: Understand Patterns</h3>
      <p className="text-base">
        Practice common number and letter series to develop pattern recognition. Look for differences, alternate positions, or square/cube relationships.
      </p>
    </div>

    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="text-xl font-bold text-teal-600 mb-2">🧠 Tip 2: Use Diagrams for Direction</h3>
      <p className="text-base">
        For direction-based questions, sketch the route. Visual aids make it easier to track turns and directions.
      </p>
    </div>

    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="text-xl font-bold text-teal-600 mb-2">🔍 Tip 3: Eliminate Wrong Options</h3>
      <p className="text-base">
        Use the process of elimination in puzzles and syllogisms. If you can disprove an option logically, discard it.
      </p>
    </div>

    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="text-xl font-bold text-teal-600 mb-2">📚 Tip 4: Learn Basic Logic Rules</h3>
      <p className="text-base">
        Familiarize yourself with logical laws like De Morgan’s Theorem, converse-inverse statements, and implication rules for statement logic questions.
      </p>
    </div>

    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="text-xl font-bold text-teal-600 mb-2">⏱️ Tip 5: Time Management</h3>
      <p className="text-base">
        Allocate time smartly during exams. Skip overly complex puzzles on the first go and return later if time permits.
      </p>
    </div>

    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="text-xl font-bold text-teal-600 mb-2">🔢 Tip 6: Use Options Wisely</h3>
      <p className="text-base">
        In number puzzles or coding-decoding, plug options back into the question. Sometimes reverse-engineering is faster.
      </p>
    </div>
  </div>
</section>

      {/* Additional Info Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-teal-700 mb-6">📘 Additional Information</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h3 className="text-teal-600 font-semibold mb-1">Logical Reasoning vs Analytical Reasoning</h3>
            <p>Logical focuses on patterns and conclusions, analytical involves interpreting complex data and problems.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h3 className="text-teal-600 font-semibold mb-1">Common Exams Testing Logical Aptitude</h3>
            <p>CAT, GATE, SSC, Bank PO, Campus Placements – all test these reasoning skills.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h3 className="text-teal-600 font-semibold mb-1">Best Resources</h3>
            <p>Books like RS Aggarwal, online mock platforms like Testbook, Oliveboard, and BYJU’S Exam Prep.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogicalAptitude;
