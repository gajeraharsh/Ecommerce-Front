import React from "react";

function Button(props: any) {
  const { type = "outline", children } = props;

  let ButtonStyle = "";
  if (type == "outline") {
    ButtonStyle =
      "text-sm w-[18rem] py-3 text-center me-2 mb-2 border border-slate-900 hover:border-2 duration-1000";
  }

  if(type == 'fill'){
    ButtonStyle =
      "text-sm w-[18rem] py-3 text-center me-2 mb-2 border border-slate-900 hover:border-2 duration-1000 bg-black text-white";
  }

  return (
    <button
      type="button"
      className={ButtonStyle}
      style={{
        transition: "box-shadow .1s ease",
      }}
    >
      {...children}
    </button>
  );
}

export default Button;
