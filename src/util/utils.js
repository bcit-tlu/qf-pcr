export function setModuleComplete(module_name,complete){
    var completedModules = localStorage.getItem("completed_modules");
    if (completedModules == null) {
        completedModules = {};
    }
    else{
        completedModules = JSON.parse(completedModules);
    }
    completedModules[module_name] = complete;
    localStorage.setItem("completed_modules",JSON.stringify(completedModules))
}