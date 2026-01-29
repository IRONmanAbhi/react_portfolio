const projects = [
    {
        title: "ACTDP Website",
        desc: "Static website for a coaching institute.",
        img: "https://via.placeholder.com/300x200",
    },
    {
        title: "Load Balancer",
        desc: "C++ program simulating load distribution.",
        img: "https://via.placeholder.com/300x200",
    },
    {
        title: "Flask Blog Website",
        desc: "Blog app with authentication and CRUD.",
        img: "https://via.placeholder.com/300x200",
    },
    {
        title: "Reverse Shell Python",
        desc: "Python-based security testing project.",
        img: "https://via.placeholder.com/300x200",
    },
    {
        title: "Error_Search",
        desc: "CLI tool for searching compiler errors.",
        img: "https://via.placeholder.com/300x200",
    },
    {
        title: "SSH Honeypot",
        desc: "SSH tool to analyze brute-force attempts.",
        img: "https://via.placeholder.com/300x200",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((p, i) => (
                        <div key={i} className="bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition p-4">
                            <img src={p.img} alt={p.title} className="rounded-lg mb-4" />
                            <h4 className="text-lg font-semibold mb-2">{p.title}</h4>
                            <p className="text-gray-600 text-sm">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
