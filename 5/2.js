let resume = {
    "Name" : "Shivang Agarwal",
    "DOB" : "26th May",
    "Education" : "M.Tech",
    "Skills" : ["JS","Java","C++","Python"]
}

for(var i=0; i<resume.length; i++){
    console.log(resume[i])
}

for(i in resume){
    console.log(i + ": "+ resume[i])
}






