import React from "react";

const QuantAptitude = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 text-[var(--color-text-main)] bg-gradient-to-b from-[#fafdff] to-[#f0f6ff]">
      <h1 className="text-4xl font-bold mb-6 text-[var(--color-accent-dark)]">🧮 Quantitative Aptitude</h1>
      <p className="mb-8 text-lg text-[var(--color-text-muted)]">
        Quantitative Aptitude tests your numerical and problem-solving skills. It includes arithmetic, algebra, geometry, and data-related questions. Speed, accuracy, and logical reasoning are crucial.
      </p>

      {/* Theory Section */}
      <section className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white rounded-xl shadow-lg p-6 border border-[var(--color-accent-light)]">
          <h2 className="text-2xl font-semibold text-[var(--color-accent-dark)] mb-3">📚 Theory</h2>
          <ul className="list-disc pl-5 space-y-2 text-[var(--color-text-main)]">
            <li><strong>Number System:</strong> Divisibility, LCM/HCF, Factorials, Base Conversion</li>
            <li><strong>Percentages:</strong> Profit & Loss, Discount, Marked Price, Successive Percentage</li>
            <li><strong>Ratio & Proportion:</strong> Partnership, Mixture & Alligation, Direct & Inverse Proportion</li>
            <li><strong>Algebra:</strong> Linear & Quadratic Equations, Polynomials, Algebraic Identities, Simplification</li>
            <li><strong>Mensuration:</strong> 2D (Circle, Square, Triangle), 3D (Cylinder, Cone, Sphere, Cube)</li>
            <li><strong>Time-based Problems:</strong> Time & Work, Time & Distance, Pipes & Cisterns, Boats & Streams</li>
            <li><strong>Simple & Compound Interest:</strong> Annual & Half-Yearly, Effective Rate, Installments</li>
            <li><strong>Data Interpretation (DI):</strong> Tables, Bar Graphs, Pie Charts, Line Graphs, Caselets</li>
            <li><strong>Average:</strong> Weighted Average, Combined Average</li>
            <li><strong>Speed, Distance & Time:</strong> Relative Speed, Trains, Races</li>
            <li><strong>Geometry:</strong> Lines, Angles, Triangles, Circles, Coordinate Geometry (basics)</li>
            <li><strong>Probability:</strong> Events, Dice, Cards, Coins</li>
            <li><strong>Permutation & Combination:</strong> Arrangements, Selections, Circular Permutations</li>
            <li><strong>Logarithm & Exponents:</strong> Laws of Logarithms, Surds & Indices</li>
            <li><strong>Inequalities:</strong> Linear Inequalities, Quadratic Inequalities, Modulus</li>
            <li><strong>Progressions:</strong> Arithmetic Progression (AP), Geometric Progression (GP)</li>
            <li><strong>Set Theory:</strong> Venn Diagrams, Union & Intersection, Cardinality</li>
            <li><strong>Linear Equations:</strong> Two or Three Variable Systems</li>
            <li><strong>Problems on Ages:</strong> Linear Equation Applications</li>
            <li><strong>Stocks & Shares:</strong> Dividend, Face Value, Market Value</li>
          </ul>
        </div>
 <section className="mb-12">
  <h2 className="text-2xl font-semibold mb-4 text-[var(--color-accent)]">🎯 Theory</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {[
      {
        title: "Number System",
        content:
          "Covers whole numbers, integers, rational numbers, and their properties like divisibility, LCM, HCF, and factors.",
      },
      {
        title: "Percentages",
        content:
          "Understanding percentages, percentage change, profit/loss, and discount applications in real scenarios.",
      },
      {
        title: "Simple & Compound Interest",
        content:
          "Basic formulae and their differences; solving interest problems over different time periods.",
      },
      {
        title: "Time, Speed, and Distance",
        content:
          "Formulas and shortcuts to solve problems involving travel, trains, boats, and relative speed.",
      },
      {
        title: "Ratio & Proportion",
        content:
          "Concepts of direct, inverse variation, and applications in mixture, partnership, and more.",
      },
      {
        title: "Algebra",
        content:
          "Includes simplification, linear/quadratic equations, identities, and algebraic expressions.",
      },
      {
        title: "Mensuration",
        content:
          "Covers formulas and tricks to find area, perimeter, and volume of 2D and 3D shapes.",
      },
      {
        title: "Data Interpretation",
        content:
          "Analyzing and interpreting data from charts, tables, graphs, and applying quantitative reasoning.",
      },
      {
        title: "Averages & Alligation",
        content:
          "Calculating simple, weighted averages and solving alligation/mixing problems efficiently.",
      },
      {
        title: "Permutation & Combination",
        content:
          "Counting techniques for arrangements and selections, including circular permutations.",
      },
      {
        title: "Probability",
        content:
          "Basic concepts of probability, experiments, outcomes, and application in card/dice problems.",
      },
      {
        title: "Geometry",
        content:
          "Fundamentals of lines, angles, triangles, circles, and basic coordinate geometry.",
      },
    ].map((card, i) => (
      <div
        key={i}
        className="bg-white rounded-xl shadow-md p-5 transition hover:shadow-xl border-l-4 border-[var(--color-accent-light)]"
      >
        <h3 className="text-xl font-semibold text-[var(--color-accent)] mb-2">{card.title}</h3>
        <p className="text-[var(--color-text-muted)]">{card.content}</p>
      </div>
    ))}
  </div>
</section>

      {/* PRACTICE QUESTIONS */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-[var(--color-accent)]">🧠 Practice Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "If a train travels 120 km in 2 hours, what is its speed in km/hr?",
            "A shopkeeper gives 20% discount on an item. If the marked price is ₹500, what is the selling price?",
            "What is the compound interest on ₹5000 at 10% per annum for 2 years?",
            "In how many ways can the letters of the word 'MATH' be arranged?",
            "If A:B = 3:4 and B:C = 2:5, what is the ratio A:C?",
            "Find the value of x: 2x + 3 = 15."
          ].map((q, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 hover:shadow-md transition"
            >
              <p className="font-medium text-[var(--color-text-main)]">Q{i + 1}: {q}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TIPS AND TRICKS */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-[var(--color-accent)]">💡 Tips & Tricks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Learn multiplication tables up to 20 for faster calculations.",
            "Use ratio box or alligation method to solve mixture problems quickly.",
            "Convert percentage to fraction to reduce steps (e.g., 25% = 1/4).",
            "Practice mental math to reduce calculator dependency.",
            "Eliminate wrong options in MCQs using estimation.",
            "Use shortcuts for squares and cubes (e.g., (a+b)^2 = a^2 + 2ab + b^2)."
          ].map((tip, i) => (
            <div
              key={i}
              className="bg-[#f4f9ff] border-l-4 border-[var(--color-accent)] p-4 rounded-lg shadow-sm"
            >
              <p className="text-[var(--color-text-muted)]">{tip}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ADDITIONAL INFO */}
      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-4 text-[var(--color-accent)]">📚 Additional Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Practice Daily",
              desc: "Set aside 30–45 minutes daily for aptitude practice to build speed and consistency.",
            },
            {
              title: "Mock Tests",
              desc: "Take full-length mock tests under time limits to simulate exam pressure.",
            },
            {
              title: "Topic-Wise Tracking",
              desc: "Track which topics you’re weak in and revise them regularly with short notes.",
            },
            {
              title: "Revision Formula Sheet",
              desc: "Prepare a one-page sheet of all important formulas and review it before practice.",
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-5 rounded-xl shadow-md border-l-4 border-[var(--color-accent)]">
              <h3 className="font-bold text-[var(--color-accent-dark)] text-lg mb-1">{item.title}</h3>
              <p className="text-[var(--color-text-muted)]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
        {/* Tips & Tricks */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-[var(--color-accent-light)]">
          <h2 className="text-2xl font-semibold text-[var(--color-accent-dark)] mb-3">💡 Tips & Tricks</h2>
          <ul className="list-disc pl-5 space-y-2 text-[var(--color-text-main)]">
            <li>Memorize squares (1–30) and cubes (1–20) for fast calculation</li>
            <li>Use approximation for faster solving in options-based questions</li>
            <li>Vedic Maths shortcuts can boost speed drastically</li>
            <li>Draw diagrams where applicable (geometry/mensuration)</li>
            <li>Scan all options before solving—sometimes options are hints</li>
          </ul>
        </div>
      </section>

      {/* Practice Questions */}
  <section className="bg-white rounded-xl shadow-lg p-6 border border-[var(--color-accent-light)] mb-12">
  <h2 className="text-2xl font-semibold text-[var(--color-accent-dark)] mb-4">📝 Practice Questions</h2>
  <ol className="list-decimal pl-6 space-y-4 text-[var(--color-text-main)]">
    <li>
      A train 150m long passes a man walking at 6 km/h in the opposite direction in 7.2 seconds. Find the speed of the train.
      <details className="text-sm mt-1 text-gray-600">
        <summary className="cursor-pointer">Show Answer</summary>
        Speed = 150/7.2 + 6 = <strong>75 km/h</strong>
      </details>
    </li>
    <li>
      A can do a piece of work in 20 days and B in 30 days. If both work together, how many days will they take?
      <details className="text-sm mt-1 text-gray-600">
        <summary className="cursor-pointer">Show Answer</summary>
        1/(1/20 + 1/30) = <strong>12 days</strong>
      </details>
    </li>
    <li>
      If 15% of x = 20% of y, find the ratio x : y.
      <details className="text-sm mt-1 text-gray-600">
        <summary className="cursor-pointer">Show Answer</summary>
        <strong>4:3</strong>
      </details>
    </li>
    <li>
      A person sells an article at 20% profit. If he had sold it for ₹60 more, he’d gain 30%. Find the cost price.
      <details className="text-sm mt-1 text-gray-600">
        <summary className="cursor-pointer">Show Answer</summary>
        <strong>₹600</strong>
      </details>
    </li>
    <li>
      Find the compound interest on ₹12,000 at 10% per annum for 2 years.
      <details className="text-sm mt-1 text-gray-600">
        <summary className="cursor-pointer">Show Answer</summary>
        A = 12000×(1.1)² = <strong>₹14,520</strong>
      </details>
    </li>
    <li>
      If the average of 5 consecutive odd numbers is 33, what is the smallest number?
      <details className="text-sm mt-1 text-gray-600">
        <summary className="cursor-pointer">Show Answer</summary>
        <strong>29</strong>
      </details>
    </li>
    <li>
      Two numbers are in the ratio 3:5. Their sum is 64. Find the numbers.
      <details className="text-sm mt-1 text-gray-600">
        <summary className="cursor-pointer">Show Answer</summary>
        <strong>24 and 40</strong>
      </details>
    </li>
    <li>
      Find simple interest on ₹5000 at 6% p.a. for 3 years.
      <details className="text-sm mt-1 text-gray-600">
        <summary className="cursor-pointer">Show Answer</summary>
        SI = (5000×6×3)/100 = <strong>₹900</strong>
      </details>
    </li>
    <li>
      Find the HCF of 60 and 75.
      <details className="text-sm mt-1 text-gray-600">
        <summary className="cursor-pointer">Show Answer</summary>
        <strong>15</strong>
      </details>
    </li>
    <li>
      Find (22)² - (18)².
      <details className="text-sm mt-1 text-gray-600">
        <summary className="cursor-pointer">Show Answer</summary>
        a² - b² = (a + b)(a - b) = 40×4 = <strong>160</strong>
      </details>
    </li>
    <li>
      The perimeter of a square is 64 cm. Find its area.
      <details className="text-sm mt-1 text-gray-600">
        <summary className="cursor-pointer">Show Answer</summary>
        Side = 16, Area = <strong>256 cm²</strong>
      </details>
    </li>
    <li>
      A man covers 36 km in 6 hours. What is his speed?
      <details className="text-sm mt-1 text-gray-600">
        <summary className="cursor-pointer">Show Answer</summary>
        <strong>6 km/h</strong>
      </details>
    </li>
    <li>
      Cost price = ₹450. Loss = 10%. Find selling price.
      <details className="text-sm mt-1 text-gray-600">
        <summary className="cursor-pointer">Show Answer</summary>
        SP = 450 – 10% of 450 = <strong>₹405</strong>
      </details>
    </li>
    <li>
      How many prime numbers are between 10 and 30?
      <details className="text-sm mt-1 text-gray-600">
        <summary className="cursor-pointer">Show Answer</summary>
        <strong>6 (11, 13, 17, 19, 23, 29)</strong>
      </details>
    </li>
    <li>
      A boat goes 30 km downstream in 2 hours, returns in 3. Find boat speed in still water.
      <details className="text-sm mt-1 text-gray-600">
        <summary className="cursor-pointer">Show Answer</summary>
        Avg = (15 + 10)/2 = <strong>12.5 km/h</strong>
      </details>
    </li>
    <li>
      Find CI on ₹8000 for 1.5 years at 10% per annum, compounded half-yearly.
      <details className="text-sm mt-1 text-gray-600">
        <summary className="cursor-pointer">Show Answer</summary>
        A = 8000×(1.05)³ = <strong>₹9261</strong>
      </details>
    </li>
    <li>
      Angles of triangle are in ratio 2:3:4. Find angles.
      <details className="text-sm mt-1 text-gray-600">
        <summary className="cursor-pointer">Show Answer</summary>
        <strong>40°, 60°, 80°</strong>
      </details>
    </li>
    <li>
      Find area of circle with radius 7 cm.
      <details className="text-sm mt-1 text-gray-600">
        <summary className="cursor-pointer">Show Answer</summary>
        A = πr² = <strong>154 cm²</strong>
      </details>
    </li>
    <li>
      A person travels 300 km: 200 by train @40 km/h, rest by car @60 km/h. Total time?
      <details className="text-sm mt-1 text-gray-600">
        <summary className="cursor-pointer">Show Answer</summary>
        5 + (100/60) = <strong>6.67 hours</strong>
      </details>
    </li>
    <li>
      12 men complete work in 15 days. How many days for 20 men?
      <details className="text-sm mt-1 text-gray-600">
        <summary className="cursor-pointer">Show Answer</summary>
        (12×15)/20 = <strong>9 days</strong>
      </details>
    </li>
  </ol>
</section>


      {/* Additional Info */}
      <section className="grid sm:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-5 border border-[var(--color-accent-light)]">
          <h3 className="text-xl font-semibold text-[var(--color-accent-dark)] mb-2">🔎 Common Pitfalls</h3>
          <ul className="list-disc pl-4 text-[var(--color-text-main)] space-y-1">
            <li>Rushing without reading the full question</li>
            <li>Skipping units (m/s, km/hr, %, etc.)</li>
            <li>Not managing time—spending too long on tough problems</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-md p-5 border border-[var(--color-accent-light)]">
          <h3 className="text-xl font-semibold text-[var(--color-accent-dark)] mb-2">📘 Books for Practice</h3>
          <ul className="list-disc pl-4 text-[var(--color-text-main)] space-y-1">
            <li>RS Aggarwal – Quantitative Aptitude</li>
            <li>Arun Sharma – Quant for CAT</li>
            <li>SSC-CGL Tier I & II Practice Books</li>
            <li>Fast Track Objective Arithmetic by Rajesh Verma</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default QuantAptitude;
