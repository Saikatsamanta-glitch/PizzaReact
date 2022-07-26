import React from 'react'

export default function Login() {
    return (
        <div className='login_form d-flex align-items-center justify-content-center'>
       <form >
       
       <table >
        <tbody>
            <tr>
                <td>Email Id</td>
                <td><input type="email" /></td>
            </tr>
            <tr>
                <td>PassWord</td>
                <td><input type="password"  /></td>
            </tr>
        </tbody>
       </table>

        <button className='btn btn-warning' type='submit' >LogIn</button>

       </form>
       </div>
    )
}
