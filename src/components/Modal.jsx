import { DataContext } from "../context";
import { useContext } from "react";

const Modal = () => {
  const { subMenu, title, setIsVisible } = useContext(DataContext);
  return (
    <div className="modal" onMouseOver={()=>setIsVisible(true)} onMouseOut={()=>setIsVisible(false)}>
      <h3 className="modal-title">{title}</h3>
      <ul className="modal-links">
        {subMenu.map((item) => {
          const { label, icon, url } = item;
          return (
            <li>
              <a href={url}>
               <p className="icon">{icon}</p> 
               <p className="label">{label}</p> 
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Modal;
