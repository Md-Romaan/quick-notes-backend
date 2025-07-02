import mongoose, { Schema } from "mongoose";

const resumeSchema = new Schema({
    title: String,
    subTitle: String,
    name: String,
    email: String,
    mobile: String,
    location: String,
    linkedIn: String,
    github: String,
    website: String,
    objective: String,
    education: [
        {
            degree: String,
            institution: String,
            timePeriod: String,
            location: String,
            grade: String
        }
    ],
    techSkills: [
        {
            title: String,
            skills: [String]
        }
    ],
    experience: [
        {
            designation: String,
            company: String,
            timePeriod: String,
            location: String,
            yearOfExperience: String,
            projects: [
                {
                    title: String,
                    description: String,
                }
            ]
        }
    ],
    academicProjects: [
        {
            title: String,
            description: String,
            timePeriod: String,
            link: String
        }
    ],
    personalProjects: [
        {
            title: String,
            description: String,
            timePeriod: String,
            link: String
        }
    ],
    internships: [
        {
            title: String,
            company: String,
            timePeriod: String,
            location: String,
            description: String
        }
    ],
    certifications: [
        {
            title: String,
            issuer: String,
            timePeriod: String,
            link: String
        }
    ],
    languages: [String],
    interests: [String],
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, { timestamps: true });

const Resume = mongoose.model("Resume", resumeSchema);
export default Resume;