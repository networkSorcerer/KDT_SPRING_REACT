import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailMember = () => {
  const { email } = useParams(); // URL에서 email 파라미터 추출
  const [theMember, setTheMember] = useState([]);
  const KH_DOMAIN = "http://localhost:8111";

  const TheMember = (email) => {
    axios.get(`${KH_DOMAIN}/home/list/${email}`).then((res) => {
      setTheMember(res.data.detail);
    });
  };

  const Update = () => {
    const param = theMember[0];
    axios.post(`${KH_DOMAIN}/home/update`, param);
  };
  useEffect(() => {
    TheMember(email);
  }, [email]);

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>이름</td>
            <td>비밀번호</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {theMember.length > 0 ? (
            theMember?.map((a) => (
              <tr key={a.email}>
                <td>
                  <input type="text" value={a.email} disabled />
                </td>
                <td>
                  <input
                    type="text"
                    value={a.name}
                    onChange={(e) =>
                      setTheMember((prev) =>
                        prev.map((item) =>
                          item.email === a.email
                            ? { ...item, name: e.target.value }
                            : item
                        )
                      )
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={a.password}
                    onChange={(e) =>
                      setTheMember((prev) =>
                        prev.map((item) =>
                          item.email === a.email
                            ? { ...item, password: e.target.value }
                            : item
                        )
                      )
                    }
                  />
                </td>
                <td>
                  <button onClick={Update}>수정</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}>데이터가 없습니다.</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default DetailMember;
