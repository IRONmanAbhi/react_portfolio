export default function Hero() {
    return (
        <section
            className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80')",
            }}
        >
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">Hi, I am Abhinav Yadav</h1>
            <p className="text-lg md:text-xl mb-4">Developer | Cyber Security Enthusiast</p>
            <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-400">🔗 LinkedIn</a>
                <a href="#" className="hover:text-blue-400">💻 GitHub</a>
            </div>
        </section>
    );
}
