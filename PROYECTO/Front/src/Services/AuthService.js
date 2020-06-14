import axios from "axios";

export class AuthService {

    token;

    estaLogueado = () => {
        if(this.token){
            
        }
    }

    guardarToken = (token) => {
        this.token = token;
        localStorage.setItem("token",token)
    }

    login = async (email,nickname,password) => {
        let cuerpo = {
            email,
            nickname,
            password
            //es lo mismo
            // email:email,
            // nickname:nickname,
            // password:password
        }

        let misHeaders = {
            "Content-Type":'application/json'
        }

        let rpta = await axios.post("http://localhost:2000/login",cuerpo,misHeaders);
        return rpta;
    }
}