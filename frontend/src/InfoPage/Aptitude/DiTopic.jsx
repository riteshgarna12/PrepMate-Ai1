import React from "react";

const DiTopic = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 text-[var(--color-text-main)]">
      <h1 className="text-4xl font-bold text-[var(--color-accent-dark)] mb-6">
        📊 Data Interpretation (DI)
      </h1>

      <p className="text-lg text-[var(--color-text-muted)] leading-relaxed mb-10">
        Data Interpretation (DI) involves analyzing visual or tabular data to make logical decisions. It's a core skill tested in almost every aptitude-based exam and is extremely relevant for real-world scenarios like business analysis, finance, and project planning.
      </p>

      {/* Importance Section */}
      <section className="card mb-12">
        <h2 className="text-2xl font-semibold mb-4">🎯 Real-World Use of DI</h2>
        <p className="mb-4">
          Data Interpretation isn’t just exam-related. It’s used:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>In finance to analyze profit/loss or market trends</li>
          <li>In management to assess employee or sales performance</li>
          <li>In government/public data interpretation (e.g., census, polls)</li>
          <li>In tech roles (e.g., product analytics, dashboards)</li>
        </ul>
      </section>

      {/* DI Difficulty Levels */}
      <section className="card mb-12">
        <h2 className="text-2xl font-semibold mb-4">📈 DI Difficulty Levels</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Basic:</strong> Tables, bar graphs, simple averages, totals</li>
          <li><strong>Moderate:</strong> Ratio-based, multi-step calculations, comparisons</li>
          <li><strong>Advanced:</strong> Multi-graph combinations, caselets, assumptions, approximation</li>
        </ul>
      </section>

      {/* Quick Tips */}
      <section className="card mb-12">
        <h2 className="text-2xl font-semibold mb-4">💡 Time-saving Tips</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Approximate values when options are far apart</li>
          <li>Use elimination if exact calculation is lengthy</li>
          <li>Learn to visualize data (mentally "see" the trends)</li>
          <li>Identify recurring question types and solve them faster</li>
        </ul>
      </section>

      {/* Practice Question List */}
      <section className="card mb-12 ">
        <h2 className="text-2xl font-semibold mb-4">🧪 Common DI Questions (with What to Learn)</h2>
        <ul className="list-disc pl-6 space-y-3 text-base">
          <li>
            📌 <strong>What is the total number of units sold in all quarters?</strong>  
            <br /><span className="text-[var(--color-text-muted)]">👉 Learn: Addition, scanning all values quickly</span>
          </li>
          <li>
            📌 <strong>Which region had the highest growth percentage?</strong>
            <br /><span className="text-[var(--color-text-muted)]">👉 Learn: Percentage change formula</span>
          </li>
          <li>
            📌 <strong>Which two departments combined contribute more than 60%?</strong>
            <br /><span className="text-[var(--color-text-muted)]">👉 Learn: Pie chart interpretation</span>
          </li>
          <li>
            📌 <strong>If the sales grew by 20%, what is the forecast for next year?</strong>
            <br /><span className="text-[var(--color-text-muted)]">👉 Learn: Growth projections</span>
          </li>
          <li>
            📌 <strong>Find the average number of employees over 4 years.</strong>
            <br /><span className="text-[var(--color-text-muted)]">👉 Learn: Quick summation and division</span>
          </li>
          <li>
            📌 <strong>Is the data sufficient to find the profit %?</strong>
            <br /><span className="text-[var(--color-text-muted)]">👉 Learn: Data sufficiency basics</span>
          </li>
        </ul>
      </section>

      {/* Bonus Practice Set */}
      <section className="card mb-12">
        <h2 className="text-2xl font-semibold mb-4">📋 Bonus: Practice Set Questions</h2>
        <ul className="list-decimal pl-6 space-y-2">
          <li>From a pie chart showing expenses, calculate the % spent on Transport if it covers 54°.</li>
          <li>A bar graph shows profit over 5 years. In which year was profit maximum?</li>
          <li>Calculate the average production in Q1, Q2, Q3 from a table showing monthly output.</li>
          <li>Compare sales in Region A and B and determine who outperformed and by what %.</li>
          <li>What is the combined ratio of Sales to Returns for Product A and B?</li>
          <li>If one department’s share dropped by 15%, what is the new share?</li>
          <li>Find the year where revenue decreased for the first time in a line graph.</li>
          <li>From a caselet: Determine whether profit margin is greater in Project X or Y.</li>
        </ul>
        <p className="mt-4 text-[var(--color-text-muted)]">
          🔍 Practice these on paper or with a timer to simulate exam conditions!
        </p>
      </section>

     
      {/* Advanced Strategy Section */}
        <section className="card mb-12 mt-12">
        <h2 className="text-2xl font-semibold mb-4">🚀 Advanced DI Strategy: From Good to Great</h2>
        <p className="mb-4 text-base text-[var(--color-text-muted)]">
            Once you're comfortable with basic DI formats, mastering these advanced strategies will give you a big edge:
        </p>
        <ul className="list-disc pl-6 space-y-2">
            <li>
            <strong>Scan the entire data set before solving:</strong> Look for patterns, high/low values, and anomalies.
            </li>
            <li>
            <strong>Avoid tunnel vision:</strong> Don’t fixate on just one value. Compare across rows/columns for insight.
            </li>
            <li>
            <strong>Use options to shortcut:</strong> If options are numeric, try reverse-calculating.
            </li>
            <li>
            <strong>Track units and scaling:</strong> “in thousands”, “in lakhs”, or "percentage change" can easily be missed.
            </li>
            <li>
            <strong>Don't assume data trends:</strong> Always rely on exact values given — DI isn't about guessing patterns.
            </li>
        </ul>
        </section>

        {/* Visual Clarity Examples */}
        <section className="card mb-12">
        <h2 className="text-2xl font-semibold mb-4">👁️‍🗨️ Visual Traps and How to Avoid Them</h2>
        <ul className="list-disc pl-6 space-y-3">
            <li>
            📊 <strong>Bar charts:</strong> Watch for different scales. Bars may look larger but represent smaller values due to axes.
            </li>
            <li>
            📉 <strong>Line Graphs:</strong> Lines may intersect, but actual values need to be confirmed numerically.
            </li>
            <li>
            🧮 <strong>Pie Charts:</strong> Angles can be misleading. Always compute proportions before comparing.
            </li>
            <li>
            📑 <strong>Tables:</strong> Highlight rows/columns using colors or mentally to avoid skipping lines.
            </li>
        </ul>
        </section>
    
        <section className="card  mb-12">
        <h2 className="text-2xl font-bold text-teal-600 mb-2">📊 Data Interpretation: Pie Charts</h2>
        <p className="text-lg leading-relaxed mb-4">
            A <strong>Pie Chart</strong> is a circular chart divided into sectors where each sector represents a proportion of the whole. It is commonly used to depict percentage distributions.
        </p>
        <h3 className="text-xl font-semibold text-teal-500 mb-2">💡 Tips:</h3>
        <ul className="list-disc list-inside mb-4 text-lg">
            <li>Total value represented by the pie chart is always 360°.</li>
            <li>To find value represented by a sector: <code>(Sector Angle / 360) × Total Value</code></li>
            <li>To find sector angle for a value: <code>(Value / Total Value) × 360°</code></li>
        </ul>
        <h3 className="text-xl font-semibold text-teal-500 mb-2">📝 Example:</h3>
        <p className="text-lg mb-2">If a company spends its annual budget of ₹10,00,000 as follows:</p>
        <ul className="list-disc list-inside text-lg mb-4">
            <li>Salaries – 120°</li>
            <li>Rent – 60°</li>
            <li>Marketing – 90°</li>
            <li>Misc – 90°</li>
        </ul>
        <p className="text-lg mb-2"><strong>Q:</strong> How much money is spent on Rent?</p>
        <p className="text-lg mb-4"><strong>A:</strong> ₹10,00,000 × (60° / 360°) = ₹1,66,667</p>
        </section>
    <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
    <section>
        <h2 className="text-2xl font-bold text-teal-600 mb-4">📘 Strategies for Data Interpretation</h2>
        <p className="text-lg leading-relaxed mb-4">
        Data Interpretation is not just about calculation—it's about analysis, elimination, and smart observation. Here are some strategies:
        </p>

        <h3 className="text-xl font-semibold text-teal-500 mb-2">📊 1. Scan the Question First</h3>
        <p className="text-lg mb-4">
        Read the question before diving into the data. It tells you what to look for, helping you avoid wasting time on unnecessary values.
        </p>

        <h3 className="text-xl font-semibold text-teal-500 mb-2">⏱️ 2. Estimate Where Possible</h3>
        <p className="text-lg mb-4">
        Many exams don't require exact values. If options are far apart, quick estimation using round numbers can save time.
        </p>

        <h3 className="text-xl font-semibold text-teal-500 mb-2">✖️ 3. Eliminate Wrong Options</h3>
        <p className="text-lg mb-4">
        If an option is clearly too large or small based on the graph, strike it out. This often narrows the choices quickly.
        </p>

        <h3 className="text-xl font-semibold text-teal-500 mb-2">🧮 4. Master Percentages & Ratios</h3>
        <p className="text-lg mb-4">
        Many DI questions revolve around % increase/decrease, ratio comparison, and averages. Know the short tricks and practice regularly.
        </p>
    </section>
    </div>

    <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
    <section>
        <h2 className="text-2xl font-bold text-teal-600 mb-4">📝 Common DI Formulas</h2>

        <h3 className="text-xl font-semibold text-teal-500 mb-2">🔢 Percentage</h3>
        <p className="text-lg mb-2">
        <strong>Formula:</strong> (Part / Whole) × 100
        </p>

        <h3 className="text-xl font-semibold text-teal-500 mb-2">🧾 Percentage Change</h3>
        <p className="text-lg mb-2">
        <strong>Formula:</strong> ((New – Old) / Old) × 100
        </p>

        <h3 className="text-xl font-semibold text-teal-500 mb-2">📏 Ratio</h3>
        <p className="text-lg mb-2">
        <strong>Formula:</strong> a : b = a/b
        </p>

        <h3 className="text-xl font-semibold text-teal-500 mb-2">📊 Average</h3>
        <p className="text-lg mb-2">
        <strong>Formula:</strong> Sum of Quantities / Number of Quantities
        </p>

        <h3 className="text-xl font-semibold text-teal-500 mb-2">🧮 Compound Interest</h3>
        <p className="text-lg mb-2">
        <strong>Formula:</strong> A = P(1 + r/100)<sup>n</sup>
        </p>
    </section>
    </div>
{/* Pie Charts Section */}
<div className="bg-white rounded-2xl shadow-md p-6 mb-8">
  <section>
    <h2 className="text-2xl font-bold text-teal-600 mb-4">📊 Data Interpretation: Pie Charts</h2>
    <p className="text-lg leading-relaxed mb-4">
      A <strong>Pie Chart</strong> is a circular chart divided into sectors where each sector represents a proportion of the whole. It's commonly used to depict percentage distributions.
    </p>

    <h3 className="text-xl font-semibold text-teal-500 mb-2">💡 Tips:</h3>
    <ul className="list-disc list-inside text-lg mb-4 space-y-2">
      <li>Total value represented by the pie chart is always 360°.</li>
      <li>To find value represented by a sector: <code>(Sector Angle / 360) × Total Value</code></li>
      <li>To find sector angle for a value: <code>(Value / Total Value) × 360°</code></li>
    </ul>

    <h3 className="text-xl font-semibold text-teal-500 mb-2">📝 Example:</h3>
    <p className="text-lg mb-2">If a company spends its annual budget of ₹10,00,000 as follows:</p>
    <ul className="list-disc list-inside text-lg mb-4">
      <li>Salaries – 120°</li>
      <li>Rent – 60°</li>
      <li>Marketing – 90°</li>
      <li>Misc – 90°</li>
    </ul>
    <p className="text-lg"><strong>Q:</strong> How much money is spent on Rent?</p>
    <p className="text-lg"><strong>A:</strong> ₹10,00,000 × (60° / 360°) = ₹1,66,667</p>
  </section>
</div>

{/* Line Graphs Section */}
<div className="bg-white rounded-2xl shadow-md p-6 mb-8">
  <section>
    <h2 className="text-2xl font-bold text-teal-600 mb-4">📐 Data Interpretation: Line Graphs</h2>
    <p className="text-lg leading-relaxed mb-4">
      <strong>Line Graphs</strong> show data trends over time or comparisons across categories. The data points are plotted on a graph and joined by lines.
    </p>

    <h3 className="text-xl font-semibold text-teal-500 mb-2">💡 Common Use Cases:</h3>
    <ul className="list-disc list-inside text-lg space-y-2 mb-4">
      <li>Tracking growth trends of population, profits, etc.</li>
      <li>Comparing performance across months or years.</li>
    </ul>
    <p className="text-lg"><strong>Tip:</strong> Focus on the slope – a steep line means rapid change.</p>
  </section>
</div>

{/* Formulas Section */}
    <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
    <section>
        <h2 className="text-2xl font-bold text-teal-600 mb-4">🔢 DI Formulas and Tricks</h2>
        <ul className="list-disc list-inside text-lg space-y-2">
        <li><strong>Percentage = (Required Value / Total Value) × 100</strong></li>
        <li><strong>Ratio = Value A / Value B</strong></li>
        <li><strong>Average = Sum of Items / Number of Items</strong></li>
        <li><strong>Growth Rate (%) = ((New - Old) / Old) × 100</strong></li>
        </ul>
    </section>
    </div>

    {/* Practice Questions Section */}
    <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
    <section>
        <h2 className="text-2xl font-bold text-teal-600 mb-4">🧠 Practice Questions (Mixed)</h2>
        <ol className="list-decimal list-inside space-y-3 text-lg">
        <li>A bar graph shows the profits of a company over 6 years. If the average profit over 6 years is ₹2.5 lakh, and the profit in the first 3 years is ₹6 lakh, what is the average profit in the last 3 years?</li>
        <li>In a pie chart, a company allocates 150° for R&D. If total spending is ₹12 crore, what amount is spent on R&D?</li>
        <li>If a table shows production in units for 5 products, how will you find the product with highest contribution percentage?</li>
        <li>A line graph shows rainfall over 12 months. In which months was rainfall above the monthly average?</li>
        <li>A school’s student population over 5 years is shown in a table. If the population in Year 1 was 600 and in Year 5 is 900, what is the average yearly growth?</li>
        <li>A bar chart shows monthly sales of a shop. Sales in Jan to March were ₹15k, ₹20k, ₹18k. What is the average?</li>
        <li>Pie chart represents four expenses. Marketing is 25%, Rent is 20%, Salaries is 30%. Find percentage for Miscellaneous.</li>
        <li>Two line graphs show profits of two companies. In which year was the profit of Company B higher than A?</li>
        <li>A table gives scores of students in 5 subjects. Find student with highest average score.</li>
        <li>Sales over 4 quarters are shown. If Q1 and Q4 together contribute 60% of total sales, what is their combined value if total sales = ₹20 lakh?</li>
        </ol>
    </section>
    </div>

    {/* DI Exam Strategy Section */}
    <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
    <section>
        <h2 className="text-2xl font-bold text-teal-600 mb-4">🧾 DI Strategy for Exams</h2>
        <ul className="list-disc list-inside text-lg space-y-2">
        <li>📌 Scan the question set before reading the chart – understand what data is being asked.</li>
        <li>📌 Always note units (lakhs, crores, % etc.) carefully.</li>
        <li>📌 Approximate when exact value isn’t needed – it saves time.</li>
        <li>📌 Be quick with mental math – practice percentage to fraction conversions.</li>
        <li>📌 Manage time – spend no more than 5–6 minutes per DI set.</li>
        </ul>
    </section>
    </div>

    {/* Final Advice Section */}
    <div className=" bg-white rounded-2xl shadow-md p-6 mb-8">
    <section>
        <h2 className="text-2xl font-bold text-teal-600 mb-4">📌 Final Tips</h2>
        <p className="text-lg leading-relaxed mb-4">
        Data Interpretation is all about practice and sharp calculation. Don’t memorize graphs—practice interpreting them. Use rough work efficiently, and try solving 1–2 DI sets daily from past year papers.
        </p>
        <p className="text-lg text-teal-700 font-semibold">Happy Practicing! 🧠📈</p>
    </section>
    </div>

    <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
    <section>
        <h2 className="text-2xl font-bold text-teal-600 mb-4">🚀 Final Tips for DI Mastery</h2>
        <ul className="list-disc list-inside text-lg space-y-2">
        <li>🔍 Read carefully, avoid rushing into calculations.</li>
        <li>✏️ Write down key figures if needed to avoid re-scanning.</li>
        <li>📉 Approximate where options allow.</li>
        <li>📚 Practice daily with timer to build speed.</li>
        <li>🧠 Improve mental math (multiples, % of numbers, square roots).</li>
        <li>🔁 Analyze your mistakes from mock tests and fix patterns.</li>
        </ul>
    </section>
    </div>

    <section className=" card mb-12">
    <h2 className="text-2xl font-bold text-teal-600 mb-2">📐 Data Interpretation: Line Graphs</h2>
    <p className="text-lg leading-relaxed mb-4">
        <strong>Line Graphs</strong> show data trends over time or comparison across different categories. The data points are plotted on a graph and joined by lines.
    </p>
    <h3 className="text-xl font-semibold text-teal-500 mb-2">💡 Common Use Cases:</h3>
    <ul className="list-disc list-inside mb-4 text-lg">
        <li>Tracking growth trends of population, profits, etc.</li>
        <li>Comparing performances over months or years.</li>
    </ul>
    <p className="text-lg"><strong>Tip:</strong> Focus on slope – steep means rapid change.</p>
    </section>

    <section className="mb-12 card">
    <h2 className="text-2xl font-bold text-teal-600 mb-2">🔢 DI Formulas and Tricks</h2>
    <ul className="list-disc list-inside mb-4 text-lg">
        <li><strong>Percentage = (Required Value / Total Value) × 100</strong></li>
        <li><strong>Ratio = Value A / Value B</strong></li>
        <li><strong>Average = Sum of Items / Number of Items</strong></li>
        <li><strong>Growth Rate (%) = ((New - Old) / Old) × 100</strong></li>
    </ul>
    </section>

    <section className="mb-12 card">
    <h2 className="text-2xl font-bold text-teal-600 mb-4">🧠 Practice Questions (Mixed)</h2>
    <ol className="list-decimal list-inside space-y-3 text-lg">
        <li>A bar graph shows the profits of a company over 6 years. If the average profit over 6 years is ₹2.5 lakh, and the profit in the first 3 years is ₹6 lakh, what is the average profit in the last 3 years?</li>
        <li>In a pie chart, a company allocates 150° for R&D. If total spending is ₹12 crore, what amount is spent on R&D?</li>
        <li>If a table shows production in units for 5 products, how will you find the product with highest contribution percentage?</li>
        <li>A line graph shows rainfall over 12 months. In which months was rainfall above the monthly average?</li>
        <li>A school’s student population over 5 years is shown in a table. If the population in Year 1 was 600 and in Year 5 is 900, what is the average yearly growth?</li>
        <li>A bar chart shows monthly sales of a shop. Sales in Jan to March were ₹15k, ₹20k, ₹18k. What is the average?</li>
        <li>Pie chart represents four expenses. Marketing is 25%, Rent is 20%, Salaries is 30%. Find percentage for Miscellaneous.</li>
        <li>Two line graphs show profits of two companies. In which year was the profit of Company B higher than A?</li>
        <li>A table gives scores of students in 5 subjects. Find student with highest average score.</li>
        <li>Sales over 4 quarters are shown. If Q1 and Q4 together contribute 60% of total sales, what is their combined value if total sales = ₹20 lakh?</li>
    </ol>
    </section>

    <section className="card mb-12">
    <h2 className="text-2xl font-bold text-teal-600 mb-2">🧾 DI Strategy for Exams</h2>
    <ul className="list-disc list-inside text-lg mb-4">
        <li>Scan the question set before reading the chart – understand what data is being asked.</li>
        <li>Always note units (lakhs, crores, % etc.) carefully.</li>
        <li>Approximate when exact value isn’t needed – it saves time.</li>
        <li>Be quick with mental math – practice percentage to fraction conversions.</li>
        <li>Manage time – spend no more than 5-6 minutes per DI set.</li>
    </ul>
    </section>

    <section className="card mb-12">
    <h2 className="text-2xl font-bold text-teal-600 mb-2">📌 Final Tips</h2>
    <p className="text-lg leading-relaxed mb-4">
        Data Interpretation is all about practice and sharp calculation. Don’t memorize graphs—practice interpreting them. Use rough work efficiently, and try solving 1–2 DI sets daily from past year papers.
    </p>
    <p className="text-lg text-teal-700 font-semibold">Happy Practicing! 🧠📈</p>
    </section>

        {/* More Sample Caselet Questions */}
        <section className="card mb-12">
        <h2 className="text-2xl font-semibold mb-4">📚 Caselet Practice (Paragraph Based DI)</h2>
        <p className="text-base mb-4 text-[var(--color-text-muted)]">
            In caselets, data is described in text. Let’s look at sample questions:
        </p>
        <ul className="list-decimal pl-6 space-y-2 text-base">
            <li>
            A school has 3 sections in each of 5 classes. Each section has 30, 35, or 40 students. What is the minimum total number of students?
            </li>
            <li>
            A company sells 3 products: A, B, and C. Last year, A made 40% of total sales. B was 25% less than A. What percentage did C contribute?
            </li>
            <li>
            The cost of producing a pen is ₹20 and selling price is ₹30. If 1 in 10 pens is defective and discarded, what is the effective profit %?
            </li>
            <li>
            A train’s ticket sales over 6 months were: Jan - ₹40k, Feb - ₹30k... (you get the idea). Find average revenue growth rate.
            </li>
        </ul>
        </section>
        {/* Data Approximation Section */}
      <section className="card mb-12">
        <h2 className="text-2xl font-semibold mb-4">🔢 Approximation Techniques</h2>
        <p className="mb-4 text-base text-[var(--color-text-muted)]">
          In many DI problems, you can save time by approximating instead of calculating precisely:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Round off decimals for percentage calculations (e.g., 39.6% → 40%).
          </li>
          <li>
            Use nearest multiples (e.g., 993 → 1000) for quick multiplication.
          </li>
          <li>
            Use option elimination — try options in reverse to avoid full calculations.
          </li>
        </ul>
      </section>

      {/* Vocabulary of Graphs */}
      <section className="card mb-12">
        <h2 className="text-2xl font-semibold mb-4">🧠 Vocabulary of DI</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Trend:</strong> General direction (upward, downward)</li>
          <li><strong>Fluctuation:</strong> Irregular rise/fall</li>
          <li><strong>Projection:</strong> Estimated value based on growth</li>
          <li><strong>Deviation:</strong> Difference from average/target</li>
          <li><strong>Index:</strong> A comparative unit (e.g., base year = 100)</li>
        </ul>
      </section>

      {/* Challenge Yourself Section */}
      <section className="card mb-12">
        <h2 className="text-2xl font-semibold mb-4">🏆 Challenge Yourself: Puzzle DI</h2>
        <p className="text-base text-[var(--color-text-muted)] mb-3">
          A new form of DI uses puzzle logic. Try solving this:
        </p>
        <p className="text-base">
          A table shows earnings of 5 friends (A, B, C, D, E). Info given:
          <br />• A earns more than D
          <br />• C earns less than only one person
          <br />• B earns more than A but less than C
          <br />• E earns the least
          <br />👉 Arrange them in decreasing income order.
        </p>
      </section>

      {/* Real-Life Application Section */}
      <section className="card mb-12">
        <h2 className="text-2xl font-semibold mb-4">🌍 Real-Life DI Examples</h2>
        <p className="mb-4">Use DI in these everyday scenarios:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Compare electricity usage over 6 months</li>
          <li>Track app downloads and uninstalls by day</li>
          <li>Analyze food delivery patterns using heat maps</li>
          <li>Budget your weekly expenses with pie charts</li>
        </ul>
      </section>
        <section className="card mb-12">
        <h2 className="text-2xl font-semibold mb-4">🧠 Mini-Theory: Core DI Concepts</h2>
        <ul className="space-y-4">
            <li>
            <strong>Absolute vs Relative Values:</strong> Absolute numbers are fixed (e.g., 500 sales), relative involves comparison (e.g., 30% growth).
            </li>
            <li>
            <strong>Data Sufficiency:</strong> Can you answer the question with the given data? Practice isolating variables.
            </li>
            <li>
            <strong>Weighted Average:</strong> Not all averages are simple. Weighted ones assign importance to certain values.
            </li>
            <li>
            <strong>Growth Rate vs Profit:</strong> Growth % ≠ Profit %. One may rise while the other falls.
            </li>
        </ul>
        </section>

      {/* Terminology Table */}
      <section className="card mb-12 overflow-auto">
        <h2 className="text-2xl font-semibold mb-4">📘 Important Terms Quick Reference</h2>
        <table className="w-full text-left border text-sm">
          <thead className="bg-[var(--color-card-header-bg)]">
            <tr>
              <th className="p-2 border">Term</th>
              <th className="p-2 border">Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">YOY</td>
              <td className="p-2 border">Year-on-Year growth comparison</td>
            </tr>
            <tr>
              <td className="p-2 border">CAGR</td>
              <td className="p-2 border">Compound Annual Growth Rate</td>
            </tr>
            <tr>
              <td className="p-2 border">Market Share</td>
              <td className="p-2 border">Company's % of total industry sales</td>
            </tr>
            <tr>
              <td className="p-2 border">Variance</td>
              <td className="p-2 border">Difference from target or previous value</td>
            </tr>
            <tr>
              <td className="p-2 border">Break-even</td>
              <td className="p-2 border">Point where revenue = cost</td>
            </tr>
          </tbody>
        </table>
      </section>
        <section className="card mb-12">
  <h2 className="text-2xl font-semibold mb-4">📝 Mini Quiz: Test Your DI Skill</h2>
  <ol className="list-decimal pl-6 space-y-4">
    <li>
      If a company's profit increased from ₹12000 to ₹18000, what is the growth %?
      <ul className="list-disc pl-6 text-sm mt-1">
        <li>A. 30%</li>
        <li>B. 50%</li>
        <li>C. 60%</li>
        <li>D. 25%</li>
      </ul>
    </li>
    <li>
      A pie chart shows 72° angle for IT department in 360° chart. What % does it represent?
      <ul className="list-disc pl-6 text-sm mt-1">
        <li>A. 20%</li>
        <li>B. 25%</li>
        <li>C. 18%</li>
        <li>D. 22%</li>
      </ul>
    </li>
  </ol>
</section>
<section className="card mb-12 overflow-auto">
  <h2 className="text-2xl font-semibold mb-4">📦 Sample Table Interpretation</h2>
  <table className="w-full border text-sm text-left mb-4">
    <thead className="bg-[var(--color-card-header-bg)]">
      <tr>
        <th className="p-2 border">Month</th>
        <th className="p-2 border">Product A</th>
        <th className="p-2 border">Product B</th>
        <th className="p-2 border">Product C</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="p-2 border">Jan</td>
        <td className="p-2 border">150</td>
        <td className="p-2 border">100</td>
        <td className="p-2 border">200</td>
      </tr>
      <tr>
        <td className="p-2 border">Feb</td>
        <td className="p-2 border">180</td>
        <td className="p-2 border">120</td>
        <td className="p-2 border">210</td>
      </tr>
    </tbody>
  </table>
  <p className="mb-2">🧮 Question: What is the average sales of Product A across both months?</p>
  <p className="text-sm text-[var(--color-text-muted)]">👉 Hint: (150 + 180) / 2 = ?</p>
    </section>
    <section className="card mb-12">
    <h2 className="text-2xl font-semibold mb-4">🧱 Puzzle-Based DI Grid</h2>
    <p className="text-base mb-2 text-[var(--color-text-muted)]">
        Match the company to its market share and region:
    </p>
    <table className="w-full text-sm border text-left mb-3">
        <thead>
        <tr className="bg-[var(--color-card-header-bg)]">
            <th className="border p-2">Company</th>
            <th className="border p-2">Market Share</th>
            <th className="border p-2">Region</th>
        </tr>
        </thead>
        <tbody>
        <tr><td className="border p-2">Alpha</td><td className="border p-2">?</td><td className="border p-2">East</td></tr>
        <tr><td className="border p-2">Beta</td><td className="border p-2">35%</td><td className="border p-2">?</td></tr>
        <tr><td className="border p-2">Gamma</td><td className="border p-2">?</td><td className="border p-2">West</td></tr>
        </tbody>
    </table>
    <p className="text-sm">Use clues to fill in the grid. Example clue: \"Beta operates in the North\"</p>
    </section>

    <section className="card mb-12">
    <h2 className="text-2xl font-semibold mb-4">🎨 Chart Types Summary</h2>
    <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
        <li className="bg-[var(--color-card-bg)] p-4 rounded-xl shadow">📊 Bar Chart: Categorical comparison</li>
        <li className="bg-[var(--color-card-bg)] p-4 rounded-xl shadow">📈 Line Chart: Trends over time</li>
        <li className="bg-[var(--color-card-bg)] p-4 rounded-xl shadow">🥧 Pie Chart: Proportional values</li>
        <li className="bg-[var(--color-card-bg)] p-4 rounded-xl shadow">📉 Area Chart: Cumulative totals</li>
        <li className="bg-[var(--color-card-bg)] p-4 rounded-xl shadow">🧮 Table: Exact numeric values</li>
        <li className="bg-[var(--color-card-bg)] p-4 rounded-xl shadow">🧊 Caselet: Text-based numerical logic</li>
    </ul>
    </section>

         {/* Closing */}
      <section className="bg-[var(--color-bg-light)] rounded-2xl p-6 shadow-inner border border-[var(--color-card-border)]">
        <h2 className="text-xl font-semibold mb-3">🎯 Final Advice</h2>
        <p className="text-base leading-relaxed text-[var(--color-text-muted)]">
          Make DI a scoring section by developing:
          <br />✅ Fast scanning skills,
          <br />✅ Smart calculations,
          <br />✅ Pattern recognition.
          <br /><br />
          Use real data sets (like budget charts, population stats, Excel data) to build intuition.
        </p>
      </section>
        {/* Call to Action */}
        <section className="bg-[var(--color-footer-bg)] border-t mt-16 py-6 text-center text-[var(--color-footer-text)]">
        <p className="text-lg font-medium">🎓 Want to test your skills?</p>
        <p className="text-sm mb-3">Stay tuned! We're adding interactive quizzes and timed mock sets soon.</p>
        <button className="btn-primary">🔁 Practice Now</button>
        </section>

    </div>
  );
};

export default DiTopic;
