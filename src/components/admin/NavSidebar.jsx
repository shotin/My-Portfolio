import React, { useState } from "react";
import { Navigation } from "react-minimal-side-navigation";
import { useHistory, useLocation } from "react-router-dom";
// import "./styles/main.bundle.css";
import Icon from "awesome-react-icons";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

export const NavSidebar = () => {
  const history = useHistory();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <React.Fragment>
      {/* Sidebar Overlay */}
      <div
        onClick={() => setIsSidebarOpen(false)}
        className={`fixed inset-0 z-20 block transition-opacity bg-black opacity-50 lg:hidden ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      />

      {/* <div>
        <button
          className="btn-menu"
          onClick={() => setIsSidebarOpen(true)}
          type="button"
        >
          <Icon name="burger" className="w-6 h-6 text-dark" />
        </button>
      </div> */}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-white border-r-2 lg:translate-x-0 lg:static lg:inset-0 ${
          isSidebarOpen ? "ease-out translate-x-0" : "ease-in -translate-x-full"
        }`}
      >
        <div className="flex items-center justify-center mt-10 text-center py-6">
          <span className="mx-2 text-2xl font-semibold text-black">
              Dashboard
          </span>
        </div>

        {/* https://github.com/abhijithvijayan/react-minimal-side-navigation */}
        <Navigation
          activeItemId={location.pathname}
          onSelect={({ itemId }) => {
            history.push(itemId);
          }}
          items={[
            {
              title: "Upload Blog",
              itemId: "/adminhome",
              // Optional
              elemBefore: () => <Icon name="coffee" />
            },
           
            {
              title: "Upload Characters",
              itemId: "/character",
              elemBefore: () => <Icon name="cloud-snow" />
            },

            {
              title: "Upload Comic",
              itemId: "/comichome",
              elemBefore: () => <Icon name="cloud-snow" />
            }
          ]}
        />

        <div className="absolute bottom-0 w-full my-8">
          <Navigation
            activeItemId={location.pathname}
            items={[
              // {
              //   // title: "Settings",
              //   // itemId: "/settings",
              //   // elemBefore: () => <Icon name="activity" />
              // }
            ]}
            onSelect={({ itemId }) => {
              history.push(itemId);
            }}
          />
        </div>
      </div>
       {/* <div>
        <a href="https://ibb.co/nRTd2BT">
          <img src="https://i.ibb.co/cxPf5wP/timon-klauser-3-MAmj1-ZKSZA-unsplash.jpg" alt="timon-klauser-3-MAmj1-ZKSZA-unsplash" border="0" />
        </a><br />
        <a target='_blank' href='https://poetandpoem.com/analysis-mother-son-langston-hughes'>short poems from a mother to her son</a>
        <br />
        </div> */} <img src="https://i.ibb.co/cxPf5wP/timon-klauser-3-MAmj1-ZKSZA-unsplash.jpg" alt="timon-klauser-3-MAmj1-ZKSZA-unsplash" border="0" />
    </React.Fragment>
  );
};
