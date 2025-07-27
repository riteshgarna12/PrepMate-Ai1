import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const InterviewInstructions = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract dynamic values from query string
  const query = new URLSearchParams(location.search);
  const domain = query.get("domain") || "Software";
  const role = query.get("role") || "Frontend Developer";
  const difficulty = query.get("difficulty") || "Intermediate";
  const questionCount = query.get("questions") || 10;
  const duration = query.get("duration") || "15 mins";
  const format = query.get("format") || "Multiple Choice + Coding";

  const handleStartInterview = () => {
    alert("Interview will start soon...");
    // Later: navigate(`/interview-prep/${sessionId}`);
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] py-10 px-2 sm:px-4">
      <div className="w-full max-w-6xl mx-auto bg-white shadow-xl rounded-2xl p-5 sm:p-8 border border-[var(--color-card-border)]">
        <h1 className="text-3xl font-bold text-[var(--color-accent-dark)] text-center mb-8">
          Interview Ready? Let's Begin!
        </h1>

        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <InfoCard label="Domain" value={capitalize(domain)} />
          <InfoCard label="Role" value={capitalize(role)} />
          <InfoCard label="Questions" value={`${questionCount} Questions`} />
          <InfoCard label="Duration" value={duration} />
          <InfoCard label="Difficulty" value={capitalize(difficulty)} />
          <InfoCard label="Format" value={format} />
        </div>

        <div className="border-t border-[var(--color-card-border)] pt-6 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Instructions
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1 text-[15px] leading-relaxed">
            <li>Ensure you have a stable internet connection.</li>
            <li>Each question is timed and auto-evaluated based on accuracy and speed.</li>
            <li>Skipping questions is allowed — but discouraged.</li>
            <li>No option to pause — please allocate full time before starting.</li>
            <li>Click “Start Interview” to launch your test session.</li>
          </ul>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={handleStartInterview}
            className="px-6 py-2 text-white text-base font-medium rounded-lg transition bg-[var(--color-accent-dark)] hover:bg-[var(--color-accent)]"
          >
            Start Interview
          </button>
        </div>
      </div>
    </div>
  );
};

const InfoCard = ({ label, value }) => (
  <div className="bg-[var(--color-bg-light)] p-4 rounded-xl text-center border border-[var(--color-card-border)]">
    <p className="text-sm text-gray-500">{label}</p>
    <p className="text-lg font-semibold text-gray-800">{value}</p>
  </div>
);

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export default InterviewInstructions;
