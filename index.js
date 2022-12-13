// Code your solution in this file!
function distanceFromHqInBlocks(pickupBlock){
    return Math.abs(pickupBlock-42)
}

function distanceFromHqInFeet(pickupBlock){
    return 264*distanceFromHqInBlocks(pickupBlock)
}

function distanceTravelledInFeet(start, destination){
    return 264*Math.abs(start-destination)
}

function calculatesFarePrice(s, d){
const totalDistance = distanceTravelledInFeet(s, d)
if (totalDistance <= 400){
    return 0
}
else if (totalDistance > 400 && totalDistance <=2000){
    return .02*(totalDistance-400)
}
else if (totalDistance>2000 && totalDistance<=2500){
    return 25
}
else {
    return 'cannot travel that far'
}

/*switch (true){
    case totalDistance<=400:
        return 0;
    case totalDistance > 400 && totalDistance <= 2000:
        return (totalDistance-400)*.02;
    case totalDistance>2000 && totalDistance<=2500:
        return 25;
    case totalDistance > 2500:
        return 'cannot travel that far';

}*/

}