let resume = {
    fname : "Jarald",
    lname : "Justus",
    email : "jarald.jsj@gmail.com",
    phone : 7708797941,
    objective : "A highly disciplined and hard-working individual looking for a responsible position to gain good experience.",
    education : [{
        study : "B.E CSE",
        institute : "Good Shepheard Matric Higher Secondary School Marthandam",
        percentage : 70,
        yearofpassing : 2017
        },{
        study : "12th",
        institute : "Good Shepheard Matric Higher Secondary School Marthandam",
        percentage : 65,
        yearofpassing : 2013
        },{
        study : "B.E",
            department : "CSE",
            institute : "CSI Institute Of Technology Thovalai",
            percentage : 68,
            yearofpassing : 2011
    }],
    skills : ["HTML","CSS","Javascript","github"],
    certification : [{
        course : "Andriod Studio"
    }],
    project : [{
        title : "Clone Detection",
        desc : ""
    }],
    achivements : ["Actively Participated in workshops on Android Application Development"],
    experiance : [{
        organisation : "",
        role : "",
        years : ""
    }],
    areaOfIneterst : ["Full stack","Front End Development"],
    personalDetails : {
        languages : ["Tamil","English"],
        dob : "29-June",
        gender : "Male",
        martialStatus : "Single",
        fatherName : "Justus S",
        motherName : "Arul Joy",
        siblings : "Two Elder brothers"
    }
}

let resumeNew = {
    skills : [],
    cetification : [],
    areaOfInterest : [],
    personalDetails : {},
    languages : []
}


function addobj(key, value, index = null, indexkey = null){
    if(index == null){
        resumeNew[key] = value;
    }else if(key == "education" || key == "experiance"){
        if(!resumeNew[key]){
            resumeNew[key] = []
        }
        if(!resumeNew[key][index]){
            resumeNew[key][index] = {}
        }
        resumeNew[key][index][indexkey] = value;
    }else{
        resumeNew[key][index] = value;
    }
    display();
}
function display(){
    document.getElementById("nameobj").innerHTML = JSON.stringify(resumeNew);
    addobj(key, value, index = null, indexkey = null)
}
function submitResume(){
    if(!localStorage.getItem("resumeList")){
        localStorage.setItem("resumeList", JSON.stringify([]))
    }
    let res = JSON.parse(localStorage.getItem("resumeList"))
    res.push(resumeNew)
    
    localStorage.setItem("resumeList", JSON.stringify(res))
    nameView()
}

function nameView(){
    let ele = "";
    let viewLi = JSON.parse(localStorage.getItem("resumeList"));
    for(let i = 0; i < viewLi.length; i++){
        ele += `<li> <a href = "view.html?name=${viewLi[i].fname}" target="_blank">${viewLi[i].fname}</a></li>`
    }
    document.getElementById("nameUl").innerHTML = ele;
}
nameView()
