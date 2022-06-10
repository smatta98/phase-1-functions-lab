function distanceFromHqInBlocks(pickupStreet) {
    if (pickupStreet < 42) {
        let distance = parseInt(42-pickupStreet + 'blocks')
        return distance;
    } else if (pickupStreet > 42) {
            let distance = parseInt(pickupStreet - 42 + 'blocks')
            return distance;
    } else  {
        return 'You are at HQ'
    }
        
    }

    function distanceFromHqInFeet(fromHQ) {
         return parseInt(distanceFromHqInBlocks(fromHQ)*264 + 'feet')
       
    }

    function distanceTravelledInFeet(start,destination) {
        if (destination-start < 0) {
            let feetDistance = (destination-start)*-264
            return parseInt(feetDistance + 'feet')
        } else if (destination-start>0) {
            let feetDistance = (destination-start)*264
            return parseInt(feetDistance + 'feet')
        } else {
            return 'You did not go anywhere'
        }

    }


    function calculatesFarePrice(start, destination){
        let distanceTravelled = parseInt(distanceTravelledInFeet(start,destination));
        if (distanceTravelled>= 0 && distanceTravelled <= 400){
            return 0
        } else if (distanceTravelled > 400 && distanceTravelled <= 2000 ){
            return (distanceTravelled-400)*.02
        } else if (distanceTravelled > 2000 && distanceTravelled < 2500) {
            return 25
        } else if (distanceTravelled > 2500){
            return 'cannot travel that far'
        }
     

    }