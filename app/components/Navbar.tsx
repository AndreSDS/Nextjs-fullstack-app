import { auth, signIn, signOut } from "@/auth";
import { Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";

interface INavbarProps { };

export const Navbar: React.FC<INavbarProps> = async (props) => {
    const session: Session | null = await auth()

    async function handleSignIn() {
        'use server'
        await signIn('github')
    }

    async function handleSignOut() {
        'use server'
        await signOut({ redirectTo: '/'})
    }

    return (
        <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
            <nav className="flex justify-between items-center">
                <Link href="">
                    <Image src="/logo.png" alt="logo marca" width={144} height={30} />
                </Link>

                <div className="flex items-center gap-5 text-black">
                    {session && session?.user ? (
                        <>
                            <Link href="/startup/create">
                                <span>Create</span>
                            </Link>

                            <button onClick={handleSignOut}>
                                <span>Logout</span>
                            </button>

                            <Link href={`/user/${session.user?.id}`}>
                                <span>{session?.user?.name}</span>
                            </Link>
                        </>
                    ) : (
                        <button onClick={handleSignIn}>
                            <span>Login</span>
                        </button>
                    )}
                </div>
            </nav>
        </header>
    );
}