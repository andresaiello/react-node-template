import { Post } from '../models';

const jsonToModel = (data: any): Post => {
    return {
        text: data.text,
        title: data.title,
        image: data.image,
    };
};

export const fetchQuery = async (query: string) => {
    return fetch(`http://localhost:8080/api/post`, {
        mode: 'cors',
    })
        .then(handleErrors)
        .then((res) => res.json())
        .then((json) => {
            return jsonToModel(json.data);
        })
        .catch((error) => {
            console.log(error);
            return undefined;
        });
};

// Handle HTTP errors since fetch won't.
export const handleErrors = (response: any) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
};
