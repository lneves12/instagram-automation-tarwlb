function generateTag(themesA, verbsA) {
    const themeRandom = themesA[Math.floor(Math.random() * themesA.length)];
    const verbRandom = verbsA[Math.floor(Math.random() * verbsA.length)];

    return Math.floor(Math.random() * 2) % 2 === 0 ? `${themeRandom}${verbRandom}` : `${verbRandom}${themeRandom}`
}

console.log(generateTag(["travel", "portugal", "lisbon"], ["explore", "trip", "discover", "beautiful"]));

module.exports = {
    generateTag
}