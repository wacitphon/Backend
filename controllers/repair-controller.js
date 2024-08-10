const db = require('../models/db')





exports.getByUser = async (req, res, next) => {
  try {
    const todos = await db.repair.findMany({
      where: { userId: req.user.id },
      include: {
        user: {
          select: { username: true },
        },
         userdata:{
          select: {
            appointment: true,
            usernamedata: true
          }
        },    
        device: {
          select: { type: true },
        },
      },
    });
    res.json({ todos });
  } catch (err) {
    next(err);
  }
};


exports.getUser = async (req, res, next) => {
  try {
    const count = await db.user.count({
      where: {
        role: 'USER'
      }
    });
    res.json({ count });
  } catch (err) {
    next(err);
  }
};


exports.getTe = async (req, res, next) => {
  try {
    const countTe = await db.user.count({
      where: {
        role: 'TECNICIANC'
      }
    });
    res.json({ countTe });
  } catch (err) {
    next(err);
  }
};


exports.getRepairAll = async (req, res, next) => {
  try {
    const countre = await db.repair.count(); 
    res.json({ countre });
  } catch (err) {
    next(err); 
  }
};

exports.getAdmin = async (req, res, next) => {
  try {
    const countAd = await db.user.count({
      where: {
        role: 'ADMIN'
      }
    });
    res.json({ countAd });
  } catch (err) {
    next(err);
  }
};

exports.createDevice = async (req, res, next) => {

  const data = req.body;
  try {
    const device = await db.device.create({
      data: {
    
        userId: req.user.id,
        Equipmentnumber : data.Equipmentnumber,
        type: data.type,
        brand: data.brand,
        
      }
    });

    // เมื่อสร้างข้อมูลเสร็จสิ้น ส่งข้อมูลเป็น JSON กลับไป
    res.json({ msg: 'Device created successfully', result: device });
  } catch (err) {
    next(err); 
  }
}

exports.createUserData = async (req, res, next) => {
  const data = req.body;
  try {
    const userData = await db.userData.create({
      data: {
        userId: req.user.id,
        usernamedata: data. usernamedata,
        surname: data.surname,
        phone: data.phone,
        appointment: data.appointment
      }
    });


    res.json({ msg: 'datauser create successfully', result: userData});
  } catch (err) {
  
  }
}





exports.createRepair = async (req, res, next) => {
  const data = req.body;
  
  try {
    const device= await db.device.findFirst({
      where: {},
      orderBy: { id: 'desc' }
    });
    if (!device) {
      return res.status(404).json({ msg: 'Device not found' });
    }

    const userData = await db.userData.findFirst({
      where: {},
      orderBy: { id: 'desc' }
    });

    if (!userData ) {
      return res.status(404).json({ msg: 'userdata not found' });
    }

    const rs = await db.repair.create({
      data: {
        userId: req.user.id,
        deviceId: device.id,
        userdataId: userData.id,
        requesDate : data.requesDate,
        detailrepair : data.detailrepair,
        status: data.status,
        statusUser: data.statusUser,
        other : data.other,
        buding : data.buding,
        room : data.room,
        EditRepairDate : data.EditRepairDate,
        DatailEdit: data.DatailEdit,
        tecdnicianRepair : data.tecdnicianc,
        TeEdit : data.TeEdit

      }
    });
    res.json({ msg: 'Create repair OK', result: rs });
  } catch (error) {
    next(error);
  }
};



exports.updateRepair = async (req, res, next) => {
  const { id } = req.params;
  const { status ,EditRepairDate, DatailEdit,tecdnicianRepair,TeEdit } = req.body; 

  try {
    const rs = await db.repair.updateMany({
      data: { status,EditRepairDate,DatailEdit,tecdnicianRepair,TeEdit  }, 
      where: { id: +id } 
    });
    res.json({ msg: 'Update ok', result: rs });
  } catch (err) {
    next(err); 
  }
};



exports.updateStatus = async (req, res, next) => {
  const { id } = req.params;
  const { status } = req.body; 

  try {
    const rs = await db.tecdniciancRecord.update({
       data : { status }, 
       where: { id: +id, repairId: req.repair.id }  
  });

    res.json({ msg: 'Update ok', result: rs });
  } catch (err) {
    next(err); 
  }
};



 exports.deleterepair = async (req, res, next) => {
   const {id} = req.params
   try {
     const rs = await db.repair.delete({ where : {id : +id, userId: req.user.id}})
     res.json({msg: 'Delete ok', result : rs})
   }catch(err) {
     next(err)
   }
}



exports.getTerecord = async (req, res, next) => {
  try {
    const records = await db.tecdniciancRecord.findMany({
      include: {
        user: true, 
        repair: {
          select: {
            requesDate: true,
            detailrepair: true,
            status: true,
            statusUser: true,
            other: true,
            buding: true,
            room: true,
            EditRepairDate: true,
            device: {
              select: {
                type: true,
                brand : true,
                Equipmentnumber : true,  
              }
            },
            userdata: {
              select: {
                usernamedata: true,
                appointment :true,
              }
            }
          }
        }
      }
    });
    res.json(records);
  } catch (error) {
    next(error);
  }
};




exports.adminShowRepair = async (req,res,next) => {
  try {
      const rs = await db.repair.findMany({
        include: {
          user: {
            select: { username: true } 
          },
          userdata: {
            select: { usernamedata : true}
          },
          device: {
            select: {
              type: true,
              brand: true,
       
            }
          }
        }
      })
      res.json(rs)
  } catch (error) {
     next(error)
  }
}



exports.createTeRecord = async (req, res, next) => {
  
  const data = req.body; 
  try {
   
    const teData = await db.tecdniciancRecord.create({
      data: {
        userId: req.user.id,
        repairId: data.id, 

      },
    });


    res.json({ msg: 'Technician record created successfully', result: teData });
  } catch (err) {
    next(err); 
  }
};




