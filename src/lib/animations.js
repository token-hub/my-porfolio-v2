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
