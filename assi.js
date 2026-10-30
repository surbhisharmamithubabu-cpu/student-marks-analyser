Name="Rahul Kumar"
console.log(Name)
 rollno=101₹;
 onsole.log(rollno)
let department="conputer science";
console.log(department);

let marks=[78,85,62,91,34]
console.log(marks);
//calculate tota marks
function caltotal(marks){
   let total=0;
    for(let i=0;i<marks.length;i++){
        total=total+marks[i]

    }
    return total;
}
console.log(caltotal(marks));
//calculate percentage
function calculatePercentage(marks){
    let total=calculatePercentage(marks);
    let Percentage=total/marks.length;
    return Percentage;

 }
 console.log(calculatePercentage(marks)) 

//FIND HIGHT MARKS
function findHighest(marks)
{
    let highest=marks[0];
    for(let i=1;i<marks.length;i++)
    {
        if(marks[i]>highest){

        }
    }
    return highest;
}
console.log(findHighest(marks));

//find lowest marks

function findlowest(marks)
{
    let lowest=marks[0];
    for(let i=1;i<marks.length;i++)
    {
        if(marks[i]<lowest){

        }
    }
    return lowest;
}
console.log(findlowest(marks));


//count subject pass
let count=0;
for(let i=0;i<=marks.length;i++)
{
    if(marks[i]>=40)
    {
        count++;
    }
}
console.log(count);

let upperName=Name.toUpperCase();
console.log( upperName);

let characters=Name.length;
console.log(characters);
optional
function getPerformance(percentage)
{
    if(percentage>=80){
        return "excelent"
    }
    elseif(percentage>=60){
        return "good"
    }
    elseif(percentage>=40){
        return "average"
    }
    else{
        return "need improvement"
    }
    
}

