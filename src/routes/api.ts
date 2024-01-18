import express,{Request, Response} from 'express';
import * as fs from 'fs';
import * as _ from 'lodash';
//var _ = require("loadash");
//import { Request } from 'undici-types';
const router = express.Router();
const dbPath = './src/data/products.json';
//var _ = require("underscore");

router.get('/products', (req:Request, res:Response)=>{
    const data = JSON.parse(fs.readFileSync(dbPath,'utf8'));
    res.json(data);
})

router.get('/productsOrder', (req:Request, res:Response)=>{
    const data = JSON.parse(fs.readFileSync(dbPath,'utf8'));
    //data.sort((a: { name: number; }, b: { name: number; }) => (a.name > b.name ? -1 : 1));
    const sortField = req.query.sortBy as string;

    if (sortField) {
      data.sort((a: { [x: string]: number; }, b: { [x: string]: number; }) => a[sortField] > b[sortField] ? 1 : -1);
    }
  
    res.json(data);

//    res.json(data);
})

router.get('/orderByTitle',(req:Request,res:Response)=>{
    const data = JSON.parse(fs.readFileSync(dbPath,'utf8'));

    const filteredData = _.filter(data, data=>data.title =='Samsung');
    res.json(filteredData);
    //console.log(filteredData);    
})


router.get('/products/:id', (req:Request, res:Response)=>{
    var id = +req.params.id;
    const data = JSON.parse(fs.readFileSync(dbPath,'utf8'));
   // var data1 = data.products.find(p => p.id === id);
    //var filtered = _.where(users, {user: "a"});
    res.json(data.find((p: { id: number; }) => p.id === id));

})

//var filtered = _.where(users, {user: "a"});

router.post('/products', (req: Request, res: Response) => {
    const data = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
    console.log(req.body);

    data['products'].push(req.body);
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
    res.json(data.products);
  });

router.put('/products', (req: Request, res: Response) => {
    const data = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
    console.log(req.body);

    data['products'].push(req.body);
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
    res.json(data.products);
  });


export default router;


