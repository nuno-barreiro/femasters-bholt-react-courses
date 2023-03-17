import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const elemRef = useRef(null);

  if (!elemRef.current) {
    elemRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elemRef.current);

    // this is to mimic the behavior ComponentHasUnmount function of a class component
    return () => modalRoot.removeChild(elemRef.current);
  }, []);

  return createPortal(<div>{children}</div>, elemRef.current);
};

export default Modal;
