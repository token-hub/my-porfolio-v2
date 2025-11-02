import { BREAKPOINTS } from './constants';

const projects = [
    {
        name: 'Tasty food',
        description:
            'A web application where people can look and share recipes they like, and have a fun conversation with the author of recipe in real time.'
    },
    {
        name: 'Project 2',
        description:
            'Wilsonport is a multiservice logistics and transport company and I created their website from scratch using the frontend tools I know.'
    },
    {
        name: 'Project 3',
        description:
            'Wilsonport is a multiservice logistics and transport company and I created their website from scratch using the frontend tools I know.'
    },
    {
        name: 'Project 4',
        description:
            'Wilsonport is a multiservice logistics and transport company and I created their website from scratch using the frontend tools I know.'
    }
];

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
