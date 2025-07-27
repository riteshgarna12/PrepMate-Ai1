import React from "react";

const OSTheorySection = () => {
  const theoryCards = [
    {
      title: "🧠 What is an Operating System?",
      content: "An Operating System (OS) is system software that manages computer hardware, software resources, and provides common services for computer programs. Examples: Windows, Linux, macOS.",
    },
    {
      title: "🧾 Functions of OS",
      content: "Major functions include: Process Management, Memory Management, File System Management, Device Management, Security & Access Control, and User Interface.",
    },
    {
      title: "🧮 Process vs Program",
      content: "A Program is a static set of instructions stored on disk. A Process is a dynamic instance of a program in execution. Multiple processes can run the same program.",
    },
    {
      title: "📦 Process States",
      content: "A process typically moves through states like New, Ready, Running, Waiting (Blocked), and Terminated. The OS manages transitions between these states.",
    },
    {
      title: "🔁 Scheduling Algorithms",
      content: "Algorithms like FCFS, SJF, Round Robin, Priority Scheduling determine which process gets CPU time. These affect efficiency and fairness.",
    },
    {
      title: "🧵 Threads",
      content: "Threads are the smallest sequence of programmed instructions. Multithreading allows concurrent execution, improving performance on multi-core systems.",
    },
    {
      title: "🔒 Deadlock",
      content: "A deadlock occurs when a group of processes are waiting for each other indefinitely. Conditions: Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait.",
    },
    {
      title: "📁 Memory Management",
      content: "OS handles allocation and deallocation of memory. Techniques include Paging, Segmentation, and Virtual Memory using demand paging & swapping.",
    },
    {
      title: "📄 File System",
      content: "OS manages data storage and access using file systems (FAT, NTFS, ext3/ext4). It handles file naming, organization, permissions, and access control.",
    },
    {
      title: "📡 I/O Management",
      content: "Handles communication between CPU and peripherals (keyboard, disk, network). Uses device drivers and interrupt handling.",
    },
    {
      title: "🔐 Security & Protection",
      content: "Protects resources from unauthorized access. Uses authentication, access control, encryption, firewalls, and permissions.",
    },
    {
      title: "🌐 Types of OS",
      content: "Batch OS, Time-Sharing OS, Distributed OS, Network OS, Mobile OS, Real-Time OS. Each is designed for specific environments and use cases.",
    },
  ];

  const tips = [
    "✅ Understand process vs thread — it's asked in almost every OS interview.",
    "✅ Practice deadlock avoidance/prevention algorithms like Banker's Algorithm.",
    "✅ Learn scheduling algorithms with Gantt chart examples.",
    "✅ Revise memory models: paging, segmentation, fragmentation.",
    "✅ Know real-time OS examples — embedded systems like car ECU, pacemakers.",
  ];
const examples = [
    {
      title: "🔄 Context Switching",
      content: "When multiple processes are running, the OS switches between them by saving and loading their states. This enables multitasking in systems like Windows and Linux.",
    },
    {
      title: "🧵 Multithreading in Browsers",
      content: "Web browsers like Chrome use multithreading — one thread for rendering UI, another for downloading content, etc., ensuring smooth performance.",
    },
    {
      title: "📁 Virtual Memory Example",
      content: "When RAM is full, inactive pages are moved to disk using paging. This allows large apps like Photoshop to run even with limited RAM.",
    },
    {
      title: "🔐 Access Control Example",
      content: "In Linux, file permissions (rwx) define who can read/write/execute files, ensuring system security through user-based access control.",
    },
  ];

  const interviewQuestions = [
    "💬 What is the difference between process and thread?",
    "💬 What are the necessary conditions for deadlock?",
    "💬 Explain virtual memory and its benefits.",
    "💬 What is paging and how does it differ from segmentation?",
    "💬 What are different types of scheduling algorithms?",
    "💬 How does the OS handle context switching?",
    "💬 What are system calls? Give examples.",
    "💬 Explain difference between user mode and kernel mode.",
  ];
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-teal-700 mb-6">💻 Operating System: Theory Section</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {theoryCards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white light:bg-gray-900 rounded-2xl shadow-md p-6 border border-teal-200 light:border-teal-700 hover:shadow-lg transition duration-300"
          >
            <h2 className="text-xl font-semibold text-teal-600 mb-2">{card.title}</h2>
            <p className="text-gray-800 light:text-gray-300 text-base leading-relaxed">{card.content}</p>
          </div>
        ))}
      </div>
      {/* Examples Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">🧪 Real-World Examples & Use Cases</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {examples.map((ex, i) => (
            <div
              key={i}
              className="bg-white light:bg-gray-900 border border-teal-300 light:border-teal-700 rounded-2xl p-5 shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-teal-500 mb-2">{ex.title}</h3>
              <p className="text-gray-800 light:text-gray-300 leading-relaxed">{ex.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tips & Tricks Section */}
      <section className="mb-12 card">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">💡 Tips & Tricks</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-800 light:text-gray-300">
          {tips.map((tip, idx) => (
            <li key={idx} className="leading-relaxed">{tip}</li>
          ))}
        </ul>
      </section>

      {/* Interview Questions Section */}
      <section className="mb-12 card">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">🧠 Top OS Interview Questions</h2>
        <ul className="space-y-3 text-gray-800 light:text-gray-300 list-disc pl-6">
          {interviewQuestions.map((q, idx) => (
            <li key={idx} className="leading-relaxed">{q}</li>
          ))}
        </ul>
      </section>

      {/* Conclusion Section */}
      <section className="mb-6 card">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">🔚 Conclusion</h2>
        <p className="text-lg text-gray-700 light:text-gray-300 leading-relaxed">
          Operating Systems form the backbone of modern computing, enabling hardware-software interaction, resource management, and user interfaces. Mastering OS concepts like memory management, process handling, file systems, and concurrency is essential for system-level programming and interviews. Solid understanding here sets a strong base for advanced topics like networking, compilers, and distributed systems.
        </p>
      </section>
      <div className="px-6 py-10 max-w-6xl mx-auto space-y-12">
      <h1 className="text-4xl font-bold text-teal-700 mb-4">
        🧠 Operating System (OS) – Complete Guide
      </h1>

      {/* Theory Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white light:bg-zinc-900 rounded-2xl p-6 shadow-md border-l-4 border-teal-500">
          <h2 className="text-xl font-semibold text-teal-600 mb-2">📘 What is an Operating System?</h2>
          <p className="text-gray-700 light:text-gray-200">
            An OS is system software that manages computer hardware, software resources, and provides services for programs. It acts as an interface between users and the hardware.
          </p>
        </div>

        <div className="bg-white light:bg-zinc-900 rounded-2xl p-6 shadow-md border-l-4 border-indigo-500">
          <h2 className="text-xl font-semibold text-indigo-600 mb-2">💡 Functions of an OS</h2>
          <ul className="list-disc ml-5 text-gray-700 light:text-gray-200">
            <li>Process Management</li>
            <li>Memory Management</li>
            <li>File System Management</li>
            <li>Device Management</li>
            <li>Security and Access Control</li>
          </ul>
        </div>

        <div className="bg-white light:bg-zinc-900 rounded-2xl p-6 shadow-md border-l-4 border-pink-500">
          <h2 className="text-xl font-semibold text-pink-600 mb-2">🧩 Types of Operating Systems</h2>
          <p className="text-gray-700 light:text-gray-200">
            <strong>Batch OS</strong>, <strong>Time-Sharing OS</strong>, <strong>Distributed OS</strong>, <strong>Real-Time OS</strong>, <strong>Multitasking OS</strong>, and more.
          </p>
        </div>

        <div className="bg-white light:bg-zinc-900 rounded-2xl p-6 shadow-md border-l-4 border-blue-500">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">🧠 Process vs Thread</h2>
          <p className="text-gray-700 light:text-gray-200">
            A process is an instance of a program. A thread is the smallest unit of execution within a process. Threads share memory, but processes don't.
          </p>
        </div>

        <div className="bg-white light:bg-zinc-900 rounded-2xl p-6 shadow-md border-l-4 border-green-500">
          <h2 className="text-xl font-semibold text-green-600 mb-2">📍 Deadlocks</h2>
          <p className="text-gray-700 light:text-gray-200">
            A deadlock occurs when a group of processes are blocked because each process is holding a resource and waiting for another one.
          </p>
          <p className="mt-2 text-sm">Conditions: Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait</p>
        </div>
      </div>

      {/* Examples Section */}
      <div className="bg-violet-100 light:bg-zinc-800 rounded-2xl p-6 shadow-md border-l-4 border-violet-500">
        <h2 className="text-2xl font-bold text-violet-700 mb-3">🔍 Examples & Use-Cases</h2>
        <ul className="list-disc ml-5 text-gray-800 light:text-gray-200">
          <li>OS like Linux and Windows manage multitasking and user scheduling.</li>
          <li>Android is built on a Linux kernel with real-time OS features.</li>
          <li>Modern OS use virtual memory for better resource utilization.</li>
        </ul>
      </div>

      {/* Tips & Tricks */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-yellow-100 light:bg-zinc-800 rounded-2xl p-6 shadow-md border-l-4 border-yellow-500">
          <h2 className="text-xl font-semibold text-yellow-700 mb-2">⚡ Tip: Understand Scheduling</h2>
          <p className="text-gray-800 light:text-gray-200">
            Know the difference between FCFS, Round Robin, SJF, and Priority Scheduling. They're frequently asked in interviews.
          </p>
        </div>

        <div className="bg-rose-100 light:bg-zinc-800 rounded-2xl p-6 shadow-md border-l-4 border-rose-500">
          <h2 className="text-xl font-semibold text-rose-700 mb-2">🔐 Tip: Remember Deadlock Prevention</h2>
          <p className="text-gray-800 light:text-gray-200">
            Learn deadlock handling strategies: Prevention, Avoidance (Banker's Algo), Detection & Recovery.
          </p>
        </div>
      </div>

      {/* Interview Questions */}
      <div className="bg-blue-50 light:bg-zinc-900 rounded-2xl p-6 shadow-md border-l-4 border-blue-600">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">💬 Interview Questions</h2>
        <ul className="list-decimal ml-6 space-y-2 text-gray-800 light:text-gray-100">
          <li>What are the main functions of an OS?</li>
          <li>Explain the difference between a process and a thread.</li>
          <li>What is virtual memory and how does it work?</li>
          <li>What are page faults? How are they handled?</li>
          <li>Describe various CPU scheduling algorithms.</li>
          <li>How does deadlock differ from starvation?</li>
          <li>What are semaphores and how are they used?</li>
        </ul>
      </div>

      {/* Conclusion */}
      <div className="bg-green-50 light:bg-zinc-800 rounded-2xl p-6 shadow-md border-l-4 border-green-600">
        <h2 className="text-2xl font-bold text-green-700 mb-3">📌 Conclusion</h2>
        <p className="text-gray-700 light:text-gray-200">
          Operating Systems form the core of every computing device. A deep understanding of concepts like memory management, scheduling, and deadlocks will help you in both academics and real-world applications. Mastering OS helps you write efficient programs and ace interviews.
        </p>
      </div>
    </div>
    </div>
  );
};

export default OSTheorySection;
