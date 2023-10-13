import { environment } from "environments/environment";

export class constants {
    public static APIS = {
        AUTH: environment.authUrl,
        BACKEND_ONE: environment.apiUrl,
    };

    public static JWT = {
        // One hour time in minutes, seconds and miliseconds
        EXPIRY_TIME: 720 * 60 * 1000,
        ACCESS_STORAGE: 'access_token',
        EXPIRY_TIME_STORAGE: 'expires_at',
        USERNAME_STORAGE: 'username',


        // Check if the user is logged in
        CHECK_LOGIN_TIME: 1000 * 60 * 15, // 5 minutes
        EXPIRE_WARN_TIME: 1000 * 60 * 30, // 5 minutes
    }


    public static TITLE = 'Angular Base Template';
    public static VERSION = '0.1.0';
}