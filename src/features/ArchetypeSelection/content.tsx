import type { LearnerType } from "./types";
import type { ArchetypeCardContent } from "../../components/ArchetypeCard";

export const content: Record<LearnerType, ArchetypeCardContent> = {
    striving: {
        title: "Striving",
        image: "https://images.squarespace-cdn.com/content/v1/58c0eb1a8419c2b8c948583d/1502517025571-YM9L1OV75OQRH9CRQ0G1/image-asset.jpeg",
        description: "I want sharp my previous knowledge to feel confident to communicate in the language. I feel pressured by time and need a variety of exercises to better learn."
    },
    bonding: {
        title: "Bonding",
        image: "https://thumbs.dreamstime.com/z/black-girl-floor-learning-art-education-drawing-color-to-relax-happiness-writing-female-kid-toddler-young-person-280010112.jpg",
        description: "I want to focus on conversational skills and cultural aspects. I prefer to learn with one main resource, but try a variety of medias as podcasts."
    },
    adventurous: {
        title: "Adventurous",
        image: "https://images.inc.com/uploaded_files/image/1920x1080/getty_512358000_239361.jpg",
        description: "I want to learn with a fun learning experience and learn only the basics in the language, with no stress. I’m willing to try live classes to improve my speaking skills."
    },
    adaptive: {
        title: "Adaptive",
        image: "https://www.skillsportal.co.za/sites/default/files/styles/max_325x325/public/images/admin/adapt-to-work.jpg",
        description: "I want to communicate with native speakers as it makes me feel happy and empowered. I need a variety of resources and types of exercises to make learning fun."
    },
    inquisitive: {
        title: "Inquisitive",
        image: "https://legendary-digital-network-assets.s3.amazonaws.com/wp-content/uploads/2022/03/12181336/Kenobi-The-Grand-Inquisitor.jpg",
        description: "Learning a new language makes me feel joyful. I want to learn the basics, and focus on grammar and vocabulary. I learn and review better with written materials."
    }
}