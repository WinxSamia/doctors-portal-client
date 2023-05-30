import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContex } from '../Contex/AuthProvider/AuthProvider';
import { useState } from 'react';

const Login = () => {
    const { login } = useContext(AuthContex)
    const [loginError, setLoginError] = useState(null)
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const { register, formState: { errors }, handleSubmit } = useForm();
    const handleLogin = data => {
        console.log(data);
        setLoginError(' ');
        login(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.error(err.message)
                setLoginError(err.message)
            })
    }
    return (
        <div className='flex justify-center items-center h-[600px]'>
            <div className='w-96 border-2 p-12'>
                <h1 className='text-4xl text-center'>Login</h1>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", {
                            required: 'Email Cant Not Be Empty',
                        })} className="input input-bordered w-full " />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", { required: 'Password Can Not Be Empty', minLength: { value: 6, message: 'Password must be 6 character or longer' } })} className="input input-bordered w-full " /> <br />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <div>
                        <input type="submit" value='Login' className='btn w-full ' />
                        <label className="label">
                            <span className="label-text">New here? <Link className='text-teal-500' to="/signup">Login to account</Link> </span>
                        </label>
                    </div>
                    <div className="flex flex-col w-full border-opacity-50">

                        <div className="divider">OR</div>

                    </div>
                    <div>
                        <input type="submit" value='Login with Google' className='btn btn-outline w-full' />

                    </div>
                    <div>
                        {loginError && <p className='text-red-500'>{loginError}</p>
                        }
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;