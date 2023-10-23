// Define the employee object
const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway'
};

// Function to update an employee with a new key-value pair non-destructively
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
}

// Function to update an employee with a new key-value pair destructively
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

// Function to delete a key from an employee object non-destructively
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

// Function to delete a key from an employee object destructively
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

// Export the functions for testing
module.exports = {
    updateEmployeeWithKeyAndValue,
    destructivelyUpdateEmployeeWithKeyAndValue,
    deleteFromEmployeeByKey,
    destructivelyDeleteFromEmployeeByKey
};
