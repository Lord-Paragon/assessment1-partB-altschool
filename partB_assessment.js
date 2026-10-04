
// Q1: Object Basics
const mentee = {
    name: "Azeez",
    track: "Full Stack Engineering",
    cohort: "Karatu 2026"
};

console.log(mentee);

// Add a new property
mentee.isGraduated = false;
console.log(mentee);

// Delete the cohort property
delete mentee.cohort;
console.log(mentee);


// Q2: Multiword Property Names
const engineer = {
    name: "Setemi",
    "years of experience": 7
};

// Dot notation does not work with multiword property names
// console.log(engineer.years of experience);

// Square-bracket notation works
console.log(engineer["years of experience"]);


// Q3: Dynamic Properties
function getField(obj, fieldName) {
    return obj[fieldName];
}

const project = {
    name: "Chunk8",
    stack: "Next.js"
};

console.log(getField(project, "name"));  // "Chunk8"
console.log(getField(project, "stack")); // "Next.js"


// Q4: Computed Properties
function buildConfig(envName, value) {
    return {
        [envName]: value
    };
}

console.log(buildConfig("PORT", 3000));       // { PORT: 3000 }
console.log(buildConfig("NODE_ENV", "dev")); // { NODE_ENV: "dev" }


// Q5: Property Shorthand
function createRepo(name, stars, language) {
    return {
        name,
        stars,
        language
    };
}

// Long version
function createRepoVerbose(name, stars, language) {
    return {
        name: name,
        stars: stars,
        language: language
    };
}

console.log(JSON.stringify(createRepo("repo-score", 42, "TypeScript")));
console.log(JSON.stringify(createRepoVerbose("repo-score", 42, "TypeScript")));