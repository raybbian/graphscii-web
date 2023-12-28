function gnpRandomGraphString(n, p) {
    let out = ''
    for (let i = 0; i < n; i++) {
        out = out.concat(`${i}\n`)
    }
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (Math.random() < p) {
                const edge = `${i} ${j}\n`
                out = out.concat(edge)
            }
        }
    }
    return out
}

export function randomSmallGraphString() {
    const numVertices = Math.floor(Math.random() * 3) + 5;
    return gnpRandomGraphString(numVertices, 0.75)
}