import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import BarIcon from "../../assets/baricon.png";
import BarWhite from "../../assets/bar-white.svg";
import BarBlack from "../../assets/bar-black.svg";
import BarWhiteClose from "../../assets/bar-close-white.svg";
import BarBlackClose from "../../assets/bar-close-black.svg";
import { toggleScrollbar } from "../../utility/disablescroll";
import logo from "../../assets/cropped-logo.png";

type I = object | void;
import { Link as SLink, animateScroll as scroll } from "react-scroll";
const Navbar = () => {
  const [navcolor, setNavcolor] = useState(false);
  const [hamIcon, setHamIcon] = useState(false);
  const toggleHam = () => {
    setHamIcon(!hamIcon);

    toggleScrollbar();
    // console.log("ham Icon toggled");
  };
  //   const dispatch = useAppDispatch();
  useEffect(() => {
    const handleScroll = () => {
      // Handle scroll event here
      if (window.scrollY > 100) {
        console.log("color changed");
        setNavcolor(true);
      } else if (window.scrollY < 100) {
        setNavcolor(false);
      }
      // You can perform any actions or call functions based on the scroll event
    };

    // Add event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to ensure the event listener is added only once

  const handleToggleDarkMode = () => {
    // // console.log("Toggle called")
    // dispatch(toggleDarkMode());
    // window.localStorage.setItem("darkMode", JSON.stringify(!darkMode));
  };
  const styles = {
    navlink: `${
      !hamIcon ? "bar-icon-close-navlink" : "bar-icon-open-navlink"
    } nav-link`,
  };

  // document.getElementsByClassName('page-nav-link').onClick =
  //

  const onClickHandler = (event: any) => {
    const values = document.getElementsByClassName("page-nav-link");
    // values.forEach((element)=>{
    // this wont work as values is a collection and not an array

    // })
    // console.log( typeof values)
    // console.log(values)
    Array.from(values).forEach((element) => {
      console.log(element);
      // if (element.classList.contains("nav-link-active")) {
      element.classList.remove("nav-link-active");
      // }
    });
    event.target.classList.add("nav-link-active");
  };

  return (
    <>
      <div className="hamicon fixed top-9 right-10 md:hidden">
        <img
          src={`${
            hamIcon
              ? `${navcolor ? BarWhiteClose : BarBlackClose} `
              : `${navcolor ? BarWhite : BarBlack}`
          }`}
          alt="Hamburger Icon dark"
          onClick={() => toggleHam()}
          className={`h-[30px] w-[30px] hover:scale-110 hover:cursor-pointer`}
        />
      </div>
      {/* bg-[#070707]  */}
      <header
        className={`border-b-2 border-white header relative z-40 ${
          navcolor ? "bg-[#4d4e52ef]" : "bg-transparent "
        }  `}
      >
        {/* <div className="absolute -bottom-24 text-white text-3xl">
          <span className="bg-black rounded-r-4xl p-4 font-bold text-white uppercase text-4xl ml-[10%]">
            Build
          </span>
          <p>

          Your Dream Home
          </p>
        </div> */}
        <div className="logo-name ml-12">
          {/* <img src={logo} style = {{height: "50px",  width: "50px"}} alt="ganasuraksha party logo" className=" ml-10 pr-0" /> */}
          {/* <div className="party-name relative dark:text-white font-abril"> */}
          {/* <span className=" font-abril text-5xl font-bold border-1 text-white border-white">
              go
            </span>
            <span className="text-5xl font-bold border-1 text-white border-white font-abril">
              {" "}
              interior
            </span> */}
          <img
            style={{ height: "100%", width: "100px" }}
            src={logo}
            alt="go interior logo"
            className="go-logo "
          />
          {/* </div> */}
        </div>
        <div className="hidden md:flex self-center w-full">
          <nav className="mr-auto flex flex-1 items-center justify-center">
            <div onClick={(e) => onClickHandler(e)}>
              <Link className="page-nav-link nav-link-active" to="/">
                home
              </Link>
            </div>
            <div onClick={(e) => onClickHandler(e)}>
              <Link className="page-nav-link" to="gallery">
                product
              </Link>
            </div>

            <div onClick={(e) => onClickHandler(e)}>
              <Link className="page-nav-link" to="members">
                contact
              </Link>
            </div>
            <div onClick={(e) => onClickHandler(e)}>
              <Link className="page-nav-link" to="login">
                login
              </Link>
            </div>
          </nav>
        </div>

        {/*
       //////////////////
       MOBILE NAVBAR
       ////////////////////
        */}

        {/* <div className={` w-screen`}> */}
        {/* <div className="md:hidden"> */}
        {/* ${hamIcon?"hidden":"flex flex-col justify-center"} */}

        <nav
          className={`
      ${!hamIcon ? "bar-icon-close-navlinks" : " bar-icon-open-navlinks "} 
      page-nav-mobile
      flex flex-col items-center justify-evenly overflow-hidden`}
        >
          <div onClick={toggleHam} className={styles.navlink}>
            <Link to="/">home</Link>
          </div>
          <div onClick={toggleHam} className={styles.navlink}>
            <Link to="gallery">product</Link>
          </div>

          <div onClick={toggleHam} className={styles.navlink}>
            <Link to="members">contact</Link>
          </div>
          <div onClick={toggleHam} className={styles.navlink}>
            <Link to="about">login</Link>
          </div>
        </nav>
        {/* </div> */}

        <div className="btn-group">
          {/* <Button className="btn login">
              <Link to="login">Log In</Link>
            </Button> */}
          {/* <Button className="btn register hidden md:flex">
              <Link to="register">Register</Link>
            </Button> */}
        </div>
        {/* <div className="flex items-center">
            <DarkModeButton toggler={handleToggleDarkMode} />
          </div> */}
        <div className="bar-icon md:hidden">
          {/* <BarIcon
              onClick={() => toggleHam()}
              className={`${hamIcon ? "open" : ""}`}
            /> */}
        </div>
        {/* <ToggleSlider
      onToggle = {handleToggleDarkMode}
    //   barStyles={
    //     {
    //         backgroundColor:"red"
    //     }
    //   }
    barBackgroundColor = "#b0b0b0"
    barBackgroundColorActive='#141414'
      /> */}
      </header>

      {/* <Outlet /> */}
    </>
  );
};

export default Navbar;
