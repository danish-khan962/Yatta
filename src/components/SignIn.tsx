import { signIn } from "../../auth"
import { Space_Mono } from "next/font/google"

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["700"],
})

export default function SignIn() {
    return (
        <form
            action={async () => {
                "use server"
                await signIn("google")
            }}
        >
            <div className='group'>
                <button className={`${spaceMono.className} bg-[#f4f4f4] text-black py-2 px-8 hover:cursor-pointer rounded relative group-hover:bg-green-100 outline-2 outline-black`}>
                    Login
                    <div className='bg-green-500 absolute h-full w-full -z-[10] top-2 left-2 rounded-lg group-hover:bg-green-400'></div>
                </button>
            </div>
        </form>
    )
} 