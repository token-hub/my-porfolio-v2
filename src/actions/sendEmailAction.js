import { data as responseData } from 'react-router';

export async function sendEmailAction({ request }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());

    let errors = [];

    if (!data.name) {
        errors.push('name must not be empty');
    }

    if (!data.message) {
        errors.push('message must not be empty');
    }

    if (!data.emailAddress) {
        errors.push('email address must not be empty');
    }

    if (errors.length) {
        return responseData(
            { errors },
            {
                status: 400
            }
        );
    }

    try {
        const result = await fetch(`${import.meta.env.VITE_SERVER_URL}/send-email`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const resData = await result.json();

        if (result.ok) {
            return responseData({ result: resData?.message }, { status: 200 });
        } else {
            return responseData(
                {
                    error: resData.error || 'Something went wrong'
                },
                { status: result.status }
            );
        }
    } catch (error) {
        return responseData(
            {
                error: error?.message || 'Something went wrong'
            },
            { status: 500 }
        );
    }
}
