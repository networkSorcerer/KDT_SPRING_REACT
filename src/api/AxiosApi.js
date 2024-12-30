import axios from "axios";
import AxiosInstance from "./AxiosInstance";
const KH_DOMAIN = "http://localhost:8111";

const AxiosApi = {
  login: async (email, pw) => {
    console.log("이메일 : ", email);
    console.log("패스워드 : ", pw);
    const login = {
      email: email,
      pwd: pw,
    };
    return await axios.post(KH_DOMAIN + "/auth/login", login);
  },
  regCheck: async (email) => {
    return await axios.get(KH_DOMAIN + `/auth/exists/${email}`);
  },
  signup: async (email, pwd, name) => {
    const member = {
      email: email,
      pwd: pwd,
      name: name,
      imgPath: "",
    };
    return await axios.post(KH_DOMAIN + `/auth/signup`, member);
  },
  // 전체 회원 조회
  memberList: async () => {
    //return await axios.get(KH_DOMAIN + "/member/list");
    return await AxiosInstance.get("/member/list");
  },
  //개별 회원 조회
  memberInfo: async (email) => {
    //return await axios.get(KH_DOMAIN + `/member/${email}`);
    return await AxiosInstance.get(`/member/${email}`);
  },
  // 채팅방 목록 가져오기
  chatList: async () => {
    //return await axios.get(KH_DOMAIN + "/chat/list");
    return await AxiosInstance.get("/chat/list");
  },
  // 채팅방 생성하기
  chatCreate: async (email, name) => {
    const chat = {
      email: email,
      name: name,
    };
    //return await axios.post(KH_DOMAIN + "/chat/new", chat);
    return await AxiosInstance.post("/chat/new", chat);
  },
  chatDetail: async (roomId) => {
    //return await axios.get(KH_DOMAIN + `/chat/room/${roomId}`);
    return await AxiosInstance.get(`/chat/room/${roomId}`);
  },
};

export default AxiosApi;
