import { trackEvent } from '../otel';

export function setModuleComplete(module_name,complete){
    var completedModules = localStorage.getItem("completed_modules");
    if (completedModules == null) {
        completedModules = {};
    }
    else{
        completedModules = JSON.parse(completedModules);
    }
    trackEvent('module_completed', { module: module_name, first_completion: !completedModules[module_name] });
    completedModules[module_name] = complete;
    localStorage.setItem("completed_modules",JSON.stringify(completedModules))
}