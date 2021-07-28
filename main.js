const testData = [
    { name : "Pizza Hut", location : 1, distance : 0.3 },
    { name : "Taco Bell", location : 1, distance : 0.2 },
    { name : "Pizza Hut", location : 2, distance : 0.1 },
    { name : "Taco Bell", location : 2, distance : 0.4 },
    { name : "Wendys" , location : 1, distance : 0.005 },
    { name : "Pizza Hut", location : 3, distance : 0.01 }
]

const groupSortData = dataArg =>
{
    const result = {};
    dataArg.forEach( tempData => {
        console.log(' * : ', tempData);
        const key = tempData.name;
        if( !result[key] )
        {
            result[key] = [];
        }
        result[key].push(tempData);
    })
    return result;
}

sortedByRestaurant = groupSortData(testData);
const finalFinalResult = [];
Object.keys(sortedByRestaurant).forEach( key =>
        {
            sortedByRestaurant[key].sort((a, b) => (a.distance > b.distance) ? 1 : -1)
            finalFinalResult.push([...sortedByRestaurant[key]]);
        }
)
finalFinalResult.sort((a, b) => (a[0].distance > b[0].distance) ? 1 : -1)
console.log("finalFinalResult : ", JSON.stringify(finalFinalResult));
