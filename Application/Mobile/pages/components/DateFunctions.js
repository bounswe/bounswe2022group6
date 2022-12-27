import React from "react";

export const calculateDate = (dateString) => {
    const _date = new Date(dateString)
    const differenceMS = new Date() - _date;

    if (differenceMS < 0) {
        return 'Not published yet!'
    }

    const diffDays = Math.floor(differenceMS / 86400000); // days
    const diffHrs = Math.floor((differenceMS % 86400000) / 3600000); // hours
    const diffMins = Math.floor(((differenceMS % 86400000) % 3600000) / 60000); // minutes

    if (diffDays > 2) {
        return _date.toLocaleDateString()
    } else if (diffDays == 2) {
        return '2 days ago'
    } else if (diffDays == 1) {
        return '1 day ago'
    } else if (diffHrs > 0) {
        return (diffHrs == 1 ? 'an hour ago' : diffHrs + ' hours ago')
    } else if (diffMins > 1) {
        return diffMins + ' minutes ago'
    } else {
        return 'just now'
    }
}

export const getFullDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleString()
}