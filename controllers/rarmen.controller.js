import { getrarmen } from "../services/rarmen.service.js";

export const getResult = async (req, res, next) => {
    try {
        const result = await getrarmen(req.body);
        console.log(req.body);
        return res.status(200).json({
            status: 200,
            result: result,
            message: "successfully get Janken!",
        });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};