const fetchBreedList = async ({ queryKey }) => {
    const animal = queryKey[1];
    const url = `http://pets-v2.dev-apis.com/breeds?animal=${animal}`

    const apiRes = await fetch(url);

    if (!apiRes.ok) {
        throw new Error(`breeds/${animal} fetch NOT OK`);
    }

    return apiRes.json();
}

export default fetchBreedList;