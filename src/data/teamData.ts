import abdurRahim from "../assets/abdurRahim.jpg";
import abdurRazzak from "../assets/abdurRazzak.jpg";
import dhrubajyoti from "../assets/dhrubajyoti.jpg";
import indranil from "../assets/indranil.jpg";
import kiran from "../assets/kiran.jpg";
import saddam from "../assets/saddam.jpg";
import mohan from "../assets/mohan.jpg";
import mokasafat from "../assets/mokasafat.jpg";
import nadim from "../assets/nadim.jpg";
import mamtaj from "../assets/mamtaj.jpg";
import sohel from "../assets/sohel.jpg";
import souvik from "../assets/souvik.jpg";
import sudeep from "../assets/sudeep.jpg";
import washim from "../assets/washim.jpg";
import tapati from "../assets/tapati.jpg";


export interface TeamMember {
    facebook: string | undefined;
    instagram: string | undefined;
    linkedin: string | undefined;
    id: number;
    name: string;
    role: string;
    department: string;
    imageUrl: string;
}

export const teamData: TeamMember[] = [
    {
        id: 1,
        name: "Sk Mamtajuddin",
        role: "Founder & CEO",
        department: "Executive",
        imageUrl: mamtaj,
        facebook: undefined,
        instagram: undefined,
        linkedin: undefined
    },
    {
        id: 4,
        name: "Souvik Audy",
        role: "Software Specialist",
        department: "Operations",
        imageUrl: souvik,
        facebook: undefined,
        instagram: undefined,
        linkedin: undefined
    },
    {
        id: 2,
        name: "Dhrubajyoti Sinharay",
        role: "Head of Operations",
        department: "Technology",
        imageUrl: dhrubajyoti,
        facebook: undefined,
        instagram: undefined,
        linkedin: undefined
    },
    {
        id: 3,
        name: "Sudeep Gupta",
        role: "Software Development Manager",
        department: "Finance",
        imageUrl: sudeep,
        facebook: undefined,
        instagram: undefined,
        linkedin: undefined
    },
    {
        id: 6,
        name: "Washim Bari",
        role: "Project Manager",
        department: "Technology",
        imageUrl: washim,
        facebook: undefined,
        instagram: undefined,
        linkedin: undefined
    },
    {
        id: 15,
        name: "Tapati Shaikh",
        role: "HR Head",
        department: "Operations",
        imageUrl: tapati,
        facebook: undefined,
        instagram: undefined,
        linkedin: undefined
    },
    {
        id: 5,
        name: "Nadim Ahamed",
        role: "HR & Cordinator",
        department: "Technology",
        imageUrl: nadim,
        facebook: undefined,
        instagram: undefined,
        linkedin: undefined
    },
    {
        id: 12,
        name: "Indranil Biswas",
        role: "Software Development Specialist",
        department: "Operations",
        imageUrl: indranil,
        facebook: undefined,
        instagram: undefined,
        linkedin: undefined
    },
    {
        id: 7,
        name: "Sohel Rana",
        role: "Full Stack Developer",
        department: "Technology",
        imageUrl: sohel,
        facebook: undefined,
        instagram: undefined,
        linkedin: undefined
    },
    {
        id: 8,
        name: "Sk Saddam Ansari",
        role: "Senior Software Engineer",
        department: "Finance",
        imageUrl: saddam,
        facebook: undefined,
        instagram: undefined,
        linkedin: undefined
    },
    {
        id: 9,
        name: "Abdur Rahim",
        role: "Frontend Designer",
        department: "Operations",
        imageUrl: abdurRahim,
        facebook: undefined,
        instagram: undefined,
        linkedin: undefined
    },
    {
        id: 10,
        name: "Kiran Dhawan",
        role: "Frontend Designer",
        department: "Operations",
        imageUrl: kiran,
        facebook: undefined,
        instagram: undefined,
        linkedin: undefined
    },
    {
        id: 11,
        name: "Mohan Kumar S",
        role: "UX/UI Designer",
        department: "Operations",
        imageUrl: mohan,
        facebook: undefined,
        instagram: undefined,
        linkedin: undefined
    },
    {
        id: 14,
        name: "Abdur Razzak",
        role: "Backend Developer",
        department: "Operations",
        imageUrl: abdurRazzak,
        facebook: undefined,
        instagram: undefined,
        linkedin: undefined
    },
    {
        id: 13,
        name: "Mokasafat Amir Behesti",
        role: "Tester",
        department: "Operations",
        imageUrl: mokasafat,
        facebook: undefined,
        instagram: undefined,
        linkedin: undefined
    },
];
