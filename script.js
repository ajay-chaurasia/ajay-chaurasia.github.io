function fetchResumeData() {
    console.log(ajay)
    return ajay
}

function addSummary(summaryPoints) {
    const summaryDiv = document.getElementById('summary')
    const ul = document.createElement('ul')
    summaryPoints.forEach((point) => {
        const li = document.createElement('li')
        li.innerHTML = point
        ul.appendChild(li)
    })
    summaryDiv.appendChild(ul)
}

function addSkills(skills) {
    const skillsDiv = document.getElementById('skills')
    skills.forEach((skill) => {
        const categorydiv = document.createElement('ul')

        const categoryHeader = document.createElement('h5')
        categoryHeader.innerHTML = skill.category
        categorydiv.appendChild(categoryHeader)
        
        const skillsUl = document.createElement('ul')
        skill.list.forEach((skillName) => {
            const skillsLi = document.createElement('li')
            skillsLi.innerHTML = skillName
            skillsUl.appendChild(skillsLi)
        })
        
        categorydiv.appendChild(skillsUl)
        skillsDiv.appendChild(categorydiv)
    })

}

function addEmployment(employments) {
    const employmentDiv = document.getElementById('employment')
    employments.forEach((employment) => {
        const employerTitle = document.createElement('h4')
        const location = document.createElement('h5')
        const positionsList = document.createElement('ul')
        employerTitle.innerHTML = employment.company
        location.innerHTML = employment.location
        employmentDiv.appendChild(employerTitle)
        employmentDiv.appendChild(location)
        employment.positions.forEach((position) => {

        })
    })
    employmentDiv.appendChild(positionsList)
}

function renderResume() {
    const resumeData = fetchResumeData()
    addSummary(resumeData.summary)
    addSkills(resumeData.skills)
    addEmployment(resumeData.employment)
}

renderResume()