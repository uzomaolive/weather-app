import 'dotenv/config';

const apiKey = process.env.API_KEY;
const apiUrl = process.env.API_URL;

export default async (req,res) => {
    const response = await fetch(apiUrl + req.query.city + `&appid=${apiKey}`);

    if(response.status === 401) {
        return res.status(401).json({message: "Invalid API key"});
    }

    if(response.status === 404) {
        return res.status(404).json({message: "City not found"});
    }

    if(response.status === 200 ) {
        const data = await response.json();
        return res.status(200).json(data);
    }
}