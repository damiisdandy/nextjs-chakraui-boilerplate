declare module "*.css";

interface Store {
  id: number;
  is_authenticated: boolean;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
}

type ActionTypes = "LOGIN" | "LOGOUT";

interface Action {
  type: ActionTypes;
  payload?: any;
}
