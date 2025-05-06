// Part 2: Expanding Functionality
let csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
let cell =''
let row = []
let table = []

for(let i=0; i<csv.length;i++){
    let char = csv[i]
    if(char !==',' && char !=='\n'){
        cell += char
    }
    if (char ===','){
        row.push(cell)
        cell =''
    }
    if (char ==='\n' || i === csv.length - 1){
        row.push(cell)
        cell =''
        table.push(row)
        row = []
    }

}
console.log(table)

// Part 3: Transforming Data
let objArr = []

for (let i = 1; i < table.length; i++) {
    let obj = {
        id: table[i][0],
        name: table[i][1],
        occupation: table[i][2],
        age: table[i][3]
    }

    objArr.push(obj)
}

console.log(objArr)

//Part 4: Sorting and Manipulating Data

//1. Remove the last element from the sorted array.
objArr.pop()
console.log(objArr) 

//2. Insert the following object at index 1:
let obj1 ={ id: "48", name: "Barry", occupation: "Runner", age: "25" }
objArr.splice(1, 0 , obj1)

console.log(objArr)
//3. Add the following object to the end of the array:
let obj2 = { id: "7", name: "Bilbo", occupation: "None", age: "111" }
objArr.push(obj2)
console.log(objArr)


let totalAge = 0
for(let i=0; i<objArr.length;i++){
    totalAge += parseInt(objArr[i].age)
}
let aveAge = totalAge / objArr.length
console.log(aveAge)
