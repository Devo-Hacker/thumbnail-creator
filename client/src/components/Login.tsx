import React, { useState } from 'react'
import SoftBackDrop from './SoftBackDrop'

const Login = () => {
 const [state, setState] = React.useState("login")

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

    }

  return (
     <>
     <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=DM+Sans:wght@300;400;500&display=swap');

        .login-wrap * { font-family: 'DM Sans', sans-serif; }
        .login-wrap h1 { font-family: 'Sora', sans-serif; }

        .login-panel {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.10);
          border-radius: 24px;
          overflow: hidden;
          display: flex;
          width: 890px;
          max-width: 95vw;
          min-height: 550px;
        }

        .login-img-side {
          position: relative;
          flex: 1;
          min-width: 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
        .login-img-side img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }
        .login-img-overlay {
          position: relative;
          z-index: 1;
          padding: 28px;
          background: linear-gradient(to top, rgba(0,0,0,0.70) 0%, transparent 100%);
        }
        .login-img-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 100px;
          padding: 6px 14px;
          margin-bottom: 14px;
        }
        .login-img-badge-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #a78bfa;
          animation: pdot 2s ease-in-out infinite;
        }
        @keyframes pdot { 0%,100%{opacity:1} 50%{opacity:0.35} }
        .login-img-badge span { font-size: 12px; color: rgba(255,255,255,0.85); }
        .login-img-tagline {
          font-family: 'Sora', sans-serif;
          font-size: 22px;
          font-weight: 600;
          color: #fff;
          line-height: 1.35;
          margin: 0;
        }
        .login-img-sub {
          font-size: 13px;
          color: rgba(255,255,255,0.50);
          margin-top: 6px;
          line-height: 1.5;
        }

        .login-form-side {
          width: 360px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 680px) {
          .login-img-side { display: none; }
          .login-form-side { width: 100%; }
        }
     `}</style>
     <SoftBackDrop />
<div className='min-h-screen flex items-center justify-center login-wrap'>
    <div className="login-panel">

      {/* LEFT image panel */}
      <div className="login-img-side">
        <img
          src="https://st2.depositphotos.com/2001755/8564/i/450/depositphotos_85647140-stock-photo-beautiful-landscape-with-birds.jpg"
          alt="CliqueBait visual"
        />
        <div className="login-img-overlay">
          {/* <div className="login-img-badge">
            <div className="login-img-badge-dot" />
            <span>AI-powered Thumbnail generator</span>
          </div> */}
          <p className="login-img-tagline">Create content<br />that actually clicks.</p>
          <p className="login-img-sub">Millions of creators trust CliqueBait<br />to generate engaging content instantly.</p>
        </div>
      </div>

      {/* RIGHT form panel — original JSX untouched */}
      <div className="login-form-side">
        <form
                onSubmit={handleSubmit}
                className="w-full sm:w-87.5 text-center  px-8">
                <h1 className="text-white text-3xl mt-10 font-medium">
                    {state === "login" ? "Login" : "Sign up"}
                </h1>

                <p className="text-gray-400 text-sm mt-2">Please sign in to continue</p>

                {state !== "login" && (
                    <div className="flex items-center mt-6 w-full bg-white/5 ring-2 ring-white/10 focus-within:ring-indigo-500/60 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white/60" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <circle cx="12" cy="8" r="5" /> <path d="M20 21a8 8 0 0 0-16 0" /> </svg>
                        <input type="text" name="name" placeholder="Name" className="w-full bg-transparent text-white placeholder-white/60 border-none outline-none " value={formData.name} onChange={handleChange} required />
                    </div>
                )}

                <div className="flex items-center w-full mt-4 bg-white/5 ring-2 ring-white/10 focus-within:ring-indigo-500/60 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white/75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /> <rect x="2" y="4" width="20" height="16" rx="2" /> </svg>
                    <input type="email" name="email" placeholder="Email id" className="w-full bg-transparent text-white placeholder-white/60 border-none outline-none " value={formData.email} onChange={handleChange} required />
                </div>

                <div className=" flex items-center mt-4 w-full bg-white/5 ring-2 ring-white/10 focus-within:ring-indigo-500/60 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white/75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <rect width="18" height="11" x="3" y="11" rx="2" ry="2" /> <path d="M7 11V7a5 5 0 0 1 10 0v4" /> </svg>
                    <input type="password" name="password" placeholder="Password" className="w-full bg-transparent text-white placeholder-white/60 border-none outline-none" value={formData.password} onChange={handleChange} required />
                </div>

                <div className="mt-4 text-left">
                    <button className="text-sm text-indigo-400 hover:underline">
                        Forget password?
                    </button>
                </div>

                <button type="submit" className="mt-2 w-full h-11 rounded-full text-white bg-indigo-600 hover:bg-indigo-500 transition " >
                    {state === "login" ? "Login" : "Sign up"}
                </button>

                <p onClick={() => setState(prev => prev === "login" ? "register" : "login")} className="text-gray-400 text-sm mt-3 mb-11 cursor-pointer" >
                    {state === "login" ? "Don't have an account?" : "Already have an account?"}
                    <span className="text-indigo-400 hover:underline ml-1">click here</span>
                </p>
            </form>
      </div>

    </div>
</div>
        </>
  )
}

export default Login
