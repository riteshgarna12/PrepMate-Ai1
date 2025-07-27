export const PREP_TOPICS = [
  // 🧑‍💻 Programming Languages
  {
    id: 'c',
    category: 'Programming Languages',
    title: 'C Programming',
    description: 'Master procedural programming, memory management, and core logic-building fundamentals with C.',
    tags: ['Syntax', 'Pointers', 'Arrays', 'Structures', 'Functions', 'Memory Allocation', 'Recursion'],
  },
  {
    id: 'cpp',
    category: 'Programming Languages',
    title: 'C++',
    description: 'Extend C with Object-Oriented Programming concepts and explore the Standard Template Library (STL).',
    tags: ['OOPs', 'STL', 'Inheritance', 'Polymorphism', 'Templates', 'Exception Handling', 'File Handling'],
  },
  {
    id: 'java',
    category: 'Programming Languages',
    title: 'Java',
    description: 'Popular language for enterprise applications. Strong OOP support, cross-platform execution using JVM.',
    tags: ['JVM', 'OOPs', 'Collections', 'Threads', 'Interfaces', 'Exception Handling', 'Streams', 'File I/O'],
  },
  {
    id: 'python',
    category: 'Programming Languages',
    title: 'Python',
    description: 'Dynamic, high-level language used in scripting, automation, web, data science, and AI.',
    tags: ['Syntax', 'Functions', 'OOPs', 'Lists & Dicts', 'File Handling', 'Libraries: NumPy, Pandas, Matplotlib'],
  },

  // 💻 Development
  {
    id: 'dsa',
    category: 'Professional Skill Tracks',
    title: 'Data Structures & Algorithms (DSA)',
    description: 'Master problem-solving techniques, optimize your code, and learn how to use data structures efficiently.',
    tags: ['Arrays', 'Linked List', 'Stacks', 'Queues', 'Trees', 'BST', 'Heaps', 'Graphs', 'DP', 'Recursion'],
  },
  {
    id: 'webdevelopment',
    category: 'Professional Skill Tracks',
    title: 'Full Stack Web Development',
    description: 'Learn frontend and backend development to build complete web applications with modern technologies.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Authentication'],
  },
  {
    id: 'android',
    category: 'Professional Skill Tracks',
    title: 'Android Development',
    description: 'Design and develop Android applications using Kotlin/Java, XML, and Android Studio.',
    tags: ['Kotlin', 'Java', 'XML', 'Activities', 'Fragments', 'Jetpack', 'Firebase', 'APIs'],
  },
  {
    id: 'datascience',
    category: 'Professional Skill Tracks',
    title: 'Data Science',
    description: 'Use Python libraries to analyze data, visualize insights, and create predictive models.',
    tags: ['Pandas', 'Numpy', 'Matplotlib', 'Seaborn', 'EDA', 'Data Cleaning', 'Statistics', 'Wrangling'],
  },
  {
    id: 'machinelearning',
    category: 'Professional Skill Tracks',
    title: 'Machine Learning (ML)',
    description: 'Build intelligent systems using ML techniques including supervised and unsupervised learning.',
    tags: ['Linear Regression', 'SVM', 'Decision Trees', 'Random Forest', 'Clustering', 'NLP', 'Sklearn'],
  },
  {
    id: 'cloudcomputing',
    category: 'Professional Skill Tracks',
    title: 'DevOps',
    description: 'Deploy, manage, and scale apps using cloud platforms like AWS, Azure, and GCP.',
    tags: ['AWS', 'Azure', 'GCP', 'IAM', 'S3', 'Lambda', 'Kubernetes', 'CI/CD', 'Cloud Architecture'],
  },

  // 📚 Core CS
  {
    id: 'oops',
    category: 'Core CS Subjects',
    title: 'Object-Oriented Programming (OOPs)',
    description: 'Understand OOP principles and their application for modular, reusable code.',
    tags: ['Encapsulation', 'Abstraction', 'Inheritance', 'Polymorphism', 'Classes', 'Overloading'],
  },
  {
    id: 'cn',
    category: 'Core CS Subjects',
    title: 'Computer Networks',
    description: 'Learn networking fundamentals: layers, protocols, IP addressing, routing, and security.',
    tags: ['OSI Model', 'TCP/IP', 'HTTP/HTTPS', 'DNS', 'Routing', 'Firewalls', 'Congestion Control'],
  },
  {
    id: 'dbms',
    category: 'Core CS Subjects',
    title: 'Database Management System (DBMS)',
    description: 'Understand database design, transactions, indexing, normalization, and query processing.',
    tags: ['ER Diagrams', 'Normalization', 'ACID', 'Indexes', 'Transactions', 'Joins', 'Views'],
  },
  {
    id: 'os',
    category: 'Core CS Subjects',
    title: 'Operating System (OS)',
    description: 'Understand OS fundamentals: process/thread management, memory, and scheduling.',
    tags: ['Processes', 'Threads', 'Scheduling', 'Deadlock', 'Semaphores', 'Paging', 'Virtual Memory'],
  },
  {
    id: 'mysql',
    category: 'Core CS Subjects',
    title: 'MySQL',
    description: 'Use SQL to manage relational databases with joins, subqueries, and procedures.',
    tags: ['SELECT', 'JOIN', 'GROUP BY', 'Subqueries', 'Indexes', 'Stored Procedures', 'CRUD'],
  },
  {
    id: 'se',
    category: 'Core CS Subjects',
    title: 'Software Engineering',
    description: 'Learn development methodologies, project planning, UML, testing, and version control.',
    tags: ['SDLC', 'Agile', 'Scrum', 'UML', 'Design Patterns', 'Testing', 'Git'],
  },

  // ✍️ Aptitude
  {
    id: 'quant',
    category: 'Aptitude',
    title: 'Quantitative Aptitude',
    description: 'Practice math-based questions useful for placement and competitive exams.',
    tags: ['Percentages', 'Profit & Loss', 'Time & Work', 'TSD', 'Ratios', 'Mixtures', 'Averages'],
  },
  {
    id: 'logical',
    category: 'Aptitude',
    title: 'Logical Reasoning',
    description: 'Strengthen logical thinking and pattern recognition to solve reasoning problems.',
    tags: ['Puzzles', 'Blood Relations', 'Series', 'Coding-Decoding', 'Syllogisms'],
  },
  {
    id: 'verbal',
    category: 'Aptitude',
    title: 'Verbal Ability',
    description: 'Improve grammar, comprehension, and vocabulary for interviews and tests.',
    tags: ['Synonyms', 'Antonyms', 'RC', 'Sentence Correction', 'Error Spotting'],
  },
  {
    id: 'di',
    category: 'Aptitude',
    title: 'Data Interpretation',
    description: 'Analyze data in graphs and charts to derive quick and accurate conclusions.',
    tags: ['Bar Graphs', 'Pie Charts', 'Tables', 'Line Graphs', 'Caselets', 'Data Sufficiency'],
  }
];
