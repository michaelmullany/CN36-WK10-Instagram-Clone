export const fetchImages = async (setter) => {
    try {
        const response = await fetch("https://picsum.photos/v2/list/200");
        const data = await response.json();
        setter(data);
    } catch (error) {
        console.log(error);
    }
}