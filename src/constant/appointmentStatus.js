export const appointStatusDsc = {
    payment: 'Payment Status: Set to "paid" to represent a payment that is completed',
    appointment: {
        FollowUp: 'Set to "Follow-up" to represent get re-schedule with the gardener',
        pending: 'Set to "pending" to represent a appointment that is yet to be schedule.possible next step is scheduled',
        scheduled: 'Changed to "Scheduled" to indicate an appointment that is scheduled',
        Completed: "If the session has been successfully concluded.",
        Canceled: "If the session is canceled by either the customer or the service provider.",
        'Follow-up Scheduled': 'If a follow-up session is scheduled.',
        cancel: 'If the session cannot be completed for some reason.',
        archived: 'If the session is closed and moved to historical records.',
        InProgress: 'Lorem ipsum dollar sumit',
        confirmed : 'When the customer and gardener confirms the session.',
    },
    followUpDate: 'Represent a different follow-up date.',
    prescriptionStatus: {
        issued: "Set to 'issued' to represent that a final decision has been issued.",
        notIssued: "Set to 'not_issued' to represent that a informations has not been issued yet."
    }
}