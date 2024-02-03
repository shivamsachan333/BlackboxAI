import Logo from "../components/Logo";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

const Header = () => {
  //router
  const router = useRouter();
  const { main } = {
    "main": [
      {
        "name": "Home",
        "url": "/"
      },

      {
        "name": "Webinar",
        "url": "/Webinar"
      },
      {
        "name": "Blogs",
        "url": "/Blogs"
      },
      {
        "name": "Contact",
        "url": "/contact"
      },


    ]
  };
  const items = [
    {
      key: "Strategy Trading",
      label:  "Strategy Trading",
      href:"/strategy_trading",
    },
    {
      key: "Customizable Strategy",
      label: "Customizable Strategy",
      href:"/customizable_strategy",
    },
    {
      key: "Education",
      label: "Education",
      href:"/education",
    }
  ];

  // states declaration
  const [navOpen, setNavOpen] = useState(false);


  return (
    <header className="header">
      <nav className="navbar container">
        {/* logo */}
        <div className="order-0">
          <Logo src="/images/logo.svg" />
        </div>

        {/* navbar toggler */}
        <button
          id="show-button"
          className="order-2 flex cursor-pointer items-center md:hidden md:order-1"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? (
            <svg className="h-6 fill-current" viewBox="0 0 20 20">
              <title>Menu Open</title>
              <polygon
                points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                transform="rotate(45 10 10)"
              />
            </svg>
          ) : (
            <svg className="h-6 fill-current" viewBox="0 0 20 20">
              <title>Menu Close</title>
              <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z" />
            </svg>
          )}
        </button>

        {/* Menu */}
        <div
          id="nav-menu"
          className={`order-3 md:order-1 ${navOpen ? "max-h-[1000px]" : "max-h-0"
            }`}
        >
          <ul className="navbar-nav block w-full md:flex md:w-auto lg:space-x-2">
            {main.map((menu, i) => (
              <React.Fragment key={`menu-${i}`}>
                {menu.hasChildren ? (
                  <li className="nav-item nav-dropdown group relative">
                    <span className="nav-link inline-flex items-center">
                      {menu.name}
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                    <ul className="nav-dropdown-list hidden group-hover:block md:invisible md:absolute md:block md:opacity-0 md:group-hover:visible md:group-hover:opacity-100">
                      {menu.children.map((child, i) => (
                        <li className="nav-dropdown-item" key={`children-${i}`}>
                          <Link
                            href={child.url}
                            className="nav-dropdown-link block"
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link
                      href={menu.url}
                      onClick={() => setNavOpen(false)}
                      className={`nav-link block ${router.asPath === menu.url ? "nav-link-active" : ""
                        }`}
                    >
                      {menu.name}
                    </Link>
                  </li>
                )}
              </React.Fragment>


            ))}
            <li className="servicebutton nav-item nav-dropdown group relative"> <Dropdown>
              <DropdownTrigger>
                <Button
                  variant="bordered" 
                >Services
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Dynamic Actions" items={items} className="dropdownclass">
                {(item) => (
                  <DropdownItem
                  key={item.key}
                  color={item.key === "delete" ? "danger" : "default"}
                  className={item.key === "delete" ? "text-danger" : ""}
                ><Link href={item.href}>
                  {item.label}</Link>
                </DropdownItem>
                )}
              </DropdownMenu>
            </Dropdown></li>


            <li className="navbuttonsign nav-item nav-dropdown group relative"><Link href="comingsoon" target="_blank" className="btn outline btn-outline-primary btn-primary">
              Login/Signup    </Link></li>

          </ul>
        </div>

      </nav>
    </header>
  );
};

export default Header;
