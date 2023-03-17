const fetchSearch = async ({ queryKey }) => {
    const { location, animal, breed } = queryKey[1];
    const url = `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`;

    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`/pets?animal=${animal}&location=${location}&breed=${breed} fetch NOT OK.`);
    }

    return res.json();
}

export default fetchSearch;