import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CertificateLogin.css";

const users = [
    { username: "mrtanos_16", password: "1234tanishk" },
    { username: "mokshaaa", password: "tharun" },
    { username: "codegamble", password: "1234codegamble" },
    { username: "paper", password: "paper@123" },
    { username: "codex", password: "codex123" },
    { username: "fifa", password: "chander" },
    { username: "connections", password: "balajibruvv" }
];

function CertificateLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        let timeout;

        const resetTimer = () => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                setIsLoggedIn(false);  // Log out user
                navigate("/login"); // Redirect to login
            }, 5000); // 5 seconds
        };

        if (isLoggedIn) {
            resetTimer(); // Start timeout when user logs in
            window.addEventListener("mousemove", resetTimer);
            window.addEventListener("keydown", resetTimer);
        }

        return () => {
            clearTimeout(timeout);
            window.removeEventListener("mousemove", resetTimer);
            window.removeEventListener("keydown", resetTimer);
        };
    }, [isLoggedIn, navigate]);

    const handleLogin = (e) => {
        e.preventDefault();
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
            setIsLoggedIn(true);
            setTimeout(() => {
                navigate("/certificate");
            }, 2000);
        } else {
            setError("❌ Invalid Username or Password!");
        }
    };

    return (
        <div className="login-container-login">
            {!isLoggedIn ? (
                <form className="login-form-login" onSubmit={handleLogin}>
                    <h2>Certificate Login</h2>
                    {error && <p className="error-message-err">{error}</p>}
                    <input 
                        className="inputbox"
                        type="text" 
                        placeholder="Username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                    <input 
                        className="inputbox"
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                    <button className="button11" type="submit">Login</button>
                </form>
            ) : (
                <div className="dashboard-dash">
                    <h2>Welcome, {username} 🎉</h2>
                    <p>You have successfully logged in to the certificate portal!</p>
                    <p>Redirecting...</p>
                </div>
            )}
            
            {/* dark mode */}
            {/* <div className={isDarkMode ? "wraper" : "wraper2"}>
            <DarkModeSwitch
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={120}
            />
            </div> */}

        </div>
    );
}

export default CertificateLogin;



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { login } from "./authService"; // Adjust the path as needed
// import "./CertificateLogin.css";

// function CertificateLogin() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const navigate = useNavigate();

//     useEffect(() => {
//         let timeout;

//         const resetTimer = () => {
//             clearTimeout(timeout);
//             timeout = setTimeout(() => {
//                 setIsLoggedIn(false);
//                 navigate("/login");
//             }, 5000);
//         };

//         if (isLoggedIn) {
//             resetTimer();
//             window.addEventListener("mousemove", resetTimer);
//             window.addEventListener("keydown", resetTimer);
//         }

//         return () => {
//             clearTimeout(timeout);
//             window.removeEventListener("mousemove", resetTimer);
//             window.removeEventListener("keydown", resetTimer);
//         };
//     }, [isLoggedIn, navigate]);

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             await login(email, password);
//             setIsLoggedIn(true);
//             setTimeout(() => {
//                 navigate("/certificate");
//             }, 2000);
//         } catch (err) {
//             console.error(err);
//             setError("❌ " + err.message);
//         }
//     };

//     return (
//         <div className="login-container-login">
//             {!isLoggedIn ? (
//                 <form className="login-form-login" onSubmit={handleLogin}>
//                     <h2>Certificate Login</h2>
//                     {error && <p className="error-message-err">{error}</p>}
//                     <input
//                         className="inputbox"
//                         type="email"
//                         placeholder="Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                     <input
//                         className="inputbox"
//                         type="password"
//                         placeholder="Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                     <button className="button11" type="submit">Login</button>
//                 </form>
//             ) : (
//                 <div className="dashboard-dash">
//                     <h2>Welcome 🎉</h2>
//                     <p>You have successfully logged in to the certificate portal!</p>
//                     <p>Redirecting...</p>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default CertificateLogin;
