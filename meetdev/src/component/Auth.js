class Auth {
    constructor(){
        this.authenticated = false
        this.adminAuth = false
    }
    login(cb) {
        this.authenticated = true
        cb()
    }
    loginAdmin(cb) {
        this.adminAuth = true
        cb()
    }
    isAuthenticated() {
        return this.authenticated
    }
    isAdmin() {
        return this.adminAuth
    }

}

export default new Auth()

