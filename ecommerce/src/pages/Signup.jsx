import React, { useState } from 'react'
import signup from '../assets/signup.png'
import gicon from '../assets/googleicon.png'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();



const Signup = () => {

    const auth = getAuth();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [show, setShow] = useState(false);

    const handleName = (e) => {
        setName(e.target.value);
        setNameError("");
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setEmailError("");

    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        setPasswordError("");
    }

    const handleCreateAccaount = () => {
        if (!name) {
            setNameError("**Please enter your name**");
        }
        if (!email) {
            setEmailError("**Please enter your email**");
        } else {
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                setEmailError("**Please enter a valid email address**");
            }
        }
        if (!password) {
            setPasswordError("**Please enter your password**");
        } else {
            if (!/(?=.*[a-z])/.test(password)) {
                setPasswordError("**Password must contain at least one lowercase letter**");
            } else if (!/(?=.*[A-Z])/.test(password)) {
                setPasswordError("**Password must contain at least one uppercase letter**");
            } else if (!/(?=.*[0-9])/.test(password)) {
                setPasswordError("**Password must contain at least one number**");
            } else if (!/(?=.*[!@#$%^&*])/.test(password)) {
                setPasswordError("**Password must contain at least one special character**");
            } else if (!/(?=.{8,})/.test(password)) {
                setPasswordError("**Password must be at least 8 characters long**");
            }
        }
        if (name && email && password) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    sendEmailVerification(auth.currentUser)

                    toast.success("Account successfully created!");
                    setName("");
                    setEmail("");
                    setPassword("");

                    setTimeout(() => {
                        navigate('/login');
                    }, 2000);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });

        }

    }

    const handleGoogleSignUp = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                toast.success("Successfully Signed up with Google!");
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }


    return (
        <div className='flex'>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}

            />
            <div>
                <img className='mt-15 mb-35' src={signup} alt="" />
            </div>
            <div className='ml-[129px] mt-[186px] mb-[265px]'>
                <h1 className='font-secondary text-[36px] font-medium leading-7.5 mb-6'>Create an Account</h1>
                <p className='font-primary text-lg leading-6'>Enter your details below</p>
                <div className='mt-12'>
                    <div>
                        <input
                            value={name}
                            onChange={handleName}
                            className='w-[370px] border-b-2 py-2 focus:outline-0'
                            type="text"
                            placeholder='Name' />
                        <p className='text-primary'>{nameError}</p>
                    </div>
                    <div className='my-10'>
                        <input
                            value={email}
                            onChange={handleEmail}
                            className='w-[370px] border-b-2 py-2 focus:outline-0'
                            type="email"
                            placeholder='Email' />
                        <p className='text-primary'>{emailError}</p>
                    </div>
                    <div>
                        <input
                            value={password}
                            onChange={handlePassword}
                            className='w-[370px] border-b-2 py-2 focus:outline-0 mb-2'
                            type={show ? "text" : "password"}
                            placeholder='Password' />
                        {
                            show ? <IoEyeOutline size={20} onClick={() => setShow(!show)} className='cursor-pointer' /> : <FaRegEyeSlash size={20} onClick={() => setShow(!show)} className='cursor-pointer' />
                        }
                        <p className='text-primary'>{passwordError}</p>
                    </div>
                    <div className='w-[370px] bg-primary rounded mt-10 mb-4'>
                        <button onClick={handleCreateAccaount} className='py-[16px] px-[121px] font-primary font-medium leading-6 text-white'>Create Account</button>
                    </div>
                    <div onClick={handleGoogleSignUp} className='w-[370px] flex py-[16px] px-[70px]  border-2 bg-transparent rounded mb-8'>
                        <img src={gicon} alt="" />
                        <button className='font-primary font-medium leading-6 text-red-500 ml-4'>Sign up with Google</button>
                    </div>
                    <p className='ml-[40px] font-primary text-lg leading-6'>Already have an account? <Link
                        to='/login' className='text-primary font-semibold underline cursor-pointer ml-2'>Log in</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Signup