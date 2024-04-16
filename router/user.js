import express from 'express';
import { Schema, fav } from '../model/model.js';
import { Cart } from '../controller/SC.js';
import { AddFav } from '../controller/AD.js';
import { fv } from '../controller/fav.js';
import { cf } from '../controller/cf.js';
import { p } from '../controller/p.js';
import { f } from '../controller/f.js';
import { lo } from '../controller/lo.js';
import { si } from '../controller/si.js';
import { Verify } from '../utils/utils.js';



export const router=express.Router();
router.post('/cart',Cart)
router.post('/AddFav',AddFav)


router.get('/fav',Verify,fv)
router.get('/CountFav',cf)


router.get('/pro',p)
router.get('/ff',f)


router.post('/Login',lo)
router.post('/Sign',si)


