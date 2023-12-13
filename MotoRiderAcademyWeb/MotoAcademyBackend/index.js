const express = require('express')
const jsforce = require('jsforce')
require('dotenv').config()
const app=express()
const PORT=3002
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000', // İzin verilen alan adı
    methods: ['GET', 'POST'], // İzin verilen HTTP metodları
    allowedHeaders: ['Content-Type', 'Authorization'] // İzin verilen başlıklar
}));

const{SF_LOGIN_URL, SF_USERNAME, SF_PASSWORD, SF_TOKEN }= process.env
const conn = new jsforce.Connection({
    loginUrl: SF_LOGIN_URL
})
conn.login(SF_USERNAME, SF_PASSWORD+SF_TOKEN, (err, userInfo)=>{
    if(err){
        console.error(err)
    }else{
        console.log(userInfo.id)
        console.log(userInfo.organizationId)
    }
})

app.get('/eventdata', (req, res) =>{
    conn.query("SELECT Name__c, Start_DateTime__c, Location__c, Type__c, Stage__c FROM Event__c", (err,result)=>{
        if(err){
            console.error(err);
        }else{
            res.json(result.records)
        }
    })
} )
app.get('/instructordata', (req, res) =>{
    conn.query("SELECT Name, Email__c, About_Me__c FROM Speaker__c", (err,result)=>{
        if(err){
            console.error(err);
        }else{
            res.json(result.records)
        }
    })
} )


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// POST isteği için route tanımı
app.post('/createLead', (req, res) => {
    const { Name, Phone__c, email__c, description__c } = req.body;
  
    conn.sobject('Lead__c').create({ Name, Phone__c, email__c, description__c }, (error, result) => {
      if (error) {
        console.error('Salesforce API hatası:', error);
        res.status(500).json({ error: 'Lead oluşturulamadı' });
        return;
      }
      console.log('Yeni lead oluşturuldu:', result);
      res.status(200).json(result);
    });
  });
  




app.listen(PORT, ()=>{
    console.log("server is running")
})