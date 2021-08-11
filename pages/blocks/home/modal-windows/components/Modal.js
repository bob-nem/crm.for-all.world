import React, { useImperativeHandle, forwardRef, useRef } from "react";
import Test from '../implementation-work-group';

const modal = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "#00000052",
  zIndex: 4
};

const content = {
  display: "inline-flex",
  flexDirection: "row",
  flexWrap: "wrap",
  textAlign: "justify",
};

const Modal = (props, ref) => {
  const _content = useRef(null);
  useImperativeHandle(ref, () => ({ _content }));

  return (
    <div style={modal} onClick={props.onClick}>
      <div ref={_content} style={content}>
        <Test />
      </div>
    </div>
  );
};

export default forwardRef(Modal);
