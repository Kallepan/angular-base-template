export interface AuthObject {
  username: string;
  department: string;
  featureFlags: string[];

  accessToken?: string;
  refreshToken?: string;
  expiresAt?: Date;
}

export interface CookieAuthResponse {
  username: string;
  department: string;
  feature_flags: string[];
}

export interface TokenAuthResponse {
  username: string;
  department: string;
  feature_flags: string[];

  access_token: string;
  refresh_token: string;
  expires_at: string;
}
