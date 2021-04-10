import {Request, Response} from 'express';

class UserController{
     //ingreso
	public signin(req:Request,res:Response){
		console.log(req.body);
        //res.send('Sign In!!!');
        res.render("partials/signinForm");
	}
    public login(req:Request,res:Response){
		console.log(req.body);
        //res.send({'Datos recibidos!!!':req.body});
        if(req.body.usuario=="Pepe"&&req.body.password=="123456")
			res.redirect("./home");
			//res.redirect("https://www.google.com");
		else//Falta enviar el resultado estilizado a traves de una vista
        	res.send({"Usuario no registrado Recibido":req.body});
	}
    //registro
	public signup(req:Request,res:Response){
		console.log(req.body);
        //res.send('Sign Up!!!');
		res.render("partials/signupForm");
	}

	public addUser(req:Request,res:Response){
		console.log(req.body);
        res.send('Datos recibidos!!!');
	}

    public home(req:Request,res:Response){
		console.log(req.body);
        res.send('Bienvenido!!!');
	}


}

const userController = new UserController(); 
export default userController;