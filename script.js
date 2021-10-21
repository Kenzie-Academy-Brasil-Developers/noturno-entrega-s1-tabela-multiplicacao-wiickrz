        /* 
            Entrega Aula 45 - William Heckler
                                              */

let multTable = (size) => {
    let firstArray = []
    let secondArray = []

    for (let firstCounter = 0; firstCounter <= size; firstCounter++) {
        firstArray[firstCounter] = []

        for (let secondCounter = 0; secondCounter <= size; secondCounter++) {
            secondArray.push(secondCounter)

            firstArray[firstCounter].push(firstCounter * secondCounter)
        }
    }
    return console.table(firstArray)
}
multTable(10)