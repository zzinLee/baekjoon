function solution(book_time) {
    const CLEAN_TIME = 10;
    const rooms = [-Infinity];

    const bookTime = book_time
    .map((timeTable) => {
        const [start, end] = timeTable;
        const [startHours, startMins] = start.split(":").map(Number);
        const [endHours, endMins] = end.split(":").map(Number);
        
        return [
            startHours * 60 + startMins, 
            endHours * 60 + endMins + CLEAN_TIME
        ];
    })
    .sort((aTable, bTable) => {
        const aStartTime = aTable[0];
        const bStartTime = bTable[0];
        
        return aStartTime - bStartTime;
    });
    
    for (const [start, end] of bookTime) {
        let availableRoom;
        
        for (let roomNumber = 0; roomNumber < rooms.length; roomNumber++) {
            const endtime = rooms[roomNumber];
            
            if (start >= endtime) {
                if (!availableRoom) {
                    availableRoom = [end, roomNumber];
                } else if (availableRoom[0] > end){
                    availableRoom = [end, roomNumber];
                }
            }
        }
        
        if (!availableRoom) {
            rooms.push(end);
        } else {
            const [endtime, roomNumber] = availableRoom;
            rooms[roomNumber] = endtime;
        }
    }
    
    return rooms.length;
}