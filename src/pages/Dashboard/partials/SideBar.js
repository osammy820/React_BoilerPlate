import React from "react";
import routes from "../../../components/strings/routes";
import { Check, CheckSquare, CreditCard, Home, List, Menu, PenTool, Twitch, Users } from "react-feather";
import { useLocation, useNavigate } from "react-router-dom";

function SideBar({ sideBarCollapsed }) {
  const location = useLocation();
  return (
    <nav
      id="sidebar"
      className={`sidebar js-sidebar ${sideBarCollapsed && "collapsed"}`}
    >
      <div className="sidebar-content js-simplebar">
        <a className="sidebar-brand" href="index.html">
          <span className="align-middle">Trust Pay</span>
        </a>

        <ul className="sidebar-nav">
          <li className="sidebar-header">Admin</li>

          <SidebarItem
            title={"Dashboard"}
            icon={<Home className="align-middle" />}
            path={routes.DASHBOARD}
            pathname={location.pathname}
          />
          <SidebarItem
            title={"Manage Staff"}
            icon={<Users className="align-middle" />}
            path={'routes.DASHBOARD'}
            pathname={location.pathname}
          />
          <SidebarItem
            title={"Manage Approvals"}
            icon={<Twitch className="align-middle" />}
            path={'routes.DASHBOARD'}
            pathname={location.pathname}
          />
          <SidebarItem
            title={"Transactions"}
            icon={<CreditCard className="align-middle" />}
            path={'routes.DASHBOARD'}
            pathname={location.pathname}
          />
          <SidebarItem
            title={"Food Items"}
            icon={<Menu className="align-middle" />}
            path={'routes.DASHBOARD'}
            pathname={location.pathname}
          />
          <SidebarItem
            title={"Check List"}
            icon={<PenTool className="align-middle" />}
            path={'routes.DASHBOARD'}
            pathname={location.pathname}
          />


          <li className="sidebar-header">Tools & Components</li>

          <li className="sidebar-item">
            <a className="sidebar-link" href="ui-buttons.html">
              <i className="align-middle" data-feather="square"></i>{" "}
              <span className="align-middle">Buttons</span>
            </a>
          </li>

          <li className="sidebar-item">
            <a className="sidebar-link" href="ui-forms.html">
              <i className="align-middle" data-feather="check-square"></i>{" "}
              <span className="align-middle">Forms</span>
            </a>
          </li>

          <li className="sidebar-item">
            <a className="sidebar-link" href="ui-cards.html">
              <i className="align-middle" data-feather="grid"></i>{" "}
              <span className="align-middle">Cards</span>
            </a>
          </li>

          <li className="sidebar-item">
            <a className="sidebar-link" href="ui-typography.html">
              <i className="align-middle" data-feather="align-left"></i>{" "}
              <span className="align-middle">Typography</span>
            </a>
          </li>

          <li className="sidebar-item">
            <a className="sidebar-link" href="icons-feather.html">
              <i className="align-middle" data-feather="coffee"></i>{" "}
              <span className="align-middle">Icons</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

const SidebarItem = ({ title, icon, path, pathname }) => {
  const navigate = useNavigate();

  return (
    <li
      className={`sidebar-item ${pathname === path && "active"}`}
      onClick={() => navigate(path)}
    >
      <a className="sidebar-link" href={() => navigate(path)}>
        {icon}
        <span className="align-middle">{title}</span>
      </a>
    </li>
  );
};

export default SideBar;
