import React, { useState } from "react";
import styles from "./auth.module.css";
import { BiLogIn } from "react-icons/bi";
import Card from '../../components/card/Card';
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  return (
  <div className={`container ${styles.auth}`}>
    <Card>
        <div className={styles.form}>
            <div className="--flex-center"><BiLogIn size={35} color="#999"/></div>
            <h2 className="--flex-center">Login</h2>
            <form className={styles.form}>
                <input type="email" placeholder="Email" required name="email"/>
                <input type="password" placeholder="Password" required name="password"/>
                <button type="submit" className="--btn --btn-primary --btn-block">Login</button>
            </form>
            <Link to="/forgot">Forgot Password</Link>
            <span className={styles.register}>
                <Link to="/">Home</Link>
                <p> &nbsp; Don't have an account? &nbsp;</p>
                <Link to="/register">Register</Link>
            </span>
        </div>
    </Card>
   </div>
  );
};

export default Login;