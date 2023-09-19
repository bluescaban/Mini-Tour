export const get = async (url: string) => {
	const response = await fetch(url, {
		...getOptions,
	});
	return await handleResponse(response);
};

export const post = async (url: string, request: any) => {
	const response = await fetch(url, {
		...postOptions,
		body: JSON.stringify(request),
	});

	return await handleResponse(response);
};

/*
 * API helpers
 */
const handleResponse = async (response: any) => {
	if (response.ok) {
		return await response.json();
	} else if (response.status === 400) {
		const error = await response.json();
		throw Error(error);
	} else {
		throw Error(response.statusText);
	}
};

const headers = new Headers({
	accept: 'application/json',
	'content-type': 'application/json',
});

const getOptions = {
	method: 'GET',
	headers,
};

const postOptions = {
	method: 'POST',
	headers,
	credentials: 'same-origin' as RequestCredentials,
};
