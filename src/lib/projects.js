import { BREAKPOINTS } from './constants';

const projects = [
    {
        name: 'Tasty food',
        description:
            'A web application where people can look and share recipes they like, and have a fun conversation with the author of recipe in real time.',
        viewProjectLink: '/tastyfood'
    },
    {
        name: 'Project 2',
        description:
            'Wilsonport is a multiservice logistics and transport company and I created their website from scratch using the frontend tools I know.',
        viewProjectLink: ''
    },
    {
        name: 'Project 3',
        description:
            'Wilsonport is a multiservice logistics and transport company and I created their website from scratch using the frontend tools I know.',
        viewProjectLink: ''
    },
    {
        name: 'Project 4',
        description:
            'Wilsonport is a multiservice logistics and transport company and I created their website from scratch using the frontend tools I know.',
        viewProjectLink: ''
    }
];

const viewProjects = [
    {
        name: 'tastyfood',
        displayName: 'tasty food',
        image: 'https://placehold.co/600x400',
        imageWebp: null,
        badges: ['react', 'node js', 'mongodb', 'bootstrap', 'git', 'Amazon EC2', 'betterAuth', 'socket.io'],
        liveDemoLink: 'http://google.com',
        sourceCodeLink: 'http://google.com',
        overview: [
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolor commodi voluptate nam repudiandae neque fuga aut minima recusandae reiciendis, iure dolorem, ipsa, nulla tempora quam doloribus quaerat minus quis.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolor commodi voluptate nam repudiandae neque fuga aut minima recusandae reiciendis, iure dolorem, ipsa, nulla tempora quam doloribus quaerat minus quis.'
        ],
        features: ['item', 'item', 'item', 'item', 'item', 'item']
    }
];

export function getViewProjectDetails(projectName) {
    return viewProjects.find((p) => p.name === projectName);
}

export function getProjects(defaultVisibleCount = 2) {
    let modifiedProjects = projects;
    const mediaQuery = window.matchMedia(`(max-width: ${BREAKPOINTS.sm})`);

    if (mediaQuery.matches) {
        modifiedProjects = modifiedProjects.map((project, index) => {
            if (index > defaultVisibleCount - 1) {
                return { ...project, belongsToViewMore: true };
            } else {
                return project;
            }
        });
    }

    return modifiedProjects;
}
