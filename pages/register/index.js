import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import nhost from "../../utils/nhost";
const Register = () => {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <>
            <h1> PAGE</h1>
            <form onSubmit={async (e) => {
                e.preventDefault();
                console.log();
                try {
                    const { session, error } = await nhost.auth.signUp({
                        email,
                        password,
                        options: {
                            displayName: name,
                        }
                    })
                    console.log(session);
                    // router.push('/');
                } catch (error) {
                    console.error(error);
                }
            }}>
                <input
                    type="text"
                    placeholder="name"
                    className="border border-gray-600"
                    onChange={e => setName(e.target.value)}
                />
                <br />
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
                    onChange={e => setPassword(e.target.value)}
                />
                <br />
                <button type="submit" className="btn btn-natural mt-2">Register</button>
            </form>
            <Link href='/login'>Already have an account? LOGIN</Link>
        </>
    );
};

export default Register;