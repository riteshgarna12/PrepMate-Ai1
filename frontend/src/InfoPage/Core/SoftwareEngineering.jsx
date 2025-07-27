import React from "react";

const SoftwareEngineering = () => {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-teal-700 mb-8 text-center">
        💻 Software Engineering Complete Guide
      </h1>

      {/* Software Development Models */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-teal-600 mb-4">📐 Software Development Models</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-xl font-semibold">Waterfall Model</h3>
            <p>Sequential model where each phase depends on the deliverables of the previous one.</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold">Agile Model</h3>
            <p>Iterative development focusing on collaboration and feedback with small, frequent releases.</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold">Spiral Model</h3>
            <p>Combines iterative development and systematic risk analysis in each phase.</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold">RAD Model</h3>
            <p>Focuses on rapid prototyping and quick feedback over long development cycles.</p>
          </div>
        </div>
      </section>

      {/* Agile Methodologies */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-teal-600 mb-4">🏃 Agile Methodologies</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card">
            <h3 className="text-xl font-semibold">Scrum</h3>
            <p>Framework with roles like Scrum Master and Product Owner, sprint-based progress tracking.</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold">Kanban</h3>
            <p>Visual approach using cards/boards to manage workflow and limit WIP (Work in Progress).</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold">Extreme Programming (XP)</h3>
            <p>Promotes frequent releases and continuous feedback using pair programming and test-driven development.</p>
          </div>
        </div>
      </section>

      {/* Software Design Principles */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-teal-600 mb-4">🎯 Design Principles</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-xl font-semibold">SOLID Principles</h3>
            <p>Set of 5 principles for object-oriented programming: SRP, OCP, LSP, ISP, DIP.</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold">Modular Design</h3>
            <p>System broken into separate components (modules) that can be developed and tested independently.</p>
          </div>
        </div>
      </section>

      {/* Testing */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-teal-600 mb-4">🧪 Software Testing</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-xl font-semibold">Black-box & White-box Testing</h3>
            <p>Black-box tests functionality without internal knowledge; White-box tests internal logic and structure.</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold">Testing Types</h3>
            <p>Unit, Integration, System, Regression, Sanity, and Smoke testing are vital for software quality assurance.</p>
          </div>
        </div>
      </section>

      {/* Requirement Engineering */}
      <section className="mb-12 card">
        <h2 className="text-2xl font-bold text-teal-600 mb-4">📋 Requirement Engineering</h2>
        <p>Involves gathering, analyzing, validating, and documenting the requirements of the software.</p>
        <ul className="list-disc pl-6">
          <li>Functional vs Non-functional Requirements</li>
          <li>Requirement elicitation methods: interviews, questionnaires, use-cases</li>
          <li>SRS (Software Requirement Specification) document</li>
        </ul>
      </section>

      {/* Project Management */}
      <section className="mb-12 card">
        <h2 className="text-2xl font-bold text-teal-600 mb-4">📊 Project Management</h2>
        <ul className="list-disc pl-6">
          <li>Effort Estimation: LOC, Function Point, COCOMO</li>
          <li>Scheduling Techniques: Gantt Chart, PERT, CPM</li>
          <li>Risk Management and Quality Assurance</li>
        </ul>
      </section>

      {/* CASE Tools */}
      <section className="mb-12 card">
        <h2 className="text-2xl font-bold text-teal-600 mb-4">🛠️ CASE Tools</h2>
        <p>Computer-Aided Software Engineering tools assist in project management, design, testing, etc.</p>
        <ul className="list-disc pl-6">
          <li>Project Tools: JIRA, Trello</li>
          <li>Design Tools: Lucidchart, StarUML</li>
          <li>Testing Tools: Selenium, JUnit</li>
        </ul>
      </section>

      {/* Software Maintenance */}
      <section className="mb-12 card">
        <h2 className="text-2xl font-bold text-teal-600 mb-4">🔄 Software Maintenance</h2>
        <p>Post-delivery process of fixing issues and improving performance or features.</p>
        <ul className="list-disc pl-6">
          <li>Corrective, Adaptive, Perfective, Preventive maintenance types</li>
        </ul>
      </section>

      {/* Software Quality */}
      <section className="mb-12 card">
        <h2 className="text-2xl font-bold text-teal-600 mb-4">✅ Software Quality Attributes</h2>
        <ul className="list-disc pl-6">
          <li>Reliability</li>
          <li>Usability</li>
          <li>Maintainability</li>
          <li>Efficiency</li>
          <li>Portability</li>
        </ul>
      </section>

      {/* Ethics */}
      <section className="mb-12 card">
        <h2 className="text-2xl font-bold text-teal-600 mb-4">⚖️ Ethics in Software Engineering</h2>
        <p>Engineers should follow professional ethics such as confidentiality, user safety, and code integrity.</p>
        <p>Guidelines: IEEE/ACM Code of Ethics</p>
      </section>

      {/* Conclusion and Interview Questions */}
      <section className="card">
        <h2 className="text-2xl font-bold text-teal-600 mb-4">📌 Conclusion & Interview Questions</h2>
        <p className="mb-4">Software Engineering forms the backbone of modern application development. Mastering SDLC, testing, project management, and ethical principles helps you become an industry-ready developer.</p>
        <ul className="list-disc pl-6">
          <li>Explain the phases of SDLC.</li>
          <li>Differentiate between Agile and Waterfall.</li>
          <li>What are the types of software testing?</li>
          <li>Define SRS and its components.</li>
          <li>Explain COCOMO estimation model.</li>
          <li>What is the purpose of CASE tools?</li>
        </ul>
      </section>
      <br />
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white light:bg-[#1e1e2f] border border-teal-300 shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-teal-600 mb-4">📌 Key Concepts</h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li><strong>SDLC:</strong> Software Development Life Cycle - phases like Requirement, Design, Development, Testing, Deployment, Maintenance.</li>
            <li><strong>Agile Model:</strong> Iterative approach focused on collaboration, feedback, and flexibility.</li>
            <li><strong>Waterfall Model:</strong> Linear and sequential SDLC model.</li>
            <li><strong>Requirement Engineering:</strong> Gathering and analyzing user requirements.</li>
            <li><strong>Software Design:</strong> Architecture design, component-level design using UML diagrams.</li>
            <li><strong>Testing:</strong> Unit, Integration, System, and Acceptance testing using black-box & white-box methods.</li>
            <li><strong>Maintenance:</strong> Corrective, Adaptive, Perfective, and Preventive maintenance.</li>
            <li><strong>Project Management:</strong> Scheduling, Cost Estimation, Risk Analysis, and Quality Assurance.</li>
          </ul>
        </div>

        {/* Interview Questions */}
        <div className="bg-white light:bg-[#1e1e2f] border border-teal-300 shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-teal-600 mb-4">💼 Interview Questions</h2>
          <ul className="list-decimal list-inside text-lg space-y-2">
            <li>What is the difference between Agile and Waterfall models?</li>
            <li>Explain the phases of SDLC.</li>
            <li>What is requirement engineering? How is it performed?</li>
            <li>What are functional vs non-functional requirements?</li>
            <li>Explain black-box and white-box testing techniques.</li>
            <li>What are different types of software maintenance?</li>
            <li>How does risk management help in software projects?</li>
            <li>What is version control and why is it important?</li>
            <li>Describe use of UML in software design.</li>
            <li>Explain the V-Model and Spiral Model.</li>
          </ul>
        </div>
      </div>

      {/* Conclusion */}
      <div className="mt-12 p-6 bg-white light:bg-[#1e1e2f] border border-teal-300 shadow-lg rounded-2xl">
        <h2 className="text-2xl font-bold text-teal-600 mb-4">📍 Conclusion</h2>
        <p className="text-lg leading-relaxed">
          Software Engineering ensures disciplined software creation through defined processes and principles. Understanding models like SDLC, Agile, and effective testing & maintenance practices is crucial for building scalable and error-free software. This knowledge is vital for developers and project managers alike to ensure successful project delivery.
        </p>
      </div>
    </div>
  );
};

export default SoftwareEngineering;
