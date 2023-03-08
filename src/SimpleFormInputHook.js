import React from 'react';
import UseInputState from './Hooks/UseInputState';

export default function SimpleFormInputHook() {
    const [email, updateEmail, resetEmail] = UseInputState("");
    const [password, updatePassword, resetPassword] = UseInputState("");

    return (
        <div>
            <h1>Email is: {email} & Password is: {password}</h1>
            <input type="text" value={email} onChange={updateEmail} />
            <input type="text" value={password} onChange={updatePassword} />
            <button onClick={resetEmail}>Reset Email</button>
            <button onClick={resetPassword}>Reset Password</button>
        </div>
    )
}
