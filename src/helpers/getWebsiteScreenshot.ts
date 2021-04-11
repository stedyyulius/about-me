import axios from 'axios';

const getWebsiteScreenshot = async (url: string) => {
    const base64 = await axios.get(`https://website-screenshot-sigma.vercel.app/api/screenshot?url=${url}`);

    console.log(base64)

    return `data:image/png;base64, ${base64.data}`;
}

export default getWebsiteScreenshot;