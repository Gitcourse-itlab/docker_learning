import { goods, } from "./rbac-consts";

const rules = {
  ROLE_ADMIN: {
    static: [
      goods.ADMIN
    ],
    dynamic: {}
  },
  ROLE_CLIENT: {
    static: [
      goods.CLIENT
    ],
    dynamic: {}
  }
};

export default rules;
