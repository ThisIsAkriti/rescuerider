import {
    SignedIn,
    SignedOut,
    UserButton,
  } from '@clerk/nextjs'
import Link from 'next/link';
const Header = () => {
    return (
        <main>
            <div className="flex justify-between px-4 py-6 md:text-lg text-sm">
                <Link href={"/"}>
                    <h1 className="font-semibold cursor-pointer">Rescue Rider</h1></Link>
                <div className="text-gray-500 cursor-pointer">Your Dashboard</div>
                <div className="text-gray-400 cursor-pointer">
                    <SignedOut>
                        <Link href={"/sign-up"}>
                            Sign Up
                        </Link>   
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </div>
        </main>
    )
}
export default Header;