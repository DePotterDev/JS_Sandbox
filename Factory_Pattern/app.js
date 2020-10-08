function MemberFactory(){
    this.createMember = function(name, type){
        let member;

        if(type === 'budget'){
            member = new BudgetMembership(name);

        }else if(type === 'standard'){
            member = new StandardMembership(name);

        }else if(type === 'super'){
            member = new SuperMembership(name);
        }

        member.type = type;

        member.define = function(){
            console.log(`${this.name} (${this.type}): ${this.cost}`);
        }

        return member;
    }
}

const BudgetMembership = function(name){
   this.name = name;
   this.cost = 'R$70';
}

const StandardMembership = function(name){
   this.name = name;
   this.cost = 'R$90';
}

const SuperMembership = function(name){
   this.name = name;
   this.cost = 'R$120';
}


const members = [];
const factory = new MemberFactory();
members.push(factory.createMember('Laurens', 'budget'));
members.push(factory.createMember('Eric', 'budget'));
members.push(factory.createMember('Jackson', 'standard'));
members.push(factory.createMember('Maurice', 'super'));

// console.log(members);

members.forEach(function(member){
    member.define();
})