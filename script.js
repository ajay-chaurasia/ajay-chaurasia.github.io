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

function renderResume() {
    const resumeData = fetchResumeData()
    addSummary(resumeData.summary)
    addSkills(resumeData.skills)
}

renderResume()