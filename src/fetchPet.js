const fetchPet = async ({ queryKey }) => {
    const id = queryKey[1];
    const url = `http://pets-v2.dev-apis.com/pets?id=${id}`

    const apiRes = await fetch(url);

    if (!apiRes.ok) {
        throw new Error(`details/${id} fetch NOT OK`);
    }

    return apiRes.json();
}

export default fetchPet;