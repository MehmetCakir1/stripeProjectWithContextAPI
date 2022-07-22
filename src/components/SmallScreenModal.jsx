import { DataContext } from "../context";
import { useContext } from "react";
import { FaTimes } from 'react-icons/fa'

const SmallScreenModal = () => {
  const { menu, setIsVisible,setShow,show } = useContext(DataContext);
  return (
    <div className={`${show ? "smallScreenModal" : "disappear"}`}>
      <div className="smallScreenMenu">
        <div className="fatimes"><button onClick={()=>setShow(false)}><FaTimes/></button></div>
        {menu.map((item) => {
          const { page, links } = item;
          return (
            <div className="smallMenuContainer">
              <div className="smallMenu">
                <h2>{page}</h2>
                <div>
                  {links.map((item) => {
                    const { label, url, icon } = item;
                    return (
                      <div className="linkDiv">
                        <a href={url}>
                          <p>{icon}</p>
                          <p>{label}</p>
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SmallScreenModal;
