

let result = prompt('Enter Your result plz...');

if(result==100){
    console.log(`Brother, apni Manush naki Roobot!!!.Apni 100 theke 100 paichen...`);
}else if(result<=99 && result>=80){
    console.log(`Apni A+ peyechen.Apnar CGPA = 5.00. Apni Misti khawan...`);
}else if(result<=79 && result>=70){
    console.log(`Apni A grade peyechen.Apnar CGPA = 4.50.Apni Olpo Kicu Marks er jonno A+ ta pan nai. it's okey 
    better luck next time...`);
}else if(result<=69 && result>=60){
    console.log(`Apni A- peyechen.Apnar CGPA = 4.00.Apnake Aro valo kore study korte hbe...`);
}else if(result<=59 && result>=50){
    console.log(`Apni B Grade peyechen.Apnae CGPA = 3.50. Apnar result khub akta valo hoy nai.aro valo korte hbe...`); 
}else if(result<=49 && result>=40){
    console.log(`Apni C Grade peyechen.Apnar CGPA = 3.00.Apnar Result er quality khub faltu hoiche...`);
}else if(result<=39 && result>=33){
    console.log(`Apni D Grade peye kono rokom tene tone pass dichen.Apnar CGPA = 2.00...`);
}else if(result<=32 && result>=0){
    console.log(`Apni fail marchen.Apnake 1 ta riskaw kine dewa hbe apni akhon theke riskaw chalaben...`);  
}else{
        console.log(`Vai sotti kore bole to apni Exam diyechile kina.amr to mone hoye apni exm e den nai...`); 
}                          