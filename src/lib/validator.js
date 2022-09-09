export function checkEmptiness(entry){
    const empty = /^\s+$/;

    if(empty.test(entry) || entry=="" || entry==null){
        return "*This field is required.*";
    }

    return null;
}

export function validateFile(file){
    let feedBack = checkEmptiness(file);
    if(feedBack != null){
        return feedBack;
    }

    var ext = file.name.slice(file.name.indexOf(".")+1);
    var size = file.size/(1024*1024);
    
    
    if(ext!="pdf" && ext!="docx"){
        return "*Please use pdf or docx file formats.*";
    }
    else if(size > 5){
        return "*File should be 5MB max.*";
    }

    return null;
}

export function validateSummary(summary, min, max){
    var feedBack = checkEmptiness(summary);

    if(feedBack != null){
        return feedBack;
    }
    else if(summary.length < min){
        return "*Summary should be "+min+" characters long.*";
    }
    else if(summary.length > max){
        return "*Summary exceeded "+max+"characters long.*";
    }

    return null;
}

export function validateTitle(name){
    var feedBack = checkEmptiness(name);
    

    //Regular expression patterns
    const caps = /^[A-Z\s]+$/;
    const space = /\s{2}/;

    if(feedBack != null){
        return feedBack;
    }

    let trimmedName = name.trim();
    if(!caps.test(trimmedName)){
        return "*Use capital letters only.*";
    }
    else if(space.test(trimmedName)){
        return "Only one white space is allowed in between.";
    }
    else if(trimmedName.length < 5){
        return "Title should be 5 characters long.";
    }
    else if(trimmedName.length > 30){
        return "Title exceeded 30 characters.";
    }

    return null;
}