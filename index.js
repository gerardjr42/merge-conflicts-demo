   function createPerson(name, age) {
     return {
       name,
       age,
       friends: [],
     };
   }


   function addPersonAsFriend(person, other) {
     person.friends.push(friend);
     return person;
   }

   module.exports = {
     createPerson,
     addPersonAsFriend,
   };