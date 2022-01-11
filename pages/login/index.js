import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import nhost from '../../utils/nhost';
const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
        <>
            <h1>LOG IN PAGE</h1>
            <form onSubmit={async (e) => {
                e.preventDefault();
                console.log(email, pass);
                try {
                    const { session, error } = await nhost.auth.signIn({
                        email: email,
                        password: pass
                    })
                    console.log(session.user);
                }
                catch (error) {
                    console.log(error);
                    return alert('login failed');
                }
            }}>
                <input
                    type="email"
                    placeholder="email"
                    className="border border-gray-600"
                    onChange={e => setEmail(e.target.value)}
                />
                <br />
                <input
                    type="password"
                    placeholder="password"
                    className="border border-gray-600"
                    onChange={e => setPass(e.target.value)}
                />
                <br />
                <button
                    type="submit"
                    className=""
                >
                    LOGIN
                </button>
            </form>
            <Link href='/register'>New user? Register Now</Link>
        </>
    );
};

export default Login;