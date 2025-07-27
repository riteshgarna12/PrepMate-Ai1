import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import InterviewInstructions from './pages/InterviewInstructions';
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Home/Dashboard";
import InterviewPrep from "./pages/InterviewPrep/InterviewPrep";
import UserProvider from './context/userContext';

// Languages
import CTopic from "./InfoPage/Langauges/CTopic.jsx"
import CppTopic from "./InfoPage/Langauges/CppTopic.jsx";
import JavaTopic from "./InfoPage/Langauges/JavaTopic.jsx";
import PythonTopic from "./InfoPage/Langauges/PythonTopic.jsx";

// Skills
import AndroidDevelopment from "./InfoPage/Skill/Android";
import DSATopic from "./InfoPage/Skill/DSATopic";
import MachineLearning from "./InfoPage/Skill/MachineLearning.jsx";
import DataScience from './InfoPage/Skill/DataScience.jsx';
import WebDevelopment from './InfoPage/Skill/WebDevelopment.jsx';
import CloudComputing from './InfoPage/Skill/CloudComputing.jsx';

// Aptitude
import QuantTopic from "./InfoPage/Aptitude/QuantTopic";
import VerbalTopic from "./InfoPage/Aptitude/VerbalTopic";
import LogicalTopic from "./InfoPage/Aptitude/LogicalTopic";
import DiTopic from "./InfoPage/Aptitude/DiTopic";

// Core Subjects
import OperatingSystem from "./InfoPage/Core/OperatingSystems.jsx";
import DBMS from "./InfoPage/Core/DBMS";
import MySQL from "./InfoPage/Core/MySQL";
import OOPConcept from "./InfoPage/Core/OOPConcepts.jsx";
import SoftwareEngineering from "./InfoPage/Core/SoftwareEngineering";
import ComputerNetworks from "./InfoPage/Core/ComputerNetworks.jsx"

// Optional: Not Found Page
// import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <UserProvider>
      <div>
        <Router>
          <Routes>
            {/* Default Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/interview-instructions" element={<InterviewInstructions />} />
            <Route path="/interview-prep/:sessionId" element={<InterviewPrep />} />

            {/* Languages */}
            <Route path="/topics/c" element={<CTopic />} />
            <Route path="/topics/cpp" element={<CppTopic />} />
            <Route path="/topics/java" element={<JavaTopic />} />
            <Route path="/topics/python" element={<PythonTopic />} />

            {/* Skills */}
            <Route path="/topics/dsa" element={<DSATopic />} />
            <Route path="/topics/webdevelopment" element={<WebDevelopment />} />
            <Route path="/topics/android" element={<AndroidDevelopment />} />
            <Route path="/topics/datascience" element={<DataScience />} />
            <Route path="/topics/machinelearning" element={<MachineLearning />} />
            <Route path="/topics/cloudcomputing" element={<CloudComputing />} />

            {/* Aptitude */}
            <Route path="/topics/quant" element={<QuantTopic />} />
            <Route path="/topics/verbal" element={<VerbalTopic />} />
            <Route path="/topics/logical" element={<LogicalTopic />} />
            <Route path="/topics/di" element={<DiTopic />} />

            {/* Core Subjects */}
            <Route path="/topics/os" element={<OperatingSystem />} />
            <Route path="/topics/dbms" element={<DBMS />} />
            <Route path="/topics/mysql" element={<MySQL />} />
            <Route path="/topics/oops" element={<OOPConcept />} />
            <Route path="/topics/se" element={<SoftwareEngineering />} />
            <Route path="/topics/cn" element={<ComputerNetworks />} />
          </Routes>
        </Router>

        <Toaster
          toastOptions={{
            className: "",
            style: { fontSize: "13px" },
          }}
        />
      </div>
    </UserProvider>
  );
};

export default App;
