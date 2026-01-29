export default function Resume() {
    return (
        <section id="resume" className="py-20 bg-gray-100">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-10">Resume</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Skills</h3>
                        <ul className="list-disc pl-6 text-gray-700">
                            <li>Python, C++, JavaScript, HTML, CSS</li>
                            <li>React, Tailwind, Node.js</li>
                            <li>SQL, MongoDB</li>
                        </ul>

                        <h3 className="text-xl font-semibold mt-6 mb-2">Education</h3>
                        <p>B.Tech, IIT Kanpur — Computer Science (2021–2025)</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Experience</h3>
                        <p>Technical Writer @ GeeksforGeeks (2022)</p>
                        <p>Project Maintainer @ Student Club (2021–2022)</p>

                        <h3 className="text-xl font-semibold mt-6 mb-2">Achievements</h3>
                        <p>Hackathon Finalist | Built various cybersecurity tools</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
