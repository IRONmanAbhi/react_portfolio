export default function Navbar() {
    return (
        <nav className="fixed w-full bg-white shadow z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <h1 className="font-bold text-xl">Abhinav Yadav</h1>
                <ul className="flex space-x-6 text-gray-700">
                    <li><a href="#about" className="hover:text-blue-500">About</a></li>
                    <li><a href="#resume" className="hover:text-blue-500">Resume</a></li>
                    <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
                    <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}
