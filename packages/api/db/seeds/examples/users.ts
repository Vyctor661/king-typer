type Role = "unverified" | "member" | "admin";

interface Users {
    name: string;
    email: string;
    password: string;
    role?: Role;
    description?: string | null;
    exp: number;
    tutorials: number[];
    country: string;
    totaltests: number;
    achievements: number[];
    emailKey?: string;
}

export default [
    {
        name: "UserUser",
        email: "UserUser@fake.com",
        password: "UserPass",
        role: "admin",
        description: null,
        exp: 8,
        tutorials: [],
        country: "RO",
        totaltests: 0,
        achievements: []
    },
    {
        name: "MKGUN3",
        email: "Deliver@bullets.com",
        password: "MaoGay",
        role: "member",
        description: null,
        exp: 4,
        tutorials: [],
        country: "USA",
        totaltests: 5,
        achievements: []
    },
    {
        name: "NotAUser",
        email: "none@nope.com",
        password: "nothing",
        role: "unverified",
        description: null,
        exp: 2,
        tutorials: [],
        achievements: [],
        emailKey: "blah",
        country: "LY",
        totaltests: 100
    },
    {
        name: "Guy2",
        email: "Guy2@fake.com",
        password: "JustAGuy",
        role: "member",
        description: "But hey, I have a description!",
        exp: 0,
        tutorials: [],
        country: "FR",
        totaltests: 20,
        achievements: []
    }
] as readonly Users[];
