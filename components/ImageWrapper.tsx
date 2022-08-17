import React from "react";

const ImageWrapper = (props : any) => {
  return (
    <div className={`flex items-center gap-0.5 ${props.reverse ? 'flex-row-reverse' : ''} `}>
      <div >
        <img src={`/images/${props.reverse ? props.shirts : props.mensCollection}`} alt="" />
      </div>
      <div className="flex items-center gap-0.5 ">
        <div className="w-1/2">
          <img src={`/images/${props.reverse ? props.discount : props.delivery}`} alt="" />
        </div>
        <div className="w-1/2">
          <img src={`/images/${props.reverse ? props.customMug :props.mug}`} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ImageWrapper;
