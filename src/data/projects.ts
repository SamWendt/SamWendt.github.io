// ✏️ Add a project by copying one block. status: 'Done' | 'In progress' | 'Planned'
export const projects = [
  {
    title: 'Home Lab Log Pipeline',
    description: 'Collect logs from a VM into Elastic and write a detection rule for brute-force logins.',
    tags: ['Elastic', 'Linux', 'Detection'],
    status: 'Planned',
    link: '',
  },
  {
    title: 'pwn.college Progress',
    description: 'Working through Linux, programming and security fundamentals, with notes on each module.',
    tags: ['Linux', 'C', 'Assembly'],
    status: 'In progress',
    link: '/writeups',
  },
  {
    title: 'Data Cleaning Pipeline',
    description: 'Pull a public dataset into a database with automated cleaning and validation steps.',
    tags: ['Python', 'SQL', 'ETL'],
    status: 'Planned',
    link: '',
  },
];
