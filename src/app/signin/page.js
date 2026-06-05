"use client"

import SignIn from '@/components/SignIn';
// import SocialSignIn from '@/components/SocialSignIn';

export default function SignInPage() {
    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gray-800">
                <div className="flex-col bg-gray-700 text-gray-300 p-8 rounded-lg shadow-md w-full max-w-md mb-12">
                    <h1 className="text-3xl font-bold mb-6 text-center text-gray-300">Sign In</h1>
                    <SignIn />
                </div>
            </div>
        </>
    );
}