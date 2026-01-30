import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-gray-600 text-gray-300 px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: About */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            Soumik Ghatak
          </h2>
          <p className="text-sm leading-relaxed">
            Built with ❤️ by Soumik Ghatak. This application is designed to
            simplify and enhance your experience.
          </p>
        </div>

        {/* Column 2: Contact */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaPhoneAlt />
              <span>+91-XXXXXXXXXX</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope />
              <span>soumikghatak@email.com</span>
            </li>
          </ul>
        </div>

        {/* Column 3: Social Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Follow Me</h2>
          <div className="flex gap-4 text-2xl">
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-100 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Soumik Ghatak. All rights reserved.
      </div>
    </footer>
  );
}
