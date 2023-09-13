import { Action, Task, Template } from "@/context/Interfaces"

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

export const taskClientValidate = (task: Task) => {
    // Checks if Title is empty, null or undefined
    if (task.startTime > task.endTime ) {
        return { notValid: true, message: "Start-time can not be greater then End-time"}
    } else if (task.startTime === task.endTime) {
        return { notValid: true, message: "Start-time and End-time can not be the same"}
    } else if (task.actionId === 'default') {
        return { notValid: true, message: "You must select an Action"}
    }
    return { notValid: false, message: "Valid Task"}
}

export const taskServerValidate = (startTime :number, endTime :number) => {
    if (startTime > endTime ) {
        return { notValid: true, message: "Start-time can not be greater then End-time"}
    }  else if (startTime === endTime) {
        return { notValid: true, message: "Start-time and End-time can not be the same"}
    }
    return { notValid: false, message: "Valid Action"}
}

export const templateClientValidate = (name: string | undefined, description: string , templates: Template[]) => {
    // Checks if Name is empty, null or undefined
    if (!name?.trim()) {
        return { notValid: true, message: "Template name must have a value"}
    } else if (name.length > 15 || name.length < 3) {
        return { notValid: true, message: "Template name must be between 3 to 15 characters long"}
    } else if (description.length > 100) {
        return { notValid: true, message: "Description must can't be longer then 100 characters"}
    } else if (templates.filter(template => template.name.toLowerCase() == name.toLowerCase()).length > 0) {
        return { notValid: true, message: "Template Name already exist"}
    }
    return { notValid: false, message: "Valid Template"}
}

export const editTemplateClientValidate = (name: string | undefined, description: string , templates: Template[]) => {
    // Checks if Name is empty, null or undefined
    if (!name?.trim()) {
        return { notValid: true, message: "Template name must have a value"}
    } else if (name.length > 15 || name.length < 3) {
        return { notValid: true, message: "Template name must be between 3 to 15 characters long"}
    } else if (description.length > 100) {
        return { notValid: true, message: "Description must can't be longer then 100 characters"}
    }
    return { notValid: false, message: "Valid Template"}
}

export const templateServerValidate = (name: string | undefined, description: string) => {
    if (!name?.trim()) {
        return { notValid: true, message: "Template name must have a value"}
    } else if (name.length > 15 || name.length < 3) {
        return { notValid: true, message: "Name must be between 3 to 15 characters long"}
    } else if (description.length > 100) {
        return { notValid: true, message: "Description must can't be longer then 100 characters"}
    }
    return { notValid: false, message: "Valid Template"}
}