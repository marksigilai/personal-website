class Auth{

    constructor(){
        this.authenticated = false
        this.password = ""
    }

    login(){
        console.log("Login --- " + this.password)
        //program should wait until authenticate is done
        return Promise.all([this.authenticate()])
    }

    setPassword(password){
        console.log("Setpassword --- " + this.password)
        this.password = password
    } 

    async authenticate(){
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({password : this.password})
        };
        try {
            const response = await fetch('http://localhost:3002/login', requestOptions)
            const data = await response.json()
            if (data.outcome === 'match') {
                this.authenticated = true
            }
            else if (data.outcome === 'no match') {
                this.authenticated = false
            }
        }
        catch (error) {
            return (console.log("Error with the authentication : " + error))
        }
    }


    logout(){
        console.log("Logging out...")
        this.authenticated = false
    }

    isAuthenticated(){
        return this.authenticated
    }
}

export default new Auth();