import React, { Fragment } from "react";

const styles = `
    .react-nav ul {
        line-height: 1.6;
        margin-bottom: 1rem;
    }
    .margin-0 {
        margin: 0px !important
    }
    .margin-left-3 {
        margin-left: 8px;
    }
    .material-icons {
        font-family: 'Material Icons';
        font-style: normal;
    }

    .react-nav {
        display: flex;
        width: 100%;
    }
    .react-nav .TopBar {
        padding-left: 20px;
        padding-right: 20px;
        justify-content: space-between;
        display: flex;
        flex-grow: 1;
        border-bottom: 1px solid #ededed;
        overflow: visible;
        box-shadow: 0 0px 3px rgba(0, 0, 0, 0.08);
        position: relative;
        z-index: 1000;
    }

    .react-nav .NavMenu {
        display: flex;
        list-style-type: none;
        margin: 0;
        padding: 0;
        font-weight: 600;
    }
    .react-nav .NavMenu--left {
        float: left; 
    }
    .react-nav .NavMenu--right {
        float: right; 
    }
    .react-nav .NavMenu-logo {
        height: 20px;
        width: auto;
        display: block; 
    }
    .react-nav .NavMenu-item {
        display: inline-block;
        line-height: 20px;
        margin: 0;
        padding: 0;
        margin-right: 30px;
        text-align: left;
        vertical-align: middle;
        padding: 13px 0;
    }
    .react-nav .NavMenu-link {
        text-decoration: none;
        line-height: inherit;
        cursor: pointer;
        color: #4d4d4d;
        white-space: nowrap;
    }
    .react-nav .NavMenu-icon {
        vertical-align: middle;
        height: 16px;
        width: 14px;
        display: inline-block;
    }
    .react-nav .NavMenu-link:hover {
        color: #dd4d4d;
        background: transparent;
    }
    .react-nav .NavMenu-link--active {
        color: #dd4d4d;
        background: transparent;
    }
    .react-nav .NavMenu-link:hover path:last-child {
        fill: #dd4d4d;
    }
    .react-nav .NavMenu-icon--large {
        vertical-align: middle;
        display: inline-block;
        line-height: 17px;
        font-size: 18px;
        height: 18px;
        width: 18px;
    }

    .react-nav .NavDropdown {
        opacity: 0;
        transition: opacity 0.2s;
        display: none;
        margin: 0;
        list-style-type: none;
        border-radius: 3px;
        border: 0;
        position: absolute;
        top: 100%;
        padding-left: 0;
        padding-top: 0.35rem;
        min-width: 150px;
        padding-bottom: 0.35rem;
        background: #fff;
        box-shadow: 0 0px 1px rgba(0, 0, 0, 0.08), 0 3px 12px rgba(0, 0, 0, 0.12);
    }
    .react-nav .NavDropdown--left {
        left: auto;
        right: 0;
        top: 100%;
        margin-right: -18px;
    }
    .react-nav .NavDropdown--right {
        right: auto;
        left: 0;
        top: 100%;
        margin-left: -18px;
    }
    .react-nav .NavDropdown--trigger {
        position: relative;
    }
    .react-nav .NavDropdown--trigger:hover > .NavDropdown {
        display: block;
        opacity: 1;
        animation: show-NavMenu 0.1s ease-in-out;
    }
    .react-nav .NavDropdown--trigger ul ul {
        left: 100%;
        top: -0.35rem;
        margin-left: 0;
    }
    .react-nav .NavDropdown::before {
        content: "";
        border-top: 1px solid #ededed;
        display: block;
        width: 100%;
        height: 0;
        position: absolute;
        top: 0;
    }
    .react-nav .NavDropdown:hover {
        display: block;
        opacity: 1;
    }
    .react-nav .NavDropdown-item {
        text-align: left;
        vertical-align: middle;
        padding: 0.35rem 1rem;
        cursor: pointer;
    }
    .react-nav .NavDropdown-header {
        margin-top: -0.35rem;
        border-bottom: 1px solid #ededed;
        background: #f6f6f6;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
    }
    .react-nav .NavDropdown-header p {
        margin: 0;
    }
    .react-nav .NavDropdown-icon {
        vertical-align: middle;
        height: 14px;
        width: 14px;
        display: inline-block;
    }
    .react-nav .NavDropdown .NavMenu-icon {
        transform: rotate(-90deg);
        line-height: inherit;
    }

    @keyframes show-NavMenu {
        to {
            opacity: 1;
            margin-top: 0; 
        }
        from {
            opacity: 0;
            margin-top: 10px; 
        } 
    }
    .react-nav .TopBar {
      align-items: center; /* Align items vertically */
    }
    .react-nav .NavLogo, .react-nav .NavMenu--right {
      display: flex;
      align-items: center; /* Align logo and nav items */
    }
    .react-nav .NavLogo img {
      height: 200px; /* Adjust height as necessary */
      width: auto; /* Adjust width as necessary */
    }
`;

const Navbar = ({ logo, currentUrl = '', onClick }) => {
  const createNavItem = (onClickFn, url, dropDownDirection, isDropDown, menu, idx) => {
    const { submenus = [], title, link, type = "menu" } = menu;
    const linkClass = link === url ? "NavMenu-link NavMenu-link--active" : "NavMenu-link";

    if (submenus.length) {
      return (
        <Fragment key={`menu-${idx}`}>
          <li className="NavMenu-item NavDropdown--trigger" onClick={onClickFn.bind(null, menu)}>
            <a href={link} className={linkClass}>
              {title}
              <span className="NavMenu-icon">
                {/* SVG icon */}
              </span>
            </a>
            <ul className={`NavDropdown NavDropdown--${dropDownDirection}`}>
              {submenus.map(createNavItem.bind(null, onClickFn, url, dropDownDirection, true))}
            </ul>
          </li>
        </Fragment>
      );
    } else {
      return (
        <li className={isDropDown ? `NavDropdown-item` : `NavMenu-item`} onClick={onClickFn.bind(null, menu)} key={idx}>
          {type === "logo" && <img src={menu.src} alt={menu.alt} className="NavMenu-logo" />}
          {type === "menu" && <a href={link} className={linkClass}>{title}</a>}
        </li>
      );
    }
  };

  const onClickHandler = (menu, ev) => {
    ev.stopPropagation();
    console.log(menu, ev);
  };

  // Define menuItems with updated links
  const menuItems = [
    { title: 'Home', link: '/home', type: 'menu' },
    {
      title: 'Works',
      type: 'menu',
      submenus: [
        { title: 'Commercials', link: '/works/commercial' },
        { title: 'Music Videos', link: '/works/music' },
        { title: 'Photography', link: '/works/photography' },
        { title: 'Documentary', link: '/works/documents' },
        { title: 'Short Film', link: '/works/short' },
        // Add more submenu items as needed
      ],
    },
    {
      title: 'Meet the Team',
      type: 'menu',
      submenus: [
        { title: 'Directors', link: '/team/directors' },
        { title: 'Producers', link: '/team/producers' },
        { title: 'Cinematographers', link: '/team/cinematographies' },
        { title: 'Production Personnel', link: '/team/personnel' },
        { title: 'Post-Production Personnel', link: '/team/postpersonnel' },
        { title: 'Staff & Operations', link: '/team/staff' },
        // Add more submenu items as needed
      ],
    },
    {
      title: 'Contact',
      type: 'menu',
      submenus: [
        { title: 'Information', link: '/contact/information' },
        { title: 'Hire Us', link: '/contact/hire' },
        { title: 'Join Us', link: '/contact/join' },
        // Add more submenu items as needed
      ],
    },
  ];

  return (
    <Fragment>
      <style>{styles}</style>
      <div className="react-nav">
        <nav className="TopBar">
          {logo && (<div className="NavLogo"><img src={logo} alt="Logo" /></div>)}
          <ul className="NavMenu NavMenu--right">
            {menuItems.map((item, index) => createNavItem(onClick || onClickHandler, currentUrl, 'left', false, item, index))}
          </ul>
        </nav>
      </div>
    </Fragment>
  );
};

export default Navbar;