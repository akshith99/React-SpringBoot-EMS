import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import employeeService from "../services/EmployeeService";

const ViewEmployeeComponent = () => {

    const params = useParams();

    const initialState = {
        employee: {

        }
    }

    const id = params.id;

    const [employeeData, setEmployeeData] = useState(initialState);

    const { employee } = employeeData;


    useEffect(() => {
        employeeService.getEmployeeById(id).then((response) => {
            setEmployeeData({
                employee: response.data
            })
        })
    }, [id]);

    return (
        <>
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3 mt-3" style={{ minWidth: '412px' }}>
                    <h3 className="mt-3 text-center"> View Employee Details</h3>
                    <div className="card-body mx-3">
                        <div style={{
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <label> Employee First Name :- </label>
                            <div style={{
                                marginLeft: '15px'
                            }}>{employee.firstName}</div>
                        </div>
                        <div className="mt-2" style={{
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <label> Employee Last Name :- </label>
                            <div style={{
                                marginLeft: '15px'
                            }}>{employee.lastName}</div>
                        </div>
                        <div className="mt-2" style={{
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <label> Employee Email ID :- </label>
                            <div style={{
                                marginLeft: '15px'
                            }}>{employee.emailId}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ViewEmployeeComponent;