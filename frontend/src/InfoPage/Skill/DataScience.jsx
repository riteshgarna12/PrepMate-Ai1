import React from "react";

const DataScience = () => {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto text-left bg-teal-50 text-[#2a3d40]">
      <h1 className="text-4xl font-bold text-teal-700 mb-6">📊 Data Science</h1>
      <p className="text-lg mb-8 text-[#3b4d50]">
        Data Science is an interdisciplinary field that uses scientific methods, algorithms, and systems to extract insights from structured and unstructured data. It combines statistics, machine learning, data analysis, and domain knowledge to make data-driven decisions.
      </p>

      {/* 💡 Theory Section */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white p-6 rounded-2xl shadow border border-teal-200">
          <h2 className="text-2xl font-semibold text-coral-600 mb-3">📘 Core Concepts</h2>
          <ul className="list-disc list-inside space-y-1 text-[#374c50]">
            <li><strong>Data Collection:</strong> Web scraping, APIs, sensors, manual entry.</li>
            <li><strong>Data Cleaning:</strong> Handling missing values, outliers, and formatting issues.</li>
            <li><strong>Exploratory Data Analysis (EDA):</strong> Visualization and statistical summaries.</li>
            <li><strong>Feature Engineering:</strong> Creating new input features from raw data.</li>
            <li><strong>Modeling:</strong> Regression, classification, clustering, deep learning.</li>
            <li><strong>Evaluation:</strong> Accuracy, precision, recall, F1-score, ROC-AUC.</li>
            <li><strong>Deployment:</strong> Putting models into production using APIs or dashboards.</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow border border-teal-200">
          <h2 className="text-2xl font-semibold text-coral-600 mb-3">📈 Tools & Libraries</h2>
          <ul className="list-disc list-inside space-y-1 text-[#374c50]">
            <li><strong>Languages:</strong> Python, R, SQL</li>
            <li><strong>Python Libraries:</strong> NumPy, Pandas, Matplotlib, Seaborn</li>
            <li><strong>ML Libraries:</strong> Scikit-learn, TensorFlow, PyTorch</li>
            <li><strong>Big Data:</strong> Hadoop, Spark</li>
            <li><strong>Visualization:</strong> Tableau, Power BI, Plotly</li>
            <li><strong>Databases:</strong> MySQL, MongoDB, PostgreSQL</li>
          </ul>
        </div>
      </div>

      {/* 🔍 Practice Questions */}
      <div className="bg-white p-6 rounded-2xl shadow border border-teal-200 mb-12">
        <h2 className="text-2xl font-semibold text-coral-600 mb-3">🧪 Practice Questions</h2>
        <ul className="list-decimal list-inside text-[#374c50] space-y-1">
          <li>What are the steps involved in a data science project?</li>
          <li>Explain the difference between supervised and unsupervised learning.</li>
          <li>How would you handle missing or corrupt data in a dataset?</li>
          <li>What is the curse of dimensionality?</li>
          <li>How does gradient descent work?</li>
          <li>Explain the bias-variance trade-off.</li>
          <li>What is cross-validation?</li>
          <li>Compare Random Forest and Gradient Boosting.</li>
        </ul>
      </div>

      {/* 🎯 Tips & Tricks */}
      <div className="bg-white p-6 rounded-2xl shadow border border-teal-200 mb-12">
        <h2 className="text-2xl font-semibold text-coral-600 mb-3">🎯 Tips & Tricks</h2>
        <ul className="list-disc list-inside text-[#374c50] space-y-1">
          <li>Always visualize your data before modeling.</li>
          <li>Focus on cleaning and preprocessing — it’s 80% of the job.</li>
          <li>Use pipelines to streamline transformations and model training.</li>
          <li>Use stratified sampling for imbalanced classification tasks.</li>
          <li>Deploy small projects to demonstrate end-to-end skills.</li>
        </ul>
      </div>

      {/* ℹ️ Additional Info */}
      <div className="bg-white p-6 rounded-2xl shadow border border-teal-200 mb-12">
        <h2 className="text-2xl font-semibold text-coral-600 mb-3">ℹ️ Additional Info</h2>
        <p className="text-[#374c50] mb-3">
          <strong>Career Paths:</strong> Data Scientist, Data Analyst, ML Engineer, Business Analyst, AI Researcher.
        </p>
        <p className="text-[#374c50] mb-3">
          <strong>Use Cases:</strong> Fraud detection, recommendation systems, predictive maintenance, customer segmentation, image and speech recognition.
        </p>
      </div>

      {/* ✅ Conclusion */}
      <div className="bg-white p-6 rounded-2xl shadow border border-teal-200">
        <h2 className="text-2xl font-semibold text-coral-600 mb-3">🔚 Conclusion</h2>
        <p className="text-[#374c50]">
          Data Science is a vast and impactful field that combines statistics, programming, and domain expertise. Mastering it requires a hands-on approach, a strong foundation in algorithms, and consistent practice with real-world data. Start with small projects, grow your portfolio, and stay curious!
        </p>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-sm text-teal-700 border-t border-teal-300 pt-6">
        © 2025 PrepMate | Learn Data Science with Confidence
      </footer>
    </div>
  );
};

export default DataScience;
