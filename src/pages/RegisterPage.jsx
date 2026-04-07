import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import Swal from "sweetalert2";
import AuthCard from "../components/AuthCard";


const RegisterPage = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: ""

    });

    const [errors, setErrors] = useState([]);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    console.log(formData);

    const handleRegister = async (e) => {
        e.preventDefault();
        setErrors([]);

        try {
            const res = await axios.post('http://localhost:8000/api/register', formData);
            const successMsg = res.data.message;
            Swal.fire({
                icon: "success",
                title: "Success Registration",
                text: "Go ahead sign in with your account",
                timer: 2000,
                showConfirmButton: false
            });
            navigate("/login");
        } catch (error) {
            if (error.response && error.response.status === 422) {
                console.log(error.response.data?.error);
                setErrors(error.response.data?.error);
            } else {
                const errorMsg = error.response?.data?.message || "Internal Server Error";
                Swal.fire({
                    icon: "error",
                    title: "Error Registration",
                    text: "errorMsg",
                    timer: 2000,
                });
            }
        }
    };


    return (
        <AuthCard title="Register Form">
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3">
                    <Form.Label className="form-label">Name</Form.Label>
                    <Form.Control isInvalid={!!errors?.name}
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        onChange={handleChange}>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">{errors.name?.[0]}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="form-label">Email</Form.Label>
                    <Form.Control isInvalid={!!errors?.email}
                        name="email"
                        type="email"
                        onChange={handleChange}
                        placeholder="Enter your mail">
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">{errors.email?.[0]}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="form-label">Password</Form.Label>
                    <Form.Control isInvalid={!!errors?.password}
                        name="password"
                        type="password"
                        onChange={handleChange}
                        placeholder="Enter your password">
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">{errors.password?.[0]}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="form-label">Password Confirmation</Form.Label>
                    <Form.Control isInvalid={!!errors?.password_confirmation}
                        name="password_confirmation"
                        type="password_confirmation"
                        onChange={handleChange}
                        placeholder="Enter your password confirmation">
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">{errors.password_confirmation?.[0]}</Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" className="w-100" type="submit">Save</Button>
            </Form>
        </AuthCard>

    );
}

export default RegisterPage;