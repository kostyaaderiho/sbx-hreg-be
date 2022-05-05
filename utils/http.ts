export const decodeQueryParams = (params: string) => {
    try {
        return JSON.parse(decodeURIComponent(params));
    } catch (err) {
        throw new Error(`Error: ${err}`);
    }
};
