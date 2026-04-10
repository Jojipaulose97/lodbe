import { Typography } from '../../ui/Typography';

const openRoles = [
  {
    title: 'Full Stack Developer',
    team: 'Core Product Team',
    overview: "Build and scale LODBE's core platforms — SaaS products, dashboards, APIs, and user-facing applications.",
    responsibilities: [
      'Develop front-end interfaces (React / Next.js)',
      'Build backend services and APIs (Node.js / Python)',
      'Design scalable, secure, high-performance systems',
      'Integrate with cloud services and third-party APIs',
    ],
    requirements: ['Modern JS frameworks', 'REST/GraphQL APIs', 'SQL/NoSQL databases', 'Cloud platforms (AWS/GCP/Azure)'],
  },
  {
    title: 'AI Engineer',
    team: 'Applied AI / Product Integration',
    overview: 'Design and implement AI-driven features across LODBE products — from automation to intelligent insights.',
    responsibilities: [
      'Build and integrate AI models and APIs',
      'Develop recommendation systems and data analysis features',
      'Optimize performance and cost of AI pipelines',
      'Embed AI into real product use cases',
    ],
    requirements: ['Python & AI frameworks (TensorFlow, PyTorch)', 'LLM APIs and AI tools', 'Data handling', 'Business-to-AI problem translation'],
  },
  {
    title: 'Backend Engineer',
    team: 'Cloud & Infrastructure',
    overview: 'Own the backbone of LODBE platforms — APIs, data systems, and infrastructure.',
    responsibilities: [
      'Build robust backend services and microservices',
      'Design database architecture and data pipelines',
      'Ensure performance, scalability, and security',
      'Cloud deployment and DevOps processes',
    ],
    requirements: ['Node.js / Python / Go', 'System design & distributed systems', 'Docker, Kubernetes', 'Security best practices'],
  },
  {
    title: 'Frontend Developer',
    team: 'User Experience Focus',
    overview: 'Create intuitive, fast, and beautiful user interfaces for web and mobile platforms.',
    responsibilities: [
      'Build responsive UI with modern frameworks',
      'Optimize performance and usability',
      'Collaborate with designers on clean UX',
      'Ensure consistency across products',
    ],
    requirements: ['JavaScript / TypeScript', 'React / Next.js', 'UI/UX principles'],
  },
  {
    title: 'Product Manager',
    team: 'SaaS & Ecosystem',
    overview: 'Drive product vision, roadmap, and execution across LODBE platforms.',
    responsibilities: [
      'Define product strategy and features',
      'Work with engineering and design teams',
      'Analyze user behavior and improve product experience',
      'Prioritize roadmap based on business impact',
    ],
    requirements: ['SaaS or product environments', 'Strong analytical skills', 'Translate ideas into execution'],
  },
  {
    title: 'DevOps / Cloud Engineer',
    team: 'Infrastructure',
    overview: 'Ensure reliable deployment, monitoring, and scaling of LODBE systems.',
    responsibilities: [
      'Manage CI/CD pipelines',
      'Monitor system performance and uptime',
      'Optimize cloud infrastructure costs',
      'Ensure security and backups',
    ],
    requirements: ['AWS / GCP / Azure', 'CI/CD, Docker, Kubernetes', 'Strong troubleshooting skills'],
  },
  {
    title: 'UI/UX Designer',
    team: 'Design',
    overview: 'Design intuitive, modern, and engaging interfaces for LODBE platforms.',
    responsibilities: [
      'Create wireframes, prototypes, and design systems',
      'Work with product and dev teams',
      'Improve usability and user flows',
    ],
    requirements: ['Figma or similar tools', 'Strong design sense', 'User-centric thinking'],
  },
];

export const OpenRoles = () => {
  return (
    <section id="open-roles" className="px-6 py-16 max-w-7xl mx-auto w-full">
      <div className="space-y-10">
        <div className="text-center space-y-3">
          <Typography variant="h2" className="text-3xl sm:text-4xl">
            Open Roles
          </Typography>
          <p className="text-zinc-500 text-sm max-w-xl mx-auto">
            We're hiring across product, engineering, design, and operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {openRoles.map((item) => (
            <div key={item.title} className="border border-zinc-100 rounded-2xl p-6 space-y-4 hover:border-zinc-300 hover:shadow-md transition-all">

              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-zinc-900 text-base">{item.title}</h3>
                  <span className="text-xs text-zinc-400 font-medium">{item.team}</span>
                </div>
                <a href="mailto:careers@lodbe.com" className="shrink-0 text-xs font-medium bg-zinc-900 text-white px-4 py-1.5 rounded-full hover:bg-zinc-700 transition-colors">
                  Apply
                </a>
              </div>

              {/* Overview */}
              <p className="text-zinc-500 text-sm leading-relaxed">{item.overview}</p>

              {/* Responsibilities */}
              <div className="space-y-1.5">
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Responsibilities</p>
                <ul className="space-y-1">
                  {item.responsibilities.map((r, i) => (
                    <li key={i} className="text-sm text-zinc-600 flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-zinc-400 shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div className="flex flex-wrap gap-2 pt-1">
                {item.requirements.map((req, i) => (
                  <span key={i} className="text-xs bg-zinc-50 border border-zinc-200 text-zinc-600 px-3 py-1 rounded-full">{req}</span>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};