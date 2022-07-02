function fetchResumeData() {
    console.log(ajay);
    return ajay;
}

function addSummary() {
    
}

function renderResume() {
    const resumeData = fetchResumeData();
    addSummary(resumeData.summary);
}

renderResume();