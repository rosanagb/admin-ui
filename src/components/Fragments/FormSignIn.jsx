import React from "react";

function FormSignIn() {
  return (
    <>
      {/* form start */}
      <div className="mt-16">
        <form action="">
          <div className="mb-6">{/* input */}</div>
          <div className="mb-6">{/* input */}</div>
          <div className="mb-3">{/* check box */}</div>
          {/* button login */}
        </form>
      </div>
      {/* form end */}
      {/* teks start */}
      <div className="my-9 px-7 flex flex-col justify-center items-center text-xs text-gray-03">
        <div className="border border-gray-05 w-full"></div>
        <div className="px-2 bg-special-mainBg absolute">or sign in with</div>
      </div>
      {/* teks end */}
      {/* sign in with google start */}
      <div className="mb-8">{/* button google */}</div>
      {/* sign in with google end */}
      {/* link start */}
      <div className="flex justify-center">
        <a className="text-primary text-sm font-bold">Create an account</a>
      </div>
      {/* link end */}
    </>
  );
}

export default FormSignIn;
