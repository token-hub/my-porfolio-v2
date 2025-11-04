export function blingkingCursor(targetElement) {
    let intervalId;
    if (targetElement) {
        intervalId = setInterval(() => {
            targetElement.classList.toggle('invisible');
        }, 500);
    }

    return intervalId;
}

function timer(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}

function forwardTextAnimation(text, targetElement) {
    return new Promise((resolve) => {
        const typingDelay = 100;
        let timeoutId;
        for (let i = 0; i < text.length; i++) {
            timeoutId = setTimeout(() => {
                targetElement.innerHTML += text[i];

                if (i == text.length - 1) {
                    resolve(timeoutId);
                }
            }, typingDelay * i);
        }
    });
}

function backwardTextAnimation(targetElement) {
    return new Promise((resolve) => {
        const typingDelay = 100;
        const text = targetElement.innerHTML;
        let outerCounter = 1;
        let timeoutId;

        for (let i = text.length; i > 0; i--) {
            timeoutId = setTimeout(() => {
                targetElement.innerHTML = text
                    .split('') // turn text to array first
                    .splice(0, i - 1) // remove the last character
                    .join(''); // turn array back to text again

                if (i == 1) {
                    resolve(timeoutId);
                }
            }, typingDelay * outerCounter);
            outerCounter++;
        }
    });
}

export async function animatedTextEvent(targetElement, currentText = 'John Suyang') {
    let textArray = ['John Suyang', 'Full-stack Developer'];

    const forwardTimeoutId = await forwardTextAnimation(currentText, targetElement);
    await timer(2000);
    currentText = currentText == textArray[0] ? textArray[1] : textArray[0];
    const backwardTimeoutId = await backwardTextAnimation(targetElement);
    await animatedTextEvent(targetElement, currentText);

    return { forwardTimeoutId, backwardTimeoutId };
}

export function sectionAnimation(selector) {
    const elements = document.querySelectorAll(`.${selector}`);
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove(selector);
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15,
            rootMargin: '50px'
        }
    );

    if (!elements.length) return;

    elements.forEach((section) => {
        observer.observe(section);
    });

    return observer;
}

export function viewMore(buttonSelector, elemSelector) {
    const button = document.querySelector(buttonSelector);
    const targetElements = document.querySelectorAll(elemSelector);
    if (targetElements && button) {
        targetElements.forEach((el) => {
            if (el.classList.contains('d-none')) {
                el.classList.remove('d-none');
                setTimeout(() => el.classList.add('show'), 10);
                button.textContent = 'View Less';
            } else {
                el.classList.remove('show');
                el.addEventListener('transitionend', () => el.classList.add('d-none'), { once: true });
                button.textContent = 'View More';
            }
        });
    }
}
