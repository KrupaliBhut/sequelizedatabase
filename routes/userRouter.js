
const express=require('express');
const {manyTomanysel,manytomayvideo,manytomayinsert,onetomanyinclude,scope,polymanytomany,hook,poly,polyselect,crudoperation,manytomanyjunselect,manytomanyjun,showonetomany,ope,prac,one,onetomanyinsert,bulk,selectdata,updatedata,addusers,search,pagination,deletedata,softdelete,restore,like,count,searchpag,Insertasso,Updateasso}=require('../controller/userController');

const {onetomany}=require('../controller/userController');
const {practice}=require('../controller/userController');
const {practice2}=require('../controller/userController');
const {onetomany2}=require('../controller/userController');
const router=express.Router();
router.route('/bulkadd').get(bulk);
router.route('/crud').get(crudoperation);
router.route('/select').get(ope);
router.route('/onetoone').get(one);
router.route('/selectdata').get(selectdata);
router.route('/delete').get(deletedata)
router.route('/updatedata').get(updatedata);
router.route('/adduser/').get(addusers);
router.route('/search').get(search);
router.route('/pagination').get(pagination);
router.route('/sdelete').get(softdelete);
router.route('/restore').get(restore);
router.route('/like').get(like);
router.route('/count').get(count);
router.route('/searchpag').get(searchpag);
router.route('/onetomany').get(onetomany);
router.route('/practice').get(practice);
router.route('/practice2').get(practice2);
router.route('/onetomany2').get(onetomany2);
router.route('/insertasso').get(Insertasso);
router.route('/updateasso').get(Updateasso);
router.route('/prac').get(prac);
router.route('/onetomanyinsert').get(onetomanyinsert);
router.route('/showonetomany').get(showonetomany);
router.route('/manytomanyjun').get(manytomanyjun);
router.route('/manytomanyjunselect').get(manytomanyjunselect);
router.route('/scope').get(scope);
router.route('/hook').get(hook);
router.route('/poly').get(poly);
router.route('/polyselect').get(polyselect);
router.route('/polymanytomany').get(polymanytomany);
router.route('/onetomanyinclude').get(onetomanyinclude);
router.route('/manytomayvideo').get(manytomayvideo);
router.route('/manytomayinsert').get(manytomayinsert);
router.route('/manyTomanysel').get(manyTomanysel);
module.exports = router;