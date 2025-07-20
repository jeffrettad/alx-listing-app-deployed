import React from "react";

const Footer: React.FC = () => {
  const exploreLinks = [
    "Apartments in Dubai",
    "Hotels in New York",
    "Villa in Spain",
    "Mansion in Indonesia",
  ];

  const companyLinks = ["About us", "Blog", "Career", "Customers", "Brand"];

  const helpLinks = ["Support", "Cancel booking", "Refunds Process"];

  const bottomLinks = [
    "Terms of Service",
    "Policy service",
    "Cookies Policy",
    "Partners",
  ];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="bg-teal-500 text-white px-4 py-4 text-center text-sm"></div>
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Logo and Description - Always at top */}
        <div className="mb-8 lg:hidden">
          <div className="text-2xl font-bold mb-4">
            al<span className="text-teal-400">✕</span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed max-w-md">
            ALX is a platform where travellers can discover and book unique,
            comfortable, and affordable lodging options worldwide. From cozy
            city apartments and tranquil countryside retreats to exotic
            beachside villas, ALX connects you with the perfect place to stay
            for any trip.
          </p>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          <div className="mb-8 hidden lg:block">
            <div className="text-2xl font-bold mb-4">
              al<span className="text-teal-400">✕</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              ALX is a platform where travellers can discover and book unique,
              comfortable, and affordable lodging options worldwide. From cozy
              city apartments and tranquil countryside retreats to exotic
              beachside villas, ALX connects you with the perfect place to stay
              for any trip.
            </p>
          </div>
          {/* Explore Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Explore</h3>
            <ul className="space-y-3">
              {exploreLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Help</h3>
            <ul className="space-y-3">
              {helpLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            {/* Hotel Notice */}
            <div className="text-gray-400 text-sm">
              Some hotel requires you to cancel more than 24 hours before
              check-in. Details{" "}
              <a
                href="#"
                className="text-teal-400 hover:text-teal-300 transition-colors"
              >
                here
              </a>
            </div>

            {/* Bottom Links - Mobile: Stack vertically, Tablet/Desktop: Horizontal */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-sm text-gray-400">
              {bottomLinks.slice(0, 3).map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
              {/* Partners only shows on desktop in some layouts, but keeping it for consistency */}
              <a
                href="#"
                className="hover:text-white transition-colors hidden sm:block"
              >
                {bottomLinks[3]}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
