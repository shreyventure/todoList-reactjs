import React from "react";

const Loading = () => {
  return (
    <div className="spinner text-center pt-5">
      <img
        style={{ width: "100px" }}
        src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif"
        alt="Loading"
      />
    </div>
  );
};

export default Loading;
