import React from "react";

const CloudDevOps = () => {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto text-[var(--color-text-main)]">
      <h1 className="text-4xl font-bold text-[var(--color-accent-dark)] mb-10 text-center">
        ☁️ Cloud Computing & DevOps
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {/* What is Cloud Computing */}
        <div className="card border-l-4 border-[var(--color-accent-dark)]">
          <h2 className="text-2xl font-semibold text-[var(--color-accent-dark)] mb-2">
            🌐 What is Cloud Computing?
          </h2>
          <p className="text-[var(--color-text-muted)] leading-relaxed">
            Cloud computing delivers computing services (servers, storage, databases, networking, software)
            over the Internet ("the cloud") to offer faster innovation, flexible resources, and economies of scale.
            You pay only for the cloud services you use.
          </p>
        </div>

        {/* What is DevOps */}
        <div className="card border-l-4 border-[var(--color-accent)]">
          <h2 className="text-2xl font-semibold text-[var(--color-accent)] mb-2">
            ⚙️ What is DevOps?
          </h2>
          <p className="text-[var(--color-text-muted)] leading-relaxed">
            DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). It aims
            to shorten the software development lifecycle and provide continuous delivery with high software quality.
          </p>
        </div>

        {/* DevOps Lifecycle */}
        <div className="card border-l-4 border-teal-500">
          <h2 className="text-2xl font-semibold text-teal-600 mb-2">🔄 DevOps Lifecycle</h2>
          <ul className="list-disc pl-5 text-[var(--color-text-muted)]">
            <li>Plan</li>
            <li>Develop</li>
            <li>Build</li>
            <li>Test</li>
            <li>Release</li>
            <li>Deploy</li>
            <li>Operate</li>
            <li>Monitor</li>
          </ul>
        </div>

        {/* Tools */}
        <div className="card border-l-4 border-orange-400">
          <h2 className="text-2xl font-semibold text-orange-500 mb-2">🧰 DevOps Tools</h2>
          <p className="text-[var(--color-text-muted)]">Popular tools include:</p>
          <ul className="list-disc pl-5 text-[var(--color-text-muted)]">
            <li>Git, GitHub, GitLab</li>
            <li>Jenkins, Travis CI</li>
            <li>Docker, Kubernetes</li>
            <li>Ansible, Puppet, Chef</li>
            <li>Prometheus, Grafana</li>
            <li>Terraform, AWS CloudFormation</li>
          </ul>
        </div>

        {/* CI/CD */}
        <div className="card border-l-4 border-rose-400">
          <h2 className="text-2xl font-semibold text-rose-500 mb-2">🚀 CI/CD</h2>
          <p className="text-[var(--color-text-muted)]">
            Continuous Integration (CI) is the practice of merging code changes frequently with automated testing.
            Continuous Deployment/Delivery (CD) automates the release of validated code to production.
          </p>
        </div>

        {/* Platforms */}
        <div className="card border-l-4 border-coral-500">
          <h2 className="text-2xl font-semibold text-[var(--color-accent)] mb-2">☁️ Major Cloud Platforms</h2>
          <ul className="list-disc pl-5 text-[var(--color-text-muted)]">
            <li><strong>AWS</strong>: S3, EC2, Lambda, CloudWatch</li>
            <li><strong>Azure</strong>: Azure DevOps, Functions, App Services</li>
            <li><strong>GCP</strong>: Compute Engine, Cloud Functions, Kubernetes Engine</li>
          </ul>
        </div>

        {/* Containers */}
        <div className="card border-l-4 border-teal-400">
          <h2 className="text-2xl font-semibold text-teal-500 mb-2">📦 Docker & Kubernetes</h2>
          <p className="text-[var(--color-text-muted)]">
            <strong>Docker</strong> is a containerization platform. <strong>Kubernetes</strong> is a container
            orchestration system that automates deployment, scaling, and management of applications.
          </p>
        </div>

        {/* Questions */}
        <div className="card border-l-4 border-pink-400">
          <h2 className="text-2xl font-semibold text-pink-500 mb-2">🎯 Interview Questions</h2>
          <ul className="list-disc pl-5 text-[var(--color-text-muted)]">
            <li>What is the difference between continuous delivery and continuous deployment?</li>
            <li>Explain the benefits of microservices and containers in DevOps.</li>
            <li>How does Kubernetes handle scaling and load balancing?</li>
            <li>What are the advantages of infrastructure as code?</li>
            <li>How does monitoring and logging contribute to DevOps?</li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="card border-l-4 border-[var(--color-accent-dark)]">
          <h2 className="text-2xl font-semibold text-[var(--color-accent-dark)] mb-2">✅ Conclusion</h2>
          <p className="text-[var(--color-text-muted)]">
            Cloud & DevOps are integral to modern software delivery. Mastering cloud platforms and DevOps tools not
            only improves deployment speed and software quality but also makes you industry-ready for modern
            engineering teams.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CloudDevOps;
