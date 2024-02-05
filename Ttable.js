const course_container = document.querySelector(".courses_box")
const temp = document.querySelector("[mytem]")
const searchIn = document.querySelector("#search")

let cFinal_List = []

searchIn.addEventListener("input", (e) =>{
    const searchInValue = e.target.value.toLowerCase()
    cFinal_List.forEach(fcourse =>{
        const isIncluded = fcourse.name.includes(searchInValue) || fcourse.day.includes(searchInValue)
        fcourse.element.classList.toggle("hide", !isIncluded)
    })
})

fetch("data.json")
.then(res => res.json())
.then(data => {
    cFinal_List = data.second_t_upgrade.map(course =>{
        const courseList = temp.content.cloneNode(true).children[0]
        const cHeader = courseList.querySelector("[course-name]")
        const cday = courseList.querySelector("[day]")

        cHeader.textContent = course.name
        cday.textContent = course.day
        course_container.append(courseList)
        // console.log(course_container);

        return {name: course.name, day: course.day, element: courseList}
    })
    console.log(cFinal_List);
})

searchIn.addEventListener('mouseout',()=>{
    searchIn.style.transition = 0.5
})