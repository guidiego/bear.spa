export const learnerTypes = [
    "striving",
    "bonding",
    "adventurous",
    "adaptive",
    "inquisitive"
] as const;

export type LearnerType = typeof learnerTypes[number]