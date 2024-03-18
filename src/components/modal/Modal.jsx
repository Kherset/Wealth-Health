import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import "./modal.css";

export default function Modal({
  onClose,
  modalAnimationStart,
  modalAnimationEnd,
}) {
  const [animation, setAnimation] = useState("");

  const onClose_ = () => {
    setAnimation(`modal ${modalAnimationEnd}`);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  useEffect(() => {
    setAnimation(`modal ${modalAnimationStart}`);
  }, [modalAnimationStart]);

  return (
    <div className="background-modal">
      <div className={animation}>
        <div className="modal-top">
          <FontAwesomeIcon className="modal-icon" icon={faCircleCheck} />
        </div>
        <div className="modal-bottom">
          <p className="modal-text">Employee successfully created.</p>
          <button className="close" onClick={onClose_}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
