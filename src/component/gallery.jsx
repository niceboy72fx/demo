export default function Gallery() {
  return (
    <div className="gallery flex justify-center item-center   flex-col p-10 rounded-lg shadow-xl ">
      <div className="gallery-banner text-3xl font-bold uppercase p-3">
        Packer pen Gallery
      </div>
      <div className="gallery-list flex justify-center items-center flex-row relative">
        <div>
          <img
            className="  rounded-lg shadow-xl  m-4"
            src={require("../img/image/img1.png")}
          />
          <img
            className="rounded-lg shadow-xl m-4"
            src={require("../img/image/img4.png")}
          />
        </div>
        <div className="m-2">
          <img
            className=" rounded-lg shadow-xl m-4 "
            src={require("../img/image/img2.png")}
          />
          <img
            className=" rounded-lg shadow-xl m-4"
            src={require("../img/image/img3.png")}
          />{" "}
        </div>
        <div className="">
          <img
            className="rounded-lg shadow-xl m-4 "
            src={require("../img/image/img5.png")}
          />
          <img
            className="rounded-lg shadow-xl m-4 "
            src={require("../img/image/img6.png")}
          />
          <img
            className=" rounded-lg shadow-xl col-start-3 m-4 "
            src={require("../img/image/img7.png")}
          />
        </div>
      </div>
      {/* <div className="grid columns-3  gap-2">
        <img
          className="  rounded-lg shadow-xl  col-start-1 col-end-2 row-start-1 row-end-2 "
          src={require("../img/image/img1.png")}
        />
        <img
          className=" rounded-lg shadow-xl  "
          src={require("../img/image/img2.png")}
        />
        <img
          className="rounded-lg shadow-xl "
          src={require("../img/image/img5.png")}
        />
        <img
          className="rounded-lg shadow-xl "
          src={require("../img/image/img4.png")}
        />
        <img
          className=" rounded-lg shadow-xl "
          src={require("../img/image/img3.png")}
        />{" "}
        <img
          className="rounded-lg shadow-xl "
          src={require("../img/image/img6.png")}
        />
        <img
          className=" rounded-lg shadow-xl col-start-3  "
          src={require("../img/image/img7.png")}
        />
      </div> */}
    </div>
  );
}
