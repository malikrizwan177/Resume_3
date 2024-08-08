import { useState } from "react";
import { Nav } from ".";
import { Dialog } from "@headlessui/react";
import { closeBtn, menuBar } from "../assets";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full p-1 shadow-lg bg-[#24272C] navshadow"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <img src={menuBar} alt="menuBar" className="h-8 w-8 p-1.5" aria-hidden="true" />
        </button>
      </div>
      <nav className="hidden lg:flex flex-row justify-center items-center gap-10 lg:gap-20 text-white ">
        {Nav.map((item) => (
          <a className="btn" key={item.id} href={item.link}>
            {item.title}
          </a>
        ))}
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto mbg px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 rounded-3xl shadow-inner mbg h-lvh mborder">
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <img src={closeBtn} className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {Nav.map((item) => (
                  <a
                    onClick={() => setMobileMenuOpen(false)}
                    key={item.id}
                    href={item.link}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-black"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
