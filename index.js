// Write your solution in this file!
const employee = {name: "Mike",
    streetAddress: "24-00100"};


function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}

const newEmployee = updateEmployeeWithKeyAndValue(
    employee,
    "Sam",
    "11 Broadway"
);
// newEmployee.key =

console.log(newEmployee);
// console.log(employee);
// 
// Function #2

employee = {
    name: 'Sam',
    streetAddress: '12 Broadway',
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

/////
//Function #3 - Does not Mutate

function deleteFromEmployeeByKey(employee, key, value) {
    let newEmployee = {...employee};
    newEmployee[key] = value;
    delete newEmployee.key;
    return newEmployee;
}
/////
//Function#4 - this function Mutates
// function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
//     let newEmployee = {employee};
//     newEmployee[key] = value;
//     delete newEmployee.key;
//     // employee = newEmployee;
//     return newEmployee;
// }
function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    employee[key]= value;
    delete employee.key;
    return employee;
}
