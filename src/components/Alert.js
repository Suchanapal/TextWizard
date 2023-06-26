import React from "react";

const capitalize = (str)=>{
   return str.charAt(0).toUpperCase() + str.slice(1);

} 

export default function Alert(props) {
  return (
    props.alert && <div
      className={`alert alert-${props.alert.type} alert-dismissible fade show`}
      role="alert"
    >
      <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
      {/* evaluates props.alert ann returns further if not null  */}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  )
}
