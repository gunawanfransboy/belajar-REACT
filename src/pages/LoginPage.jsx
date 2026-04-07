import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import AuthCard from "../components/AuthCard";


const LoginPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    console.log(formData);

    const handleLogin = async (e) => {
        e.preventDefault();
        setErrors([]);

        try {
            const res = await axios.post('http://localhost:8000/api/login', formData);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.data));

            Swal.fire({
                icon: "success",
                title: "Login Success",
                text: res.data?.message || "Welcome",
                timer: 2000,
                showConfirmButton: false
            });
            navigate("/dashboard");
        } catch (error) {
            if (error.response && error.response.status === 422) {
                console.log(error.response.data?.error);
                setErrors(error.response.data?.error);
            } else if (error.response.status === 401) {

                Swal.fire({
                    icon: "warning",
                    title: "Login Failed",
                    text: error.response.data?.message || "Please check your email or password!!",
                    timer: 2000,
                });
            }
        }
    };

    return (
        <AuthCard title="Login Form">
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3">
                    <Form.Label className="form-label">Email</Form.Label>
                    <Form.Control isInvalid={!!errors?.email}
                        name="email"
                        onChange={handleChange}
                        type="email"
                        placeholder="Enter your mail">
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="form-label">Password</Form.Label>
                    <Form.Control isInvalid={!!errors?.password}
                        name="password"
                        onChange={handleChange}
                        type="password"
                        placeholder="Enter your password">
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" className="w-100" type="submit">Login</Button>

                <div className="text-center">
                    <small>
                        Don't have an account? Register now!!
                    </small>
                </div>
            </Form>
        </AuthCard>

    );
}

export default LoginPage;