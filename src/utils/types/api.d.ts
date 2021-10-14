declare type User = {
  id: string;
  name: string;
  display_name?: string;
  email: string;
  starterAffiliate?: string;
  profilePhoto: string;
  badge: 'rhino' | 'wolf' | 'eagle' | 'lion';
  balance: number;
  balanceAntecipation?: number;
  balanceRelease?: number;
  state: string | null;
  country: string | null;
  city: string | null;
  zipcode: string | null;
  telephone: string | null;
  birthday: string;
  date_create: string;
  isChangePassword: boolean;
  affiliatedOnStarter?: number;
  occupation?: string | null;
  bio?: string | null;
  platforms: String[];
  team_id?: string | null;
};

declare interface ApiResponse {
  message?: string;
  codeError?: string;
  error?: boolean;
  data?: any;
  details?: any;
}

declare interface UserState {
  user: User | null;
  token: string | null;
  error: ApiResponse | null;
  isLoading: boolean;
  sendedRecoverPassword: boolean;
}
