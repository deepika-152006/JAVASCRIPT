const btn = document.getElementById('calculate');

btn.addEventListener('click',function(){


    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;
    


    if (height == '' || weight == '') {
       alert('please fill out the input fields!');
        return;
    }

    height=height/100
    let BMI=(weight/(height*height));

    BMI=BMI.toFixed(2);
    document.querySelector('#result').innerHTML=BMI;
    let category='';

    if (BMI<18.5)
    {
        category="Underweight";
    }
    if(BMI>=18.5 && BMI<25)
    {
        category="Healthy";
    }
     if(BMI >=25 && BMI<30)
    {
        category='Overweight';
    }
    if(BMI>=30)
    {
       category='Obesity';
    }

   document.querySelector('.comment').innerHTML=`Comment:you are <span id="comment"> ${category} </span>`;
    
});