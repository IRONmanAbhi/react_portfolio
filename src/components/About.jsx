export default function About() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
                <img
                    src="https://via.placeholder.com/200"
                    alt="profile"
                    className="rounded-xl shadow-lg w-60 h-60 object-cover"
                />
                <div>
                    <h2 className="text-3xl font-bold mb-4">About Me</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        I'm Abhinav, a passionate software developer and cybersecurity enthusiast.
                        I enjoy building efficient and scalable applications while constantly learning new technologies.
                    </p>
                    <ul className="text-gray-700 space-y-1">
                        <li><strong>Email:</strong> abhinavyadav.dev@gmail.com</li>
                        <li><strong>Phone:</strong> +91 7054XXXXXX</li>
                        <li><strong>Country:</strong> India</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
