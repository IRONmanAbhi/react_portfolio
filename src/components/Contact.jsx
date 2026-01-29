export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-gray-100">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-10">Contact Me</h2>
                <form className="max-w-md mx-auto space-y-4">
                    <input type="text" placeholder="Name" className="w-full border p-2 rounded" />
                    <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
                    <input type="text" placeholder="Phone Number" className="w-full border p-2 rounded" />
                    <textarea placeholder="Message" className="w-full border p-2 rounded h-24"></textarea>
                    <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}
