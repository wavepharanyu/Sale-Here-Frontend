# Sale Here - Frontend Developer Interview Question

## Page Folder Structure 📁
```
   page
   |___ createAccount (หน้ากรอกชื่อ user)   PATH: /
   |___ home (หน้า create / join ห้องแชท) PATH: /home
   |___ createRoom (หน้ากรอกชื่อห้องแชท)    PATH: /create-room , /join-room
   |___ chatRoom (หน้าแสดงแห้องแชท)       PATH: /chat-room/:roomName
```

## Mock Data 
มีการ mock data ของรายชื่อห้องแชทเอาไว้สำหรับใช้เวลา create / join room
```
rooms = [
    {
        name: "room2"
    }
]
```

## หน้า create / join room
### หน้า create room
```
    สาามารถสร้างห้องแชทได้ทุกชื่อ ยกเว้นห้องชื่อ room2
```

### หน้า join room
```
    สาามารถเข้าห้องแชทได้เฉพาะ ห้องชื่อ room2
```

## Library ที่ใช้เพิ่มเติม
- Redux
- Styled-components
