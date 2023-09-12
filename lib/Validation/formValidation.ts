import { Action } from "@/context/Interfaces"

export const actionClientValidate = (title: string | undefined, actions: Action[]) => {
    // Checks if Title is empty, null or undefined
    if (!title?.trim()) {
        return { notValid: true, message: "Action must have a value"}
    } else if (title.length > 15 || title.length < 3) {
        return { notValid: true, message: "Action must be between 3 to 15 characters long"}
    } else if (actions.filter(action => action.title.toLowerCase() == title.toString().toLowerCase()).length > 0) {
        return { notValid: true, message: "Action already exist"}
    }
return { notValid: false, message: "Valid Action"}
}

export const actionServerValidate = (title: string | undefined) => {
if (!title?.trim()) {
    return { notValid: true, message: "Action must have a value"}
} else if (title.length > 15 || title.length < 3) {
    return { notValid: true, message: "Action must be between 3 to 15 characters long"}
}
return { notValid: false, message: "Valid Action"}
}
