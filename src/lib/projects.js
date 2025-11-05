import { BREAKPOINTS } from './constants';
import tastyFoodSMWebp from '../assets/images/tasty-food-mockup-all-sm.webp';
import tastyFoodLGWebp from '../assets/images/tasty-food-mockup-all-lg.webp';
import tastyFood from '../assets/images/tasty-food-lg-mockup.png';

const projects = [
    {
        name: 'Tasty food',
        description:
            'A web application where people can look and share recipes they like, and have a fun conversation with the author of recipe in real time.',
        viewProjectLink: '/tastyfood',
        image: tastyFood,
        imageWebp: {
            sm: '',
            lg: ''
        }
    },
    {
        name: 'Project 2',
        description: 'Coming soon! :D',
        viewProjectLink: ''
    }
];

const viewProjects = [
    {
        name: 'tastyfood',
        displayName: 'tasty food',
        image: tastyFood,
        imageWebp: {
            sm: tastyFoodSMWebp,
            lg: tastyFoodLGWebp
        },
        badges: ['react', 'node js', 'mongodb', 'bootstrap', 'git', 'Amazon EC2', 'betterAuth', 'socket.io'],
        liveDemoLink: 'https://tasty-food.johnsuyang.dev/',
        sourceCodeLink: 'https://github.com/token-hub/tasty-food',
        overview: [
            'Tasty Food is a full-stack web application that brings food enthusiasts together by allowing users to share their favorite recipes, discover new ones, and interact in real time. The platform focuses on community-driven engagement, where every recipe tells a story, and every cook can inspire others.',
            'Tasty Food is more than just a recipe-sharing app — it’s a social platform for food lovers. By combining CRUD functionality, real-time communication, and interactive user features, it offers a dynamic environment where creativity and community meet.'
        ],
        features: [
            'User authentication',
            'update user account',
            'Create and manage own recipes',
            'Like, comment and rate other recipes',
            'Search recipes',
            'Rating notifications for your own recipes',
            'Real time chat with other recipe authors'
        ]
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
