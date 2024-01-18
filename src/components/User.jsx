"use client";
import { useState } from "react";
//import "./User.css"; // 导入 CSS 文件
import Image from "next/image";
import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai"; // 导入加号图标
import { FaRegAddressCard } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import ChartComponent from "../components/UserCharts.jsx";
import Logo from "../components/Logo";

export default function UserAvatar() {
  const [avatar, setAvatar] = useState(
    "data:image/jpeg;base64,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"
  );
  const [photo, setAvatarPhoto] = useState(<FaCamera className="camera" />);

  const userInfo = {
    id: "1",
    name: "John Doe",
    email: "johndoe@example.com",
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setAvatar(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handlePhoto = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setAvatarPhoto(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const confirmLogout = () => {
    const confirmation = window.confirm("Are you sure you want to logout?");
    if (confirmation) {
      // 执行退出操作，例如跳转到退出页面或执行退出逻辑
      alert("You have been logged out.");
    } else {
      alert("Logout canceled.");
    }
  };

  const goToPage = () => {
    // 使用window.location.href属性或者window.location.assign方法来跳转到"http://localhost:3001/"
    window.location.href = "http://localhost:3001/";
  };
  const goToPage2 = () => {
    // 使用window.location.href属性或者window.location.assign方法来跳转到"http://localhost:3001/"
    window.location.href = "E:/大三上/NHMS/calendar.html";
  };

  return (
    <div className="body grid grid-rows-1 grid-cols-4 gap-3 p-4">
      <SideNavBar></SideNavBar>
      <div className="grid grid-cols-1 bg-white p-3 gap-1 rounded-md grid-rows-5 col-span-3 overflow-hidden">
        <MiniNavBar
          avatar={avatar}
          handleAvatarChange={handleAvatarChange}
          confirmLogout={confirmLogout}
        ></MiniNavBar>
        <CalenderHealthInfo
          userInfo={userInfo}
          goToPage={goToPage}
        ></CalenderHealthInfo>

        <CreateHealthRecordForm></CreateHealthRecordForm>

        <Photo photo={photo} handlePhoto={handlePhoto}></Photo>
        <Log></Log>
        <ChartComponent />
      </div>
    </div>
  );
}

function CalenderHealthInfo({ userInfo, goToPage }) {
  return (
    <div className="calendar-health shadow-xl  flex justify-center items-center gap-4">
      <div className="Health-info bg-white rounded-md grid place-items-center h-[70%] px-5 py-2 shadow-xl">
        <p>Healthy information</p>
        <p>Name: {userInfo.name}</p>
        <p>Email: {userInfo.email}</p>
        <div className="expand-user-info" onClick={goToPage}>
          <FaRegAddressCard className="info-icon" />
        </div>
      </div>
      <div className="Calendar bg-white rounded-md grid place-items-center h-[70%] px-5 py-2 shadow-xl">
        <Link
          className="calendar-text"
          href="file:///E:/%E5%A4%A7%E4%B8%89%E4%B8%8A/NHMS/calender.html"
        >
          Calendar
        </Link>
      </div>
    </div>
  );
}

function MiniNavBar({ avatar, handleAvatarChange, confirmLogout }) {
  const userInfo = {
    id: "user123js3",
    name: "John, Smith",
    email: "johnSmith@gmail.com",
  };
  return (
    <div className="shadow-xl grid grid-cols-2 gap-3 justify-center items-center px-6 py-3">
      <div className="user-info bg-white p-5 flex just-center items-center gap-4">
        <div className="user-avatar relative grid justify-center p-1 min-h-fit rounded-lg">
          <Image
            className="rounded-[50px] shadow-xl "
            width={100}
            height={100}
            id="avatar"
            src={avatar}
            alt="user-avatar"
            onClick={() => document.getElementById("avatar-upload").click()}
          />
          <input
            className="absolute opacity-0"
            type="file"
            id="avatar-upload"
            accept="image/*"
            onChange={handleAvatarChange}
          />
        </div>
        <div>
          <div className="grid grid-cols-3">
            <span id="user-name" className="col-span-2">
              {userInfo.name}
            </span>
          </div>
          <div className="grid grid-cols-3">
            <span id="user-email" className="col-span-2">
              {userInfo.email}
            </span>
          </div>
          <div className="grid grid-cols-3">
            <span id="user-id" className="col-span-2">
              {userInfo.id}
            </span>
          </div>
        </div>
      </div>
      <div className="grid place-items-center ">
        <button className="tile">
          <img
            id="logout"
            src="/icons/logout.png"
            alt="user-logout"
            width={20}
            height={20}
            onClick={confirmLogout}
          />
          Logout
        </button>
      </div>
    </div>
  );
}

function SideNavBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = () => {
    // 在这里执行搜索操作，例如跳转到搜索结果页面或显示搜索结果
    console.log("开始搜索：" + searchTerm);
  };
  return (
    <div className="rounded-lg shadow-xl sidebar flex flex-col justify-start items-center p-4">
      {/* 添加搜索框 */}

      {/* 你的导航链接 */}
      <div className="sticky top-1 bg-white grid grid-cols-1 rounded-lg gap-2 h-screen">
        <Logo></Logo>
        <Link
          href="/blog"
          className="tile text-lg grid place-content-center text-center"
        >
          Blogs
        </Link>
        <Link
          href="#section2"
          className="tile text-lg grid place-content-center text-center"
        >
          Plan
        </Link>
        <Link
          href="#section3"
          className="tile text-lg grid place-content-center text-center"
        >
          Data Analytics
        </Link>
        <Link
          href="#section1"
          className="tile text-lg grid place-content-center text-center"
        >
          Health Record Form
        </Link>
        <Link
          href="file:///E:/%E5%A4%A7%E4%B8%89%E4%B8%8A/NHMS/calender.html"
          className="tile text-lg grid place-content-center text-center"
        >
          Calender Events
        </Link>
        <Link
          href="#section3"
          className="tile text-lg grid place-content-center text-center"
        >
          Personal information
        </Link>
        <Link
          href="#section1"
          className="tile text-lg grid place-content-center text-center"
        >
          Settings
        </Link>
      </div>
    </div>
  );
}

function Photo({ photo, handlePhoto }) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May"];
  return (
    <div className="shadow-xl photo flex justify-center items-center gap-4">
      <div className="relative photo-bar bg-white rounded-md grid place-items-center h-[70%] px-7 py-2 shadow-xl">
        <p>initial</p>
        <FaCamera className="camera text-center" />
        {/* <img
          className="absolute opacity-1"
          id="uploda-photo"
          src={photo || "/icons/camera.png"}
          type="file"
          accept="image/*"
          onChange={handlePhoto}
        /> */}
      </div>
      {months.map((item, idx) => (
        <div
          key={idx}
          className="photo-bar bg-white rounded-md grid place-items-center h-[70%] px-7 py-2 shadow-xl"
        >
          <p>{item}</p>
          <div>
            <FaCamera className="camera" />
          </div>
        </div>
      ))}
    </div>
  );
}

function Log() {
  return (
    <div className="shadow-xl log flex justify-center items-center gap-4">
      <div className="log-bar bg-white rounded-md grid place-items-center h-[70%] px-5 py-2 shadow-xl">
        <AiOutlinePlus className="add2"></AiOutlinePlus>
        <p>log Food</p>
      </div>
      <div className="log-bar  bg-white rounded-md grid place-items-center h-[70%] px-5 py-2 shadow-xl">
        <AiOutlinePlus className="add2"></AiOutlinePlus>
        <p>log Water</p>
      </div>
    </div>
  );
}

function CreateHealthRecordForm() {
  const items = [
    { text: "Create events" },
    { text: "Create Nutrition Plan" },
    { text: "Create Health Record Form" },
    { text: "Create workout" },
  ];

  return (
    <div className="Creat shadow-xl  flex justify-center items-center gap-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="Creat-back bg-white rounded-md grid place-items-center h-[70%] px-5 py-2 shadow-xl"
        >
          <div className="Creat-text">{item.text}</div>
          <AiOutlinePlus className="add1" /> {/* 使用加号图标 */}
        </div>
      ))}
    </div>
  );
}
