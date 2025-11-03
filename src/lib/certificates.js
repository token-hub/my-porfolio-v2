import { BREAKPOINTS } from './constants';

import cert1 from '../assets/images/certificates/m220js-1.png';
import cert1smWebp from '../assets/images/certificates/m220js-1-sm.webp';
import cert1lgWebp from '../assets/images/certificates/m220js-1-lg.webp';

import cert2 from '../assets/images/certificates/M320js-1.png';
import cert2smWebp from '../assets/images/certificates/M320js-1-sm.webp';
import cert2lgWebp from '../assets/images/certificates/M320js-1-lg.webp';

import cert3 from '../assets/images/certificates/COC_Building_RESTful_APIs_with_Node.js_and_Express-1.png';
import cert3smWebp from '../assets/images/certificates/COC_Building_RESTful_APIs_with_Node.js_and_Express-1-sm.webp';
import cert3lgWebp from '../assets/images/certificates/COC_Building_RESTful_APIs_with_Node.js_and_Express-1-lg.webp';

import cert4 from '../assets/images/certificates/CertificateOfCompletion_Node.js_Essential_Training-1.png';
import cert4smWebp from '../assets/images/certificates/CertificateOfCompletion_Node.js_Essential_Training-1-sm.webp';
import cert4lgWebp from '../assets/images/certificates/CertificateOfCompletion_Node.js_Essential_Training-1-lg.webp';

import cert5 from '../assets/images/certificates/COC_Express_Essentials_Build_Powerful_Web_Apps_with_Node-1.png';
import cert5smWebp from '../assets/images/certificates/COC_Express_Essentials_Build_Powerful_Web_Apps_with_Node-1-sm.webp';
import cert5lgWebp from '../assets/images/certificates/COC_Express_Essentials_Build_Powerful_Web_Apps_with_Node-1-lg.webp';

import cert6 from '../assets/images/certificates/CertificateOfCompletion_Advanced_Node.js-1.png';
import cert6smWebp from '../assets/images/certificates/CertificateOfCompletion_Advanced_Node.js-1-sm.webp';
import cert6lgWebp from '../assets/images/certificates/CertificateOfCompletion_Advanced_Node.js-1-lg.webp';

import cert7 from '../assets/images/certificates/COC_Programming_Foundations_Design_Patterns-1.png';
import cert7smWebp from '../assets/images/certificates/COC_Programming_Foundations_Design_Patterns-1-sm.webp';
import cert7lgWebp from '../assets/images/certificates/COC_Programming_Foundations_Design_Patterns-1-lg.webp';

import cert8 from '../assets/images/certificates/CertificateOfCompletion_Node.js_Design_Patterns-1.png';
import cert8smWebp from '../assets/images/certificates/CertificateOfCompletion_Node.js_Design_Patterns-1-sm.webp';
import cert8lgWebp from '../assets/images/certificates/CertificateOfCompletion_Node.js_Design_Patterns-1-lg.webp';

import cert9 from '../assets/images/certificates/javascript_basic_certificate-1.png';
import cert9smWebp from '../assets/images/certificates/javascript_basic_certificate-1-sm.webp';
import cert9lgWebp from '../assets/images/certificates/javascript_basic_certificate-1-lg.webp';

import cert10 from '../assets/images/certificates/javascript_intermediate_certificate-1.png';
import cert10smWebp from '../assets/images/certificates/javascript_intermediate_certificate-1-sm.webp';
import cert10lgWebp from '../assets/images/certificates/javascript_intermediate_certificate-1-lg.webp';

import cert11 from '../assets/images/certificates/Advanced-css-and-sass-1.png';
import cert11smWebp from '../assets/images/certificates/Advanced-css-and-sass-1-sm.webp';
import cert11lgWebp from '../assets/images/certificates/Advanced-css-and-sass-1-lg.webp';

import cert12 from '../assets/images/certificates/React-Maximilian-course-1.png';
import cert12smWebp from '../assets/images/certificates/React-Maximilian-course-1-sm.webp';
import cert12lgWebp from '../assets/images/certificates/React-Maximilian-course-1-lg.webp';

import cert13 from '../assets/images/certificates/Nextjs-1.png';
import cert13smWebp from '../assets/images/certificates/Nextjs-1-sm.webp';
import cert13lgWebp from '../assets/images/certificates/Nextjs-1-lg.webp';

import cert14 from '../assets/images/certificates/perplexity.jpg';
import cert14smWebp from '../assets/images/certificates/perplexity-sm.webp';
import cert14lgWebp from '../assets/images/certificates/perplexity-lg.webp';

export const certificates = [
    { imageSmWebp: cert14smWebp, imageLgWebp: cert14lgWebp, imageDefault: cert14, alt: 'Perplexity' },
    { imageSmWebp: cert13smWebp, imageLgWebp: cert13lgWebp, imageDefault: cert13, alt: 'next js certificate' },
    { imageSmWebp: cert12smWebp, imageLgWebp: cert12lgWebp, imageDefault: cert12, alt: 'react certificate' },
    { imageSmWebp: cert11smWebp, imageLgWebp: cert11lgWebp, imageDefault: cert11, alt: 'css and sass certificate' },
    {
        imageSmWebp: cert10smWebp,
        imageLgWebp: cert10lgWebp,
        imageDefault: cert10,
        alt: 'javascript intermediate certificate'
    },
    { imageSmWebp: cert9smWebp, imageLgWebp: cert9lgWebp, imageDefault: cert9, alt: 'javascript basic certificate' },
    {
        imageSmWebp: cert8smWebp,
        imageLgWebp: cert8lgWebp,
        imageDefault: cert8,
        alt: 'node js design pattern certificate'
    },
    {
        imageSmWebp: cert7smWebp,
        imageLgWebp: cert7lgWebp,
        imageDefault: cert7,
        alt: 'Programming foundations design pattern certificate'
    },
    { imageSmWebp: cert6smWebp, imageLgWebp: cert6lgWebp, imageDefault: cert6, alt: 'advance node js certificate' },
    { imageSmWebp: cert5smWebp, imageLgWebp: cert5lgWebp, imageDefault: cert5, alt: 'express js certificate' },
    { imageSmWebp: cert4smWebp, imageLgWebp: cert4lgWebp, imageDefault: cert4, alt: 'node essential training' },
    { imageSmWebp: cert3smWebp, imageLgWebp: cert3lgWebp, imageDefault: cert3, alt: 'restful api certificate' },
    {
        imageSmWebp: cert2smWebp,
        imageLgWebp: cert2lgWebp,
        imageDefault: cert2,
        alt: 'mongodb data modeling certificate'
    },
    { imageSmWebp: cert1smWebp, imageLgWebp: cert1lgWebp, imageDefault: cert1, alt: 'mongodb for js developers' }
];

export function getCertificates(defaultVisibleCountSm = 2, defaultVisibleCountMd = 6) {
    let modifiedCerficates = certificates;
    const mediaQuerySM = window.matchMedia(`(max-width: ${BREAKPOINTS.sm})`);
    const mediaQueryMD = window.matchMedia(`(min-width: ${BREAKPOINTS.md})`);

    if (mediaQuerySM.matches) {
        modifiedCerficates = modifiedCerficates.map((certificate, index) => {
            if (index > defaultVisibleCountSm - 1) {
                return { ...certificate, belongsToViewMore: true };
            } else {
                return certificate;
            }
        });
    }

    if (mediaQueryMD.matches) {
        modifiedCerficates = modifiedCerficates.map((certificate, index) => {
            if (index > defaultVisibleCountMd - 1) {
                return { ...certificate, belongsToViewMore: true };
            } else {
                return certificate;
            }
        });
    }

    return modifiedCerficates;
}
