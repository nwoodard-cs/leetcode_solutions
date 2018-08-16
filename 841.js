// There are N rooms and you start in room 0.  Each room has a distinct number in 0, 1, 2, ..., N-1, and each room may have some keys to access the next room. Return true if and only if you can enter every room.

let visited = new Set()

let visitRoom = (idx, rooms) => {
    visited.add(idx)
    for (key of rooms[idx]) 
        if (!visited.has(key)) 
            visitRoom(key, rooms)
}

let canVisitAllRooms = (rooms) => {
    visitRoom(0, rooms)
    for (let i = 0; i < rooms.length; ++i)
        if (!visited.has(i)) return false
    return true
}

console.log(canVisitAllRooms([[1,3],[3,0,1],[2],[0]]))