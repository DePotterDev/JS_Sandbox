const User = function(name){
    this.name = name;
    this.chatroom = null;
}

User.prototype = {
    send: function(message, to){
        this.chatroom.send(message, this, to);
    },
    recieve: function(message, from){
        console.log(`${from.name} to ${this.name}: ${message}`);

    }
}

const Chatroom = function(){
    let users = {}; // list of users

    return{
        register: function(user){
            users[user.name] = user;
            user.chatroom = this;
        },
        send: function(message, from, to){
            if(to){
                // Single message
                to.recieve(message, from);
            }else{
                // Mass message
                for(key in users){
                    if(users[key] !== from){
                        users[key].recieve(message, from);
                    }
                }
            }

        }
    }
}

const brad = new User('Brad');
const Laurens = new User('Laurens');
const Ingrid = new User('Ingrid');


const chatroom = new Chatroom();

chatroom.register(brad);
chatroom.register(Laurens);
chatroom.register(Ingrid);

brad.send('Hello Laurens', Laurens)
Laurens.send('Hello my dear', Ingrid)
Ingrid.send('Hello everyone')
