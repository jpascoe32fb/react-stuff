const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: 'JP',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'John Pascoe',
  role: '',
  description:
    'I\'m a student at Clemson University studying Computer Science. This is a small portfolio project I\'ve put together to show a little about me.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/john-pascoe-87bab21b8/',
    github: 'https://github.com/jpascoe32fb',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      '...Description...',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: '',
  },
  {
    name: 'Project 2',
    description:
      '...Description...',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: '',
  },
  {
    name: 'Project 3',
    description:
      '...Description...',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: '',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'C & C++',
  'Java',
  'CSS',
  'Python',
  'JavaScript',
  'React',
  'Git',
  'Cuda',
  'OpenCL & OpenGL',
  'Agile'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'jpascoe32fb@gmail.com',
}

export { header, about, projects, skills, contact }
