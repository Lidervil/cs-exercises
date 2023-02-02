function kbfs(start, end) {

    let queue = []
    let visited = new Set()
    let shortestPath;

    queue.push([start]);
    visited.add(start);

    while (queue.length > 0) {
        let path = queue.shift()
        let node = path[path.length - 1]
        if (node === end) {
            shortestPath = path
            break
        }
        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                queue.push([...path, neighbor])
                visited.add(neighbor)
            }
        }
        shortestPath = path
    }
    return shortestPath
    // console.log(shortestPath)
    // console.log(visited)
}