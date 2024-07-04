export default (req,res) => {
    return res.status(200).json({message: "Hello World", name: "Olive Uzoma", "age": 25, "location": "Lagos, Nigeria"});
}