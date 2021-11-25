# Rakamin Assignment (Chat App API)

Rakamin Chat App API is an app that can handle conversation between users, a user can create conversation and sending text and also see an read indicator that shows rather the chat is already read by the other recipient or not. this app is developed using Node JS with Sequelize ORM to manage the MySQL database.

I realize this app is still have flaws and it can be improve for example it can use websocket to improve realtime data transfer and it also can use Redis to improvise the request time to the database.

I already have a chat app that using a websocket technology if you interested here is the link to the repository https://github.com/nadhifrafifaiz/stay-connected


# Installation
1. Create new MySQL Schema and name it db_chat_rakamin
2. Open ```server/config/config.json```
3. Fill the development password to your MySQL password
```
"development": {
    "username": "root",
    "password": "{your password here},
    "database": "db_chat_rakamin",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
  ```
4. In terminal run ```npm install``` to get all dependencies that needed  
5. To start the application run the ```npm start```

# API Endpoints
These endpoints allow you to add new user, add new conversation, see conversation, and add new message

### GET

- [Get All User```/api/user/show```](#Get-All-User-apiusershow) <br/>
- [Get User Conversation(s) ```/api/conversation/get/[idUser]```](#Get-User-Conversation-s-apiconversationget-idUser) <br/>
- [Get a Conversation ```/api/conversation/[idConversation]```](#Get-a-Conversation-apiconversation-idConversation) <br/>



### POST

- [Add New User ```/api/user/create```](#Add-New-User-apiusercreate) <br/>
- [Start New Conversation ```/api/conversation/create```](#Start-New-Conversation-apiconversationcreate) <br/>
- [Send New Message ```/api/message/create```](#Send-New-Message-apimessagecreate) <br/>

___

### Get All User /api/user/show
Get all data user that have been registered to the app, each user have its own unique id and username (username must be at least 6 character and cannot included a whitespace)

**Response**

```
[
    {
        "id": 1,
        "username": "nadhif",
        "createdAt": "2021-11-25T17:30:18.000Z",
        "updatedAt": "2021-11-25T17:30:18.000Z"
    },
    {
        "id": 2,
        "username": "rafi___",
        "createdAt": "2021-11-25T17:30:32.000Z",
        "updatedAt": "2021-11-25T17:30:32.000Z"
    },
    {
        "id": 3,
        "username": "faiz_awesome",
        "createdAt": "2021-11-25T17:30:44.000Z",
        "updatedAt": "2021-11-25T17:30:44.000Z"
    }
]
```

### Get User Conversation(s) /api/conversation/get/[idUser]

Get all the conversation that belong to specific user, each conversation is consist id(s) of users that are currently having conversation

**Response**

The request for following example is ```/api/conversation/get/1``` so it will give a response of conversations that user with id 1 has

```
[
    {
        "id": 1,
        "idSender": 1,
        "idReciever": 2,
        "createdAt": "2021-11-25T17:34:10.000Z",
        "updatedAt": "2021-11-25T17:34:10.000Z"
    },
    {
        "id": 2,
        "idSender": 1,
        "idReciever": 3,
        "createdAt": "2021-11-25T17:34:14.000Z",
        "updatedAt": "2021-11-25T17:34:14.000Z"
    }
]
```

### Get a Conversation /api/conversation/[idConversation]
Get specific conversation and display the detail of users that are currently having conversation, id of conversation, when the conversation is made and also the messages that consist inside the conversation

**Response**

The request for following example is ```/api/conversation/get/1``` so it will give a response of conversations that has an id of 1 and also all the messages inside of it conversation
The conversation with id 1 is a conversation between user with id, notice that every message has a readStatus which determine if a chat is being read by the other recipient 

```
[
    {
        "id": 1,
        "idSender": 1,
        "idReciever": 2,
        "createdAt": "2021-11-25T17:34:10.000Z",
        "updatedAt": "2021-11-25T17:34:10.000Z",
        "Messages": [
            {
                "id": 1,
                "sender": 1,
                "message": "Hello",
                "readStatus": true,
                "createdAt": "2021-11-25T17:39:37.000Z",
                "updatedAt": "2021-11-25T17:40:06.000Z",
                "ConversationId": 1
            },
            {
                "id": 2,
                "sender": 2,
                "message": "Hai nadhif",
                "readStatus": true,
                "createdAt": "2021-11-25T17:39:42.000Z",
                "updatedAt": "2021-11-25T17:39:57.000Z",
                "ConversationId": 1
            },
            {
                "id": 3,
                "sender": 1,
                "message": "wanna hangout?",
                "readStatus": true,
                "createdAt": "2021-11-25T17:39:56.000Z",
                "updatedAt": "2021-11-25T17:40:06.000Z",
                "ConversationId": 1
            },
            {
                "id": 4,
                "sender": 2,
                "message": "sure",
                "readStatus": false,
                "createdAt": "2021-11-25T17:40:06.000Z",
                "updatedAt": "2021-11-25T17:40:06.000Z",
                "ConversationId": 1
            }
        ]
    }
]
```


___

### Add New User /api/user/create
Create a new user with its own unique username, and it will give a response of user id, which it will be used to create a new conversation and send a new message

**Parameter**

|          Name | Required |  Type   | Description                                                                                                                                                         |
| -------------:|:--------:|:-------:| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `username` | required | string  | Username of each user                                                                 |


**Response**

```
{
    "id": 3,
    "username": "faiz_awesome",
    "updatedAt": "2021-11-25T17:30:44.780Z",
    "createdAt": "2021-11-25T17:30:44.780Z"
}
```

### Start New Conversation /api/conversation/create
Create new conversation between two users, this request required 2 id users

**Parameter**

|          Name | Required |  Type   | Description                                                                                                                                                         |
| -------------:|:--------:|:-------:| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `idSender` | required | integer  | id of the first user                                                                 |
|     `idReciever` | required | integer  | id of the second user                                                                 |


**Response**

```
{
    "id": 3,
    "idSender": 2,
    "idReciever": 3,
    "updatedAt": "2021-11-25T17:34:20.555Z",
    "createdAt": "2021-11-25T17:34:20.555Z"
}
```

### Send New Message /api/message/create

Send new messages to another user, this response required an conversation id, user id and the message

**Parameter**

|          Name | Required |  Type   | Description                                                                                                                                                         |
| -------------:|:--------:|:-------:| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `sender` | required | integer  | id of user that send the message                                                                |
|     `ConversationId` | required | integer  | id of the conversation                                                              |
|     `message` | required | string  | the message                                                                 |



**Response**

The response will contain the all messages that have been send in the current conversation

```
[
    {
        "id": 1,
        "sender": 1,
        "message": "Hello",
        "readStatus": true,
        "createdAt": "2021-11-25T17:39:37.000Z",
        "updatedAt": "2021-11-25T17:40:06.000Z",
        "ConversationId": 1
    },
    {
        "id": 2,
        "sender": 2,
        "message": "Hai nadhif",
        "readStatus": true,
        "createdAt": "2021-11-25T17:39:42.000Z",
        "updatedAt": "2021-11-25T17:39:57.000Z",
        "ConversationId": 1
    },
    {
        "id": 3,
        "sender": 1,
        "message": "wanna hangout?",
        "readStatus": true,
        "createdAt": "2021-11-25T17:39:56.000Z",
        "updatedAt": "2021-11-25T17:40:06.000Z",
        "ConversationId": 1
    },
    {
        "id": 4,
        "sender": 2,
        "message": "sure",
        "readStatus": false,
        "createdAt": "2021-11-25T17:40:06.000Z",
        "updatedAt": "2021-11-25T17:40:06.000Z",
        "ConversationId": 1
    }
]
```











  
