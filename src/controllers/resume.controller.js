import Resume from "../models/resume.model.js";

export const createResume = async (req, res) => {
    try {
        const body = req.body;

        const resume = await Resume.create(body);
        if (!resume) {
            return res.status(400).json({ success: false, message: "Resume creation failed!" });
        }
        return res.status(201).json({
            success: true,
            message: "Resume created successfully!",
            resume
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Server error in creating the Resume!" });
    }
}

export const getResumeByUser = async (req, res) => {
    try {
        const user = req.params.user;
        if (!user) {
            return res.status(400).json({ success: false, message: "User ID is required!" });
        }
        const resume = await Resume.find({ user }).populate("user", "name email mobile address");
        if (!resume || resume.length === 0) {
            return res.status(404).json({ success: false, message: "No Resume found for this user!" });
        }
        return res.status(200).json({
            success: true,
            message: "Resume fetched successfully!",
            resume
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Server error in fetching the Resume!" });
    }
}