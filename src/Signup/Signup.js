import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContex } from '../Contex/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const Signup = () => {
    const { createUser } = useContext(AuthContex)
    const [signupError, setSignupError] = useState()
    const { register, formState: { errors }, handleSubmit } = useForm()
    const navigate = useNavigate();


    const handleSignup = data => {
        // console.log(data);
        setSignupError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User created successfully')
                navigate('/');
            })
            .catch(err => {
                console.error(err.message);
                setSignupError(err.message);
            })

    }
    return (
        <div className='flex justify-center items-center h-[600px]'>
            <div className='w-96 border-2 p-12'>
                <h1 className='text-4xl text-center'>Sign up</h1>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", {
                            required: 'Name Cant Not Be Empty',
                        })} className="input input-bordered w-full " />
                        {errors.email && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
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
                        <input type="password" {...register("password", { required: 'Password Can Not Be Empty', minLength: { value: 6, message: 'Password must be 6 character or longer' }, pattern: { value: /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\w\s])/, message: 'Password must have to be strong' } })} className="input input-bordered w-full " /> <br />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <div>
                        <input type="submit" value='Sign up' className='btn w-full ' />
                        <label className="label">
                            <span className="label-text">Already have an account? <Link className='text-teal-500' to="/login">Create an account</Link> </span>
                        </label>
                    </div>
                    <div className="flex flex-col w-full border-opacity-50">

                        <div className="divider">OR</div>

                    </div>
                    <div>
                        <input type="submit" value='Sign up with Google' className='btn btn-outline w-full' />

                    </div>
                    <div>
                        {signupError && <p className='text-red-500'>{signupError}</p>}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;