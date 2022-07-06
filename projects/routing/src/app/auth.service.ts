export class AuthService {
    loggedIn = false;

    isAuthenticated() {
        const promise = new Promise(
            (resolve,reject) => {
                setTimeout(() => {
                     resolve(this.loggedIn)
                },800)
            }
        );
        return promise as Promise<boolean>
    }

    login() {
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
    }
}