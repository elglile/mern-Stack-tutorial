# Averix
# 🧩 مشروع MERN Stack كامل

## ⚙️ التثبيت الأولي

```bash
npm init
npm install express mongoose dotenv colors
npm install --save-dev nodemon



========server / backend part

bara folder backend 3ndk fill .env li fih les info priver
ou .gitignore li ki ignoie les fill li ma5asshomch i t inportaw
folder node_modules, fill package.json , fill package-lock.json



backend/
│
├── server.js
│   ├─ إنشاء تطبيق express  (app express)
│   ├─ استخدام middlewares بـ app.use() (--kirbat l controller b routes)
│   ├─ ربط controllers بـ routes    (link bin server ou l port)
│   └─ تشغيل السيرفر على port محدد
│
├── routes/          → يحتوي على جميع ملفات routes (    fih fill ta3 aye routes ta3 controller,	ktrbt l url b collection)
├── controllers/     → فيه الدوال (get, post, put, delete)
├── middleware/      → ملف الأخطاء + middleware الحماية+  aye middleware a5ra tae err
├── config/          → الاتصال بقاعدة البيانات db.js + db.js : lihia connection ta3 db kijib url mn .env
├── models/          → يحتوي على جميع schemas
├                    →   mn b3d ma cncrier lschema ou kn3ayt 3liha f controller nt9i ou n3awd ncha3l server ktzad rassha f7alt makantch ou t3ayt 3la model f controlles
├── .env             → معلومات سرّية (MONGO_URI, JWT_SECRET ...)
└── .gitignore       → تجاهل الملفات مثل node_modules و .env



-------Commands bach tbdà server
Development mode (with nodemon)
npm run dev

Production mode (node server.js)
npm start


---had commande mn b3d makdir Errormiddleware f kola fct async 9aditi lakan chi err 
	kisayfto nichan l Errormiddleware  bla mtb9a t7taj kola mara dir try catsh

npm i express-async-handler


-----Optional (if you want frontend React)
npx create-react-app frontend
cd frontend
npm start



========Authentication 

	1. create usermodel.js	:	kt7ot schema ta3 l user
	
	2. mn be3d kndir like mabin user schema ou data schema li howa had script
		    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User", // reference to User model },
	3. 4t3ayt f server 3la router ta3 had user ou aye data jdida ba4i dirha
	
	4. user.js fil kt9ad fih les route li kihadro mabin rout ta3 server ou les fct ta3 crud

	5. userroute.js		: aye route.js jdida drt nmchi ncall it f server 

	6. userC.js		: 4n7ot tlata fct ta3 crud jouj POST for register and login
				  and one get for take the data
				  ktrja3 t9ad lihoum des route f user.js
	crier 4a wa7d ou test b postman
	
	--- partie ta3 register fct 
		bach nbdawha 5ass ikon password mchafr ou bach ikon mchafr 5ass wa7d package
			>> npm i bcryptjs

		ou bach nt3anlo m3a JWT = JSON Web Token li kt5dm b consept ta3 check les info mn user bach t3tih cookise
			>> npm i jsonwebtoken
		
-- jwt.sign
-- create token
-- autorisation

		--kikono les fct ta3 register , login , getdata, f had setuation 3ndi 3 fct loginUser, registerUser, getMe 
		ou w7da rab3a ta3 generateToken hia li4tb9a kt3ti l user time ib9a mkonectifih like 7d or 30d

		--user fih jouj type ya 3adi ta3 user ou li fih role bach admin i tkonecta mn nafss lblass ou fhad l7ala knzido
		role f schema , startf login ou startf register ta3 role

        --autontification ta3 les routes using middelware , hadi kt5dm meli knsayfto req to route li fih had autonthification 
        5adi it check te tocken kindiro sahla , dir register , dir login copy tocken sir link ta3 /me dir Autorization > type: Bearer Tocken 
        ou 7ot Tocken li copit f input ou dir SEND 5dm mzn 7ayd 7arf meno ou chofo wach ma4ay5dmch bach tester err

        39:30
        -- mn loraha kn protect the crud for for table li 4ayrtabto b user , 3la 7sab bach iweli ijib data 3la 7sssab tocken ta3 dak user
            for exmple 3ndi Goals ou users mn b3d ma9adir protect ou dertha f getme li ktjib data ta3 dak user 3la 7sab tocken ta3o 
            4n protect the Goals bach meli n7ot tocken ijib Goals ta3 dik tocken

        -- mn b3d fach kn7ot lockal f postman ta3 goals kital3 lia err 7itach maatih 7ta tocken ta3 chi user , ou meli kn3tih tocken kijib data

        -- ou had goals 3ndha crud ta3ha , oulora had protect li dert 4adi mib9ach idoz lama3titihch tocken , 
        ou mn loraha f aye fct 4ayweli 5assk id ta3 user li mrtabt bdik fct oula makanch fct ma4at5dmch ha syntaxe ' user : req.user.id '

        -- mn loraha 5assk bach t5adm update ou selete check l user mazal 7itach momkin tocken ikon mais user data tkon delet 
            ou check ta3 id user li da5l mn3a id user li f data li t5aznt
            hadchi bach kola user i update just f data ta3o 








fikrat abdo 3la lmodel : daba matalan 3la unik treu t9dar dir fiha objet dir fih message 3la les err



=