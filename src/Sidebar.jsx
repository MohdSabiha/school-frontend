import { useState } from 'react';
import PropTypes from 'prop-types';

import { FaBars,  FaAngleDown, FaAngleRight } from 'react-icons/fa';
import { NavLink ,} from 'react-router-dom';
import { SidebarData } from './components/SidebarData';

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showStudentSubMenu, setShowStudentSubMenu] = useState(false);
  const [showSubjectSubMenu, setShowSubjectSubMenu] = useState(false);

  const toggle = () => setIsOpen(!isOpen);



  const toggleSubMenu = (menuName) => {
    if (menuName === 'Students') {
      setShowStudentSubMenu(!showStudentSubMenu);
      setShowSubjectSubMenu(false); // Close other submenu
    } else if (menuName === 'Subjects') {
      setShowSubjectSubMenu(!showSubjectSubMenu);
      setShowStudentSubMenu(false); // Close other submenu
    }
  };

  return (
    <>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className={` text-white ${isOpen ? 'w-64' : 'w-16'} transition-all duration-300`}>
          <div className="top_section flex items-center justify-between p-4">
            <h1 className={`logo ${isOpen ? 'block' : 'hidden'}`}>Dashboard</h1>
            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          {/* Menu Items */}
          {SidebarData.map((item, index) => (
            <div key={index} className="menu-item-container border shadow-md">
              {item.subMenuItems ? (
                <>
                  {/* Main Menu with Submenu Toggle */}
                  <div
                    className="link cursor-pointer"
                    onClick={() => toggleSubMenu(item.name)}
                  >
                    <div className="flex items-center p-4">
                      <div className="icon">{item.icon}</div>
                      <div className={`link_text ml-4 ${isOpen ? 'block' : 'hidden'}`}>{item.name}</div>
                      {/* Dropdown Indicator */}
                      {item.subMenuItems && (
                        <div className="ml-auto">
                          {isOpen ? (
                            <FaAngleDown className="ml-2" />
                          ) : (
                            <FaAngleRight className="ml-2" />
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Submenu Items */}
                  {item.name === 'Subjects' && showSubjectSubMenu ? (
                    <div className="submenu-container mt-2 ml-6">
                      {item.subMenuItems.map((subItem, subIndex) => (
                        <NavLink
                          key={subIndex}
                          to={subItem.path}
                          className="block bg-white rounded-lg shadow-md p-4 mb-2 text-sm text-gray-800 hover:bg-gray-200"
                          activeClassName="bg-gray-200"
                        >
                          {subItem.name}
                        </NavLink>
                      ))}
                    </div>
                  ) : null}
                </>
              ) : (
                // Regular Menu Item
                <NavLink to={item.path} key={index} className="link" activeClassName="bg-gray-700">
                  <div className="flex items-center p-4">
                    <div className="icon">{item.icon}</div>
                    <div className={`link_text ml-4 ${isOpen ? 'block' : 'hidden'}`}>{item.name}</div>
                  </div>
                </NavLink>
              )}
              {item.name === 'Payments' ? (
                <div className={`submenu-container mt-2 ml-6 ${isOpen ? 'block' : 'hidden'}`}>
                  {/* Render Payments content here */}
                  {/* You can fetch and display payments data for new registration students */}
                </div>
              ) : null}
            </div>
          ))}
        </div>

        {/* Main content */}
        <main className="flex-1 bg-cover p-1" style={{ backgroundImage: "url('../src/images/hero-bg.jpg')" }}>
          {children}
        </main>
      </div>
    </>
  );
};

Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Sidebar;
