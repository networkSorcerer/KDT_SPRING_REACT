import axios from "axios";
import React, { useEffect, useState } from "react";
// Import Swiper React components
//import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
//import "swiper/css";
//import "swiper/css/pagination";
//import "../../css/styles.css";
// import required modules
//import { Pagination } from "swiper/modules";

// const pagination = {
//   clickable: true,
//   renderBullet: (index, className) => {
//     return '<span class="' + className + '">' + (index + 1) + "</span>";
//   },
// };

const Home = () => {
  const [memberList, setMemberList] = useState([]);
  const KH_DOMAIN = "http://localhost:8111";

  const MemberList = async () => {
    try {
      const res = await axios.get(`${KH_DOMAIN}/home/list`);
      setMemberList(res.data.list);
    } catch (err) {
      console.log("데이터 불러오는데 실패하였습니다.", err);
    }
  };

  const detailMember = (email) => {
    window.location.href = `/home/list/${email}`;
  };

  useEffect(() => {
    MemberList();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>이름</th>
            <th>등록일</th>
            <th>수정</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {memberList.length > 0 ? (
            memberList.map((a) => (
              <tr key={a.email}>
                <td>{a.email}</td>
                <td>{a.name}</td>
                <td>{a.date}</td>
                <td>
                  <button onClick={() => detailMember(a.email)}>상세</button>
                </td>
                <td>
                  <button>삭제</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5}>데이터가 없습니다.</td>
            </tr>
          )}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>이름</th>
            <th>등록일</th>
            <th>수정</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {memberList.length > 0 ? (
            memberList.map((a) => (
              <tr key={a.email}>
                <td>{a.email}</td>
                <td>{a.name}</td>
                <td>{a.date}</td>
                <td>
                  <button onClick={() => detailMember(a.email)}>상세</button>
                </td>
                <td>
                  <button>삭제</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5}>데이터가 없습니다.</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}
    </>
  );
};

export default Home;
