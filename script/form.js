let a = document.getElementById('class-input');
a.hidden = true


let student_in_school = document.getElementById("student-in-school");
let outsider = document.getElementById("outsider");

function change_form(){
    if (outsider.checked){
        a.hidden = true
    }
    if (student_in_school.checked){
        a.hidden = false
    }
}
