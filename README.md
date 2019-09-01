# S2_A5_signin

```
1.使用者輸入帳密：email & password
2.如果找不到 username，或是 password 錯誤，介面會顯示 "Username/Password 錯誤"
3.如果 username 和 password 組合正確，使用者就能成功登入，並導向 welcome page。
```

## Image

![image](https://github.com/KerwinJhong/S2_A5_login/blob/master/account-login.PNG)

## 安裝環境

1. Node.js v10.15.3
2. Express ^4.17.1
3. Express-handlebars ^3.1.0
4. body-parser": ^1.19.0

## 安裝步驟

1. 輸入指令下載資料

```
$ git clone https://github.com/KerwinJhong/S2_A5_login.git
```

2. 從終端機安裝 npm 套件，輸入以下指令

```
$ npm install
```

## 執行專案

1. 執行專案

```
$ npm run dev
```

3. 輸入網址

```
http://localhost:3000
```

4. User Account

```
 {
   firstName: 'Tony',
   email: 'tony@stark.com',
   password: 'iamironman'
 },
 {
   firstName: 'Steve',
   email: 'captain@hotmail.com',
   password: 'icandothisallday'
 },
 {
   firstName: 'Peter',
   email: 'peter@parker.com',
   password: 'enajyram'
 },
 {
   firstName: 'Natasha',
   email: 'natasha@gamil.com',
   password: '*parol#@$!'
 },
 {
   firstName: 'Nick',
   email: 'nick@shield.com',
   password: 'password'
 }
```

## 作者

[Kerwin Jhong](https://github.com/KerwinJhong)