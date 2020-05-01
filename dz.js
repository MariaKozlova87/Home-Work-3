
// let arr = [
//     obj.one = {
//     fruits :'bananas',
//     berries: 'cranberries',
//     vegetables: 'broccoli',

// },



// obj.two = {
//     fruits :'pears',
//     berries: 'blueberries',
//     vegetables: 'cucumber',
    
// },

// obj.three = {
//     fruits :'pineapples',
//     berries: 'raspberries',
//     vegetables: 'tomatoes',
    
// },
// ]; 

// let fruits=document.querySelector('.fruits');
// let strfruits='';
// for(objName.fruits='fruits') {
//     continue;
    
// };
// strfruits=`${obj.one}${obj.two}${obj.three}`;

// const  label = document.querySelector('.remove-label');


container.addEventListener('click', (ev) => {
   ev.target.innerHTML
  console.log (ev.target.innerHTML)
  if(ev.target.className !='remove-label')
  return;
  let pane = ev.target.closest('.pane');
  pane.remove();
   
});

function validate_form ( )
{
	valid = true;

        if ( document.contact_form.contact_name.value == "" )
        {
                return ( "Error" );
                valid = false;
        }

        return valid;
};



// Home Work #3

      function Human() {
              this.name = 'Maria';
              this.firstName = 'Kozlova';
      
              const fullname = `${this.name} ${this.firstName}`;
              this.fullname = fullname;
              }

      
      const obj = new Human();
      console.log (obj.fullname);
 
     
       
      function Woman() {
        Human.call(this);
      
              
      } 

      const woman = new Woman();
      console.log (woman);

      function Europenian() {
              Human.call(this);
              Woman.call(this);

      }

      const europenian = new Europenian();
      console.log (europenian);

       function Tatarianeyes() {
               Human.call(this);
               Woman.call(this);
               Europenian.call(this);

       }


       const tatarianeyes = new Tatarianeyes();
       console.log (tatarianeyes);

       function Person() {
        Human.call(this);
        Woman.call(this);
        Europenian.call(this);
        Tatarianeyes.call(this);

}

     const person = new Person (obj.fullname, Human, Woman, Europenian, Tatarianeyes);
     console.log(person);
