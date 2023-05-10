const pool = require("../config/config");


module.exports.update = async (req, res) => {
  console.log("UPDAAATE", req);
  try {
    return pool
      .query(
        `UPDATE ADHERENT SET ${req.body.colonne} = '${req.body.valeur}' WHERE idAdherent = ${req.body.Userid}`
      )
      .then((res) => { 
        return true
      })
      .catch((error) => {
        console.log("ERROR in userService -> login #789 : ", error);
       
      });
  } catch (error) {
    console.log("ERROR in userService -> login #456 : ", error);
    console.error(error);
  }
}

module.exports.deleteReservation = async (req, res) => {
  console.log("REQ USER ID", req.params);
  try {
    return pool
      .query(
        `DELETE FROM Reserver WHERE idAdherent = '${req.params.userId}' AND idEvenement = '${req.params.reservationId}'`
      )
      .then((res) => { 
        return true
      })
      .catch((error) => {
        console.log("ERROR in userService -> login #789 : ", error);
       
      });
  } catch (error) {
    console.log("ERROR in userService -> login #456 : ", error);
    console.error(error);
  }
}

module.exports.login = async (req, res) => {
  try {
   
    return pool
      .query(
        `SELECT * FROM ADHERENT WHERE mail = '${req.body.email}' AND pswd = '${req.body.password}'`
      )
      .then((res) => {
      
         if(res.recordset[0]  == null) {
          return false
         }
         else{
       
        return res.recordset[0];}
      })
      .catch((error) => {
        console.log("ERROR in userService -> login #789 : ", error);
        return false;
      });
  } catch (error) {
    console.log("ERROR in userService -> login #456 : ", error);
    console.error(error);
  }
};

const jwt = require("jsonwebtoken");


 
module.exports.inscription = (req, res) => { // A FINIR
  
  try {
    return pool
    
      .query(`SELECT * FROM ADHERENT WHERE mail = '${req.body.email}'`)
      .then((selectResult) => {
 //console.log("REPONSEE: ", req.body);
        if (selectResult  == null) {
          // L'utilisateur existe déjà, retourner false
          return false;
        } 
        else {
          // L'utilisateur n'existe pas encore, effectuer l'insertion
          return pool.query(
            `INSERT INTO ADHERENT (nom, prenom, mail, dateInscription, pswd,idTarif,idCategorie, photo)
             VALUES ('${req.body.nom}', '${req.body.prenom}', '${req.body.email}',
                     '${req.body.date_inscription}', '${req.body.password}','1','1','https://meetanentrepreneur.lu/wp-content/uploads/2019/08/profil-linkedin-1-300x300.jpg')`
          ).then((insertResult) => {
            return true;
          }).catch((insertError) => {
            console.log("ERROR in userService -> inscription (insert) : ", insertError);
            return false;
          });
        }
      })
      .catch((selectError) => {
        console.log("ERROR in userService -> inscription (select) : ", selectError);
        return false;
      });
  } catch (error) {
    console.log("ERROR in userService -> inscription : ", error);
    return false;
  }
};



// module.exports.inscriptionEnfant = (req, res) => {
//   try {
    
//     console.log("AJOUTER");
//     return pool
//       .query(
//         `INSERT INTO enfant (enf_nom, enf_prenom, enf_sexe, enf_date_naissance, enf_use_id ) 
//           VALUES ('${req.body.enf_nom}','${req.body.enf_prenom}','${req.body.enf_sexe}','${req.body.enf_date_naissance}','${req.body.enf_use_id}')`
//       )
//       .then((res) => {
//         return true;
//       })
//       .catch((error) => {
//         console.log("ERROR in userService -> inscriptionEnfant : #789 ", error);
//         return false;
//       });
//   } catch (error) {
//     console.log("ERROR in userService -> inscriptionEnfant : #456 ", error);
//   }
// };

module.exports.reservation = (req, res) => {
  try {
    
    console.log("AJOUTER Reservation");
    return pool
      .query(
        `INSERT INTO Reserver (idEvenement, idAdherent ) 
          VALUES ('${req.body.idEvenement}','${req.body.idAdherent}')`
      )
      .then((res) => {
        return true;
      })
      .catch((error) => {
        console.log("ERROR in userService -> reservation : #789 ", error);
        return false;
      });
  } catch (error) {
    console.log("ERROR in userService -> reservation : #456 ", error);
  }
};



module.exports.getUser = (req, res) => {
  
  const { decodedJwtToken } = req;


  return   pool.query(`SELECT idAdherent,nom,prenom,mail,tel,genre,photo,dateInscription FROM ADHERENT WHERE  idAdherent = '${decodedJwtToken.id}'`) 
  .then((res) => {
  
     return res.recordset
  })
  .catch((error) => {
    console.log("ERROR in userService -> getUser : #789 ", error);
    return false;
  });

}

module.exports.getEvenement = (req, res) => {
 
  const userId = req.params.userId;
  console.log(`ID ADHERENT: ${userId}`);
  
  
  return   pool.query(`SELECT EVENEMENT.* FROM EVENEMENT WHERE EVENEMENT.idEvenement NOT IN  (SELECT Reserver.idEvenement  FROM Reserver, EVENEMENT  WHERE idAdherent = '${userId}')  `) 
  .then((res) => {
   // console.error("--Evenement--", res.recordset);
     return res.recordset
  })
  .catch((error) => {
    console.log("ERROR in userService -> getEvenement : #789 ", error);
    return false;
  });

}

module.exports.getReservationById = (req, res) => {
 
  const userId = req.params.userId;
  console.log(`ID ADHERENT: ${userId}`);
  
  
  return   pool.query(`SELECT EVENEMENT.* FROM EVENEMENT WHERE EVENEMENT.idEvenement IN  (SELECT Reserver.idEvenement  FROM Reserver, EVENEMENT  WHERE idAdherent = '${userId}') `) 
  .then((res) => {
 console.error("--Evenement--", res.recordset);
     return res.recordset
  })
  .catch((error) => {
    console.log("ERROR in userService -> getReservationById : #789 ", error);
    return false;
  });

}

// module.exports.getEnfant = (req, res) => {
  
//   const { decodedJwtToken } = req;
 
//   return   pool.query(`SELECT enfant.* FROM  enfant Where ${decodedJwtToken.id} = enfant.enf_use_id`) 
//   .then((res) => {
  
//      return res [0]
//   })
//   .catch((error) => {
//     console.log("ERROR in userService -> inscriptionEnfant : #789 ", error);
//     return false;
//   });

// }
