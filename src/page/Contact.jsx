import { EnvelopeIcon, PhoneIcon, MapPinIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-gray-200 px-2 md:px-12 py-12">
      <div className="grid lg:grid-cols-3 gap-10">
        {/* === Left Column (Sticky Info) === */}
        <aside className="lg:col-span-1">
          <div className="sticky top-20 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">🤝 Get in Touch</h2>
            <p className="text-gray-400 text-sm mb-6">
              Feel free to reach out for collaborations, freelance work, or just
              a friendly chat. I’ll get back as soon as possible!
            </p>

            {/* Social Links */}
            <div className="flex justify-start gap-4">
              {["/linked.svg", "/github.svg", "/web.svg"].map((src, i) => (
                <a
                  key={i}
                  href="#"
                  className="bg-gradient-to-r from-[#2a2a2a] to-[#1a1a1a] p-3 rounded-full hover:scale-110 transition"
                >
                  <img src={src} alt="social" className="w-6 h-6" />
                </a>
              ))}
            </div>

            {/* Optional Contact Info */}
            <div className="mt-8 space-y-8 md:space-y-16 text-sm text-gray-200">
              <p className="flex items-center text-[16px] text-white gap-2">
                <EnvelopeIcon className="w-5 h-5 text-blue-400" /> sadha4k@mail.com
              </p>
              <p className="flex items-center gap-2">
                <PhoneIcon className="w-5 h-5 text-green-400" /> +91 82485 86299
              </p>
              <p className="flex items-center gap-2">
                <MapPinIcon className="w-5 h-5 text-red-400" /> Tamil Nadu, India
              </p>
            </div>
          </div>
        </aside>

        {/* === Right Column (Contact Form) === */}
        <section className="lg:col-span-2">
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-3 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-6">Contact Form</h3>

            <form className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring focus:ring-primary"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-black/50 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring focus:ring-primary"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">Message</label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full bg-black/50 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring focus:ring-primary"
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="text-xs md:text-sm flex items-center gap-4 bg-primary text-black hover:bg-primary/80 px-6 py-3 rounded-lg font-medium transition"
              >
                Send Message <PaperAirplaneIcon className="size-4 -rotate-28"/>
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
