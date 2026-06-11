import Navbar from "@/components/Navbar.tsx"
import Footer from "@/components/Footer.tsx"

export default function About() {
    return (
        <div>
            <Navbar/>
            <div className="min-h-screen bg-slate-900 text-white flex flex-col gap-y-80">
                <p className="flex flex-col items-center text-center gap-4 p-6">
                    Hi There,
                    <br/>
                    I am Marvin, I like to build stuff, learn math, physics and AI.
                    <br/>
                    My goals are: 
                    <ul className="list-disc text-center">
                        <li>Become able to build everything I want</li>
                       <li>Get accepted into Polytechnique, Paris</li>
                        <li>Become a chess master (actually 2014 Fide the 9th June 2026)</li>
                    </ul>
                </p>
            <div className="flex flex-col">
                <Footer/>
            </div>
        </div>
        </div>
    )
}