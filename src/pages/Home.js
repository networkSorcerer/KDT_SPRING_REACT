import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AxiosApi from "../api/AxiosApi";

const Home1 = () => {
  const [members, setMembers] = useState("");
  useEffect(() => {
    const getMembers = async () => {
      try {
        const rsp = await AxiosApi.memberList();
        console.log(rsp.data);
        setMembers(rsp.data);
      } catch (e) {
        alert("서버가 응답하지 않습니다.");
      }
    };
    getMembers();
  }, []);
  return (
    <>
      <h1>회원 정보 조회</h1>
      <table>
        <tr>
          <th>이름</th>
          <th>이메일</th>
        </tr>
        {members &&
          members.localeCompare((member) => (
            <tr key={member.email}>
              <td>{member.name}</td>
              <td>{member.email}</td>
              <td>{member.date}</td>
            </tr>
          ))}
      </table>
    </>
  );
};

export default Home1;
