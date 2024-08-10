const express = require('express')
const router = express.Router()
const authenticate = require('../middlewares/authenticate')
const repairController = require('../controllers/repair-controller')


router.get('/',authenticate, repairController.getByUser)
router.get('/user', authenticate, repairController.getUser)
router.get('/admin', authenticate, repairController.getAdmin)
router.get('/teindata', authenticate, repairController.getTe)
router.get('/adminShow', authenticate, repairController.adminShowRepair)
router.get('/terecord', authenticate, repairController.getTerecord)
router.get('/Allrepair', authenticate, repairController.getRepairAll)


//

router.post('/device', authenticate, repairController.createDevice)
router.post('/user', authenticate, repairController.createUserData )
router.post('/repaircre', authenticate, repairController.createRepair)
router.post('/teRecord', authenticate, repairController.createTeRecord)
router.put('/:id', authenticate, repairController.updateRepair)
router.delete('/:id', authenticate, repairController.deleterepair)



module.exports = router