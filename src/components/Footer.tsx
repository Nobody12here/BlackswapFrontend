import { FaGithub, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="px-10 md:px-12 pb-10 space-y-6">
      <div className="flex justify-between flex-col md:flex-row gap-8">
        <div className="flex gap-6 items-center order-2 md:order-1">
          <a href="#" target="_blank">
            <FaGithub size={24} />
          </a>

          <a href="#" target="_blank">
            <FaXTwitter size={24} />
          </a>

          <a href="#" target="_blank">
            <FaDiscord size={28} />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:max-w-[568px] w-full order-1 md:order-2">
          <div>
            <h2 className="mb-2 text-lg font-normal">App</h2>

            <ul className="space-y-[5px] text-[#9b9b9b] text-base font-light">
              <li>
                <a
                  href="#"
                  className="hover:opacity-70 transition-opacity duration-300"
                >
                  Trade
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:opacity-70 transition-opacity duration-300"
                >
                  Explore
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:opacity-70 transition-opacity duration-300"
                >
                  Pool
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-normal">Company</h2>

            <ul className="space-y-[5px] text-[#9b9b9b] text-base font-light">
              <li>
                <a
                  href="#"
                  className="hover:opacity-70 transition-opacity duration-300"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:opacity-70 transition-opacity duration-300"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:opacity-70 transition-opacity duration-300"
                >
                  Brand assets
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-normal">Protocol</h2>

            <ul className="space-y-[5px] text-[#9b9b9b] text-base font-light">
              <li>
                <a
                  href="#"
                  className="hover:opacity-70 transition-opacity duration-300"
                >
                  Vote
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:opacity-70 transition-opacity duration-300"
                >
                  Governance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:opacity-70 transition-opacity duration-300"
                >
                  Developers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-normal">Need help?</h2>

            <ul className="space-y-[5px] text-[#9b9b9b] text-base font-light">
              <li>
                <a
                  href="#"
                  className="hover:opacity-70 transition-opacity duration-300"
                >
                  Help center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:opacity-70 transition-opacity duration-300"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="h-[1px] w-full bg-black dark:bg-white bg-opacity-10"></div>

      <div className="flex justify-between flex-col md:flex-row">
        <div className="text-base font-normal">© 2024 - Uniswap Labs</div>

        <div className="flex gap-4">
            <a href="#" className="text-[#7d7d7d] text-base font-light">Trademark Policy</a>
            <a href="#" className="text-[#7d7d7d] text-base font-light">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
