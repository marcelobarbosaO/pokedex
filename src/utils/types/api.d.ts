declare type User = {
  name: string;
  email: string;
};

declare interface ApiResponse {
  message?: string;
  codeError?: string;
  error?: string;
  data?: any;
  details?: any;
}

declare interface UserState {
  user: User | null;
  token: string | null;
  error: ApiResponse | null;
  isLoading: boolean;
}
