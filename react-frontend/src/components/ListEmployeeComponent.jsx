import { useEffect, useState } from "react";
import employeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";


const ListEmployeeComponent = (props) => {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        employeeService.getEmployees().then((response) => {
            setEmployees(response.data);
        });
    }, []);

    const navigate = useNavigate();

    const addEmployee = () => {
        navigate('/add-employee');
    };

    const editEmployee = (id) => {
        navigate(`/update-employee/${id}`);
    };

    const viewEmployee = (id) => {
        navigate(`/view-employee/${id}`);
    }

    const deleteEmployee = (id) => {
        employeeService.deleteEmployee(id).then(res => {
            setEmployees(employees.filter((employee) => employee.id !== id))
        });
    };

    return (
        <>
            <h2 className="text-center">Employees List</h2>
            <div className="row justify-content-end">
                <button className="btn btn-primary col-auto" onClick={addEmployee}>Add Employee</button>
            </div>
            <div className="row overflow-auto">
                <table className="table table-striped table-bordered mt-3">
                    <thead>
                        <tr>
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Email Id</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map(employee =>
                                <tr key={employee.id}>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.emailId}</td>
                                    <td>
                                        <button
                                            className="btn btn-success"
                                            onClick={() => editEmployee(employee.id)}>
                                            Update
                                        </button>
                                        <button
                                            className="btn btn-danger danger"
                                            onClick={() => deleteEmployee(employee.id)}
                                        >
                                            Delete
                                        </button>
                                        <button
                                            className="btn btn-info view"
                                            onClick={() => viewEmployee(employee.id)}
                                        >
                                            View
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
};

export default ListEmployeeComponent;