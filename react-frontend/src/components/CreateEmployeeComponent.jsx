import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import employeeService from "../services/EmployeeService";

const CreateEmployeeComponent = () => {

    const params = useParams();

    const location = useLocation();
    const pathname = location.pathname;

    const initialFormData = {
        id: params.id,
        firstName: '',
        lastName: '',
        emailId: '',
    }

    const [formData, setFormData] = useState(initialFormData);

    const { id, firstName, lastName, emailId } = formData;

    const changeFirstNameHandler = (event) => {
        setFormData({
            ...formData,
            firstName: event.target.value
        })
    }

    const changeLastNameHandler = (event) => {
        setFormData({
            ...formData,
            lastName: event.target.value
        })
    }

    const changeEmailHandler = (event) => {
        setFormData({
            ...formData,
            emailId: event.target.value
        })
    }

    useEffect(() => {

        if (pathname.trim().includes('/add-employee')) {
            return
        } else if (pathname.trim().includes('/update-employee')) {
            employeeService.getEmployeeById(id).then((response) => {
                let employee = response.data;
                setFormData(employee)
            })
        }
    }, [id, pathname]);

    const saveEmployee = (event) => {
        event.preventDefault();
        let employee = {
            firstName: firstName,
            lastName: lastName,
            emailId: emailId
        };

        console.log('employee => ' + JSON.stringify(employee));

        if (pathname.trim().includes('/add-employee')) {
            employeeService.createEmployee(employee).then((res) => {
                navigate('/employees');
            })
        } else if (pathname.trim().includes('/update-employee')) {
            employeeService.updateEmployee(employee, id).then(res => {
                navigate('/employees');
            });
        }

        resetForm();
    };

    const resetForm = () => {
        setFormData(initialFormData);
    };

    const navigate = useNavigate();

    const cancel = () => {
        navigate('/employees');
    };

    let formIsValid = false;

    if (firstName.trim() !== '' && lastName.trim() !== '' && emailId.includes('@')) {
        formIsValid = true;
    }

    const getTitle = () => {
        if (pathname.trim().includes('/add-employee')) {
            return <h3 className="text-center">Add Employee</h3>
        } else if (pathname.trim().includes('/update-employee')) {
            return <h3 className="text-center">Update Employee</h3>
        }
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 mt-3">
                        {
                            getTitle()
                        }
                        <div className="card-body">
                            <form onSubmit={saveEmployee}>
                                <div className="form-group">
                                    <label>First Name: </label>
                                    <input
                                        placeholder="First Name"
                                        name="firstName"
                                        className="form-control mt-2"
                                        value={firstName}
                                        onChange={changeFirstNameHandler}
                                    />
                                </div>
                                <div className="form-group mt-2">
                                    <label>Last Name: </label>
                                    <input
                                        placeholder="Last Name"
                                        name="lastName"
                                        className="form-control mt-2"
                                        value={lastName}
                                        onChange={changeLastNameHandler}
                                    />
                                </div>
                                <div className="form-group mt-2">
                                    <label>Email Address: </label>
                                    <input
                                        placeholder="Email Address"
                                        name="emailId"
                                        className="form-control mt-2"
                                        value={emailId}
                                        onChange={changeEmailHandler}
                                    />
                                </div>
                                <button
                                    className="btn btn-success mt-3"
                                    disabled={!formIsValid}
                                >
                                    Save
                                </button>
                                <button
                                    className="btn btn-danger mt-3"
                                    onClick={cancel}
                                    style={{
                                        marginLeft: "10px"
                                    }}>
                                    Cancel
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default CreateEmployeeComponent;