import Navbar from "../components/Navbar.tsx"

export default function About() {
    return (
        <div>
            <Navbar/>
            <p className="flex flex-col items-center text-center gap-4 p-6">
                Hi There,
                <br/>
                I am Marvin, I like to build stuff, learn math and physics...
                <br/>
                My goals are: 
                <li className="list-disc text-left">
                    <ul>Become able to build everything I want</ul>
                    <ul>Get accepted into Polytechnique, Paris</ul>
                    <ul>Become a chess master (actually 2014 Fide the 9th June 2026)</ul>
                </li>
            </p>
        </div>
    )
}