import axios from "axios";
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
    };
    return await axios.post(KH_DOMAIN + `/auth/signup`, member);
  },
};

export default AxiosApi;
