import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [memberList, setMemberList] = useState([]);
  const KH_DOMAIN = "http://localhost:8111";
  const MemberList = () => {
    axios
      .get(`${KH_DOMAIN}/home/list`)
      .then((res) => {
        setMemberList(res.data.list);
      })
      .catch((err) => {
        console.log("데이터 불러오는데 실패하였습니다.", err);
      });
  };

  const detailMember = (email) => {
    window.location.href = `/home/list/${email}`; // 템플릿 리터럴을 사용하여 email을 URL에 포함
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
            memberList?.map((a) => (
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
              <td colSpan={5}> 데이터가 없습니다.</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Home;
