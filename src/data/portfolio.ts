export const portfolioData = {
  personal: {
    name: 'Remya manoharan',
    title: 'Full Stack Developer',
    email: 'remyajinil@outlook.com',
    phone: '+4571406956',
    location: 'Vallensbæk, Denmark',
    bio: 'Building scalable, user-focused applications with a strong foundation in finance and analytics.',
    image: '/assets/images/remya.png',
  },
  social: {
    github: 'https://github.com/RemyaManoharan',
    linkedin: 'https://www.linkedin.com/in/remyamm',
  },

  about: {
    title: 'Who Am I',
    paragraphs: [
      "Hello! My name is Remya Manoharan. I'm an aspiring Full Stack Developer.",
      "With a unique blend of technical expertise and financial acumen, I bring a distinctive perspective to front-end development. My journey to programming restarted again with a fascination of how technology can transform complex financial data into intuitive, user friendly interfaces. Holding a B. Tech in Computer Science and Engineering and an MBA in Banking and Finance, I have a deeper understanding of both the technical and business aspects of software development.",
      "I thrive in collaborative environments where innovation and continuous learning are encouraged. My proficiency in Agile Scrum Methodology ensures that project is delivered efficiently and effectively, meeting both client and business needs.",
    ],
    cvUrl: '/assets/documents/Remya_CV.pdf',
  },

  skills: {
    frontend: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'JavaScript',
      'HTML5',
      'CSS3',
    ],
    backend: ['C3', 'Node.js', 'Express', 'Python', 'Django', 'REST APIs'],
    database: ['MongoDB', 'PostgreSQL', 'MySQL'],
    tools: ['Git', 'Docker', 'AWS', 'VS Code'],
  },

  experience: [
    {
      id: 1,
      company: 'Costbits',
      position: 'Full Stack Developer',
      duration: '2023 - Present',
      description:
        'Played a key role in the development of CostBits’ comprehensive analytics solution for procurement and cost control, where I utilize my expertise in frontend development and integrate it with financial acumen.Optimized UI load times by 60% and enhanced user satisfaction scores by 20% through continuous performance optimization, testing, and code refactoring to ensure maintainability',
      technologies: [
        'React',
        'TypeScript',
        'TailwindCSS',
        'c#',
        'ASP.NET Core',
        'POSTGRESQL',
        'LINQ',
      ],
    },
    {
      id: 2,
      company: 'Kerala State Co-operative Bank Ltd',
      position: 'Asistant Finance Manager',
      duration: '2016-2022',
      description:
        'Supported budgeting and forecasting for multiple business units, managing multi-million portfolios and ensuring alignment with strategic targetss,Analyzed monthly financial performance and variances, contributing to 3–5% annual cost efficiency improvements.',
      technologies: [
        'Excel',
        'SAP',
        'Accounting',
        'Budgeting',
        'Financial Modelling',
        'ASP.NET Core',
      ],
    },
    {
      id: 3,
      company: 'Tata Consultancy Services',
      position: 'Associate Software Engineer',
      duration: '2012-2014',
      description:
        'Developed backend systems for a telecommunications company application using C#.Implemented complex data calculations and algorithms to support telecom operations.Designed and developed database structures using Oracle Database',
      technologies: [
        'C#',
        'ASP.NET',
        'JavaScipt',
        'Oracle Server',
        'SQL',
        'Agile Methodologies',
      ],
    },
  ],

  projects: [
    {
      id: 1,
      title: 'AI-Powered Chatbot',
      description:
        'AI chatbot with AWS Deployment and integration with third-party APIs for enhanced functionality.',
      technologies: [
        'React',
        'TypeScript',
        'Node.js',
        'S3',
        'Lambda',
        'API Gateway',
        'DynamoDB',
        'Bedrock',
      ],
      github: 'https://github.com/RemyaManoharan/chatai-app-aws',
      demo: '',
      // image: "/assets/images/project1.jpg"
    },
    {
      id: 2,
      title: 'FinVision - Financial Dashboard',
      description:
        'FinVision is a comprehensive financial dashboard application that provides real-time visualization and analysis of financial data. The application allows users to track expenses, monitor investments, analyze budget allocations, and generate insightful reports—all within a clean, intuitive interface.',
      technologies: [
        'React',
        'TypeScript',
        'Node.js',
        'Express',
        'PostgreSQL',
        'D3.js',
      ],
      github: 'https://github.com/RemyaManoharan/FinVision',
      demo: '',
      image: '/assets/images/finvision.png',
    },
    {
      id: 3,
      title: 'Job Spehere',
      description:
        'A full-stack job search application where users can browse listings, apply for positions, and manage their job applications. Built with React, TypeScript, Tailwind CSS on the frontend, and Node.js, Express, and PostgreSQL on the backend.',
      technologies: [
        'React',
        'JavaScript',
        'Zustand',
        'TailwindCSS',
        'Node.js',
        'Express',
        'PostgreSQL',
      ],
      github: 'https://github.com/RemyaManoharan/Job_Board',
      demo: '',
      image: '/assets/images/jobsphere.png',
    },
    {
      id: 4,
      title: 'Amazon clone',
      description:
        'Amazon clone with home page, product catalog, cart functionality.',
      technologies: ['React', 'JavaScript', 'Redux', 'TailwindCSS'],
      github: 'https://github.com/RemyaManoharan/amazon_clone',
      demo: '',
      image: '/assets/images/amazonclone.png',
    },
    {
      id: 4,
      title: 'Meal Share App',
      description:
        'Another full stack project for viewing meals , making reservation, add reviews. Designed the database, writes routes for backend and created reusable components.',
      technologies: ['React', 'JavaScript', 'Node.js', 'Express', 'PostgreSQL'],
      github: 'https://github.com/RemyaManoharan/meal_app',
      demo: '',
      image: '/assets/images/mealhome.png',
    },
    {
      id: 5,
      title: 'Notes Manager',
      description:
        'A React-based notes management application that helps you organize your thoughts, ideas, and tasks efficiently , using Vite as the build tool.',
      technologies: ['React', 'TypeScript', 'Vite', 'TailwindCSS', 'Zustand'],
      github: 'https://github.com/RemyaManoharan/NotesManager',
      demo: '',
      image: '/assets/images/notesmanager.png',
    },
    {
      id: 6,
      title: 'Job Search App',
      description:
        'A full stack project that enable users to view jobs, companies, apply for job.Admin has the functionality to approve/reject companies and job. Admin can view all the jobs , total open jobs,users etc. User authentication using firebase.',
      technologies: [
        'React',
        'TypeScript',
        'Node.js',
        'Express',
        'PostgreSQL',
        'Chart.js',
      ],
      github: 'https://github.com/RemyaManoharan/class-25-ironside',
      demo: '',
      image: '/assets/images/hyfjobadd.png',
    },
  ],

  education: [
    {
      id: 1,
      institution: 'Cochin University of Science and Technology',
      degree: "Bachelor's in Computer Science",
      duration: '2008-2012',
      description:
        'Passed out with distinction, and received a CGPA of 8.6 out of 10.',
    },
    {
      id: 2,
      institution: 'Bharathiar University',
      degree: 'Masters in Business Administration',
      duration: '2014-2016',
      description:
        'Passed out with distinction, and received a CGPA of 8.6 out of 10.',
    },
  ],

  certifications: [
    {
      id: 1,
      name: 'Full Stack Development Bootcamp',
      provider: 'HackYourFuture, Denmark',
      duration: '2023',
      description:
        'Intensive bootcamp covering modern web development technologies including React, Node.js, and database management.',
    },
    {
      id: 2,
      name: 'Data Analytics',
      provider: 'Professional Course - Devoteam + HackYourFuture',
      duration: '2025',
      description:
        'Comprehensive training in data analysis, visualization, and statistical methods using Power BI, Alteryx.',
    },
    {
      id: 3,
      name: 'AWS Cloud Computing and Generative AI',
      provider: 'Amazon Web Services',
      duration: '2025- December',
      description:
        'Cloud computing fundamentals, AWS services like EC2, S3, Lambda, Serverless, etc., and cloud architecture best practices.',
    },
  ],
};
