import { LearnerType, learnerTypes } from "./types";

export const getAccountArchetype = async (): Promise<LearnerType> => {
    const rndArchetype = Math.round(Math.random() * 4);
    return learnerTypes[rndArchetype];
}