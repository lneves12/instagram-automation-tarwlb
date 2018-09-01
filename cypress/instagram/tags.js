function generateTag(themesA, verbsA) {
    const themeRandom = themesA[Math.floor(Math.random() * themesA.length)];
    const verbRandom = verbsA[Math.floor(Math.random() * verbsA.length)];

    return Math.floor(Math.random() * 2) % 2 === 0 ? `${themeRandom}${verbRandom}` : `${verbRandom}${themeRandom}`
}

module.exports = {
    generateTag
}