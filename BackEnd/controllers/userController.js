const userService = require("../services/userService");
let jwt = require("jsonwebtoken");

class User {

  getEvenement = async(req, res) => {

    const value = await userService.getEvenement(req, res);
    
    res.status(200).json(value);
  };

  getReservationById = async(req, res) => {
    const value = await userService.getReservationById(req, res);
    
    res.status(200).json(value);
  };


    
  update = async (req,res) =>{
   
    const value = await userService.update(req, res);
  
    if(value){
      res.status(200).json({ value });
    }
  }

  login = async (req, res) => {
   
    //console.log('REEEEEQ',req.body);
  
    const value = await userService.login(req, res);
   if(!value){
    res.status(200).json(value);
    
   } 
    else{
     
      let token = jwt.sign(
        { id: value.idAdherent },
        process.env.SECRET_KEY || "default-secret-key",
        {  expiresIn: '1h' }
        
      );  
      res.status(200).json({ token });
    }
  
  };

  getUser = async(req, res) => {
    const value = await userService.getUser(req, res);
    
    res.status(200).json(value);
  }; 

  deleteReservation = async(req, res) => {

    const value = await userService.deleteReservation(req, res);
    
    res.status(200).json(value);
  };

  inscription = async (req, res) => {
    const value = await userService.inscription(req, res);

    if (value) {
      res.status(200).json(true);
    }
    else{
      res.status(200).json(false)
    }
  };

  reservation = async (req, res) => {
    const value = await userService.reservation(req, res);

    if (value) {
      res.status(200).json(true);
    }
    else{
      res.status(200).json(false)
    }
  };

  inscriptionEnfant = async (req, res) => {
 
    const value = await userService.inscriptionEnfant(req, res);

    if (value) {
      res.status(200).json(true);
    }
  };

  getEnfant = async(req, res) => {
    const value = await userService.getEnfant(req, res);
    
    res.status(200).json(value);
  };
}
module.exports = User;
