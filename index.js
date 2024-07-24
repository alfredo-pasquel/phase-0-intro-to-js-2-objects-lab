// Write your solution in this file!

const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = { ...employee };

    newObj[key] = value;

    return newObj;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee;
};

function deleteFromEmployeeByKey(employee, key, value) {
    return {
        ...employee,
    [key]: value,
  };
};

const newEmployee = deleteFromEmployeeByKey(
    employee, 
    key, 
    value

);

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    employee[key] = value;

    return employee;
}





