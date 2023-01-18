import { useState } from "react";
import data from "../json/data.json";
export default function Slider() {
  const [changeTab, setChangeTab] = useState(0);
  const { title } = data[changeTab];
  return (
    <div className="slider flex flex-col justify-center item-center ">
      <div className="slider-list flex justify-center items-center  flex-row">
        {data.map((item, key) => {
          const { name, img } = item;
          return (
            <div
              key={key}
              className=" shadow-xl w-56 p-5 h-32 m-7 flex flex-col items-center justify-center rounded-md "
              onClick={() => setChangeTab(key)}
            >
              <img
                className="list-image w-9 m-4 mb-3"
                src={require("../img/icon/" + img)}
                alt={name}
              />
              <div className="list-name font-bold text-xl">{name}</div>
            </div>
          );
        })}
      </div>
      <div className="shadow-2xl" style={{ height: "33pc" }}>
        {title.length == 0 ? (
          <div className="slider-page flex items-center justify-center h-full  rounded-md">
            <div className="page-title font-bold text-2xl text-center">
              {" "}
              No data available
            </div>
          </div>
        ) : (
          <div className="slider-page bg-white shadow-2xl flex flex-row p-10 rounded-md">
            <div className="page-title p-3">
              <div className="title-description w-64 text-left p-2">
                {title.content}
              </div>
              <div className="title-link text-left ml-4 mb-4 p-2 font-bold uppercase">
                {title?.link?.map((item, key) => {
                  return (
                    <li key={key} className="mt-4 mb-4">
                      {item.name}
                    </li>
                  );
                })}
              </div>
              <button className="title-button uppercase flex ml-4  items-center p-4 pl-6 pr-6 rounded-md font-extrabold text-white bg-yellow-500 shadow-md rounded-md">
                {title.buttonName}
              </button>
            </div>
            <div className="page-list">
              <div className="list-banner flex flex-row w-full h-20 p-5 items-center shadow-lg border-">
                <div className="banner-name text-2xl p-4 font-bold text-yellow-500 ">
                  {title.banner.text}
                </div>
                <div className="banner-title text-xl p-4">
                  {title.banner.title}
                </div>
              </div>
              <div className="list-pen flex justify-center items-center w-full ">
                {title.listPen.map((item, key) => {
                  return (
                    <div
                      key={key}
                      className="pen-type flex flex-col items-center justify-center p-8 ml-2 mr-2 shadow-2xl rounded-md"
                    >
                      <img
                        className="pen-img w-44 h-60 mb-4"
                        src={require("../img/pencil/" + item.img)}
                        alt={item.name}
                      />
                      <div className="pen-name bold text-sm mb-2">
                        {item.name}
                      </div>
                      <div className="pen-price flex">
                        <p className="price-correct font-bold mr-2 ">
                          {item.price}
                        </p>
                        <p className="price-wrong ml-2">{item.wrongPrice}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
