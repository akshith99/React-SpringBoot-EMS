import axios from 'axios';

const EMPLOYEE_BASE_URL = "http://localhost:8080/api/v1/employees";

const getEmployees = () => {
    return axios.get(EMPLOYEE_BASE_URL);
};

const createEmployee = (employee) => {
    return axios.post(EMPLOYEE_BASE_URL + "/add", employee)
}

const getEmployeeById = (employeeId) => {
    return axios.get(EMPLOYEE_BASE_URL + "/" + employeeId)
}

const updateEmployee = (employee, employeeId) => {
    return axios.put(EMPLOYEE_BASE_URL + '/' + employeeId, employee);
}

const deleteEmployee = (employeeId) => {
    return axios.delete(EMPLOYEE_BASE_URL + '/' + employeeId);
}

const employeeService = { getEmployees, createEmployee, getEmployeeById, updateEmployee, deleteEmployee };

export default employeeService;
