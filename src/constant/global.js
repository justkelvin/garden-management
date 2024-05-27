import dayjs from 'dayjs';
export const bloodGrup = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']
export const bloodGrupOptions = bloodGrup.map((data) => {
    return {
        label: data,
        value: data
    }
})

const gender = ['male', 'female', 'other']

export const genderOptions = gender.map((data) => {
    return {
        label: data,
        value: data
    }
})
export const daysArray = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

export const doctorSpecialistArray = [
    { id: 1, value: "Lawn Mowing" },
    { id: 2, value: "Weeding and Mulching" },
    { id: 3, value: "Pruning and Trimming" },
    { id: 4, value: "Garden Clean-Up" },
    { id: 5, value: "Planting and Transplanting" },
    { id: 6, value: "Pest Control" },
    { id: 7, value: "Irrigation Maintenance" },
    { id: 8, value: "Seasonal Clean-Up" },
    { id: 9, value: "Hardscape Maintenance" },
    { id: 10, value: "Leaf Removal" }
]

export const doctorSpecialistOptions = doctorSpecialistArray.map(data => {
    return {
        label: data.value,
        value: data.value
    }
});

export const doctorTimeSlot = [
    "08:00 AM",
    "08:30 AM",
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "01:00 PM",
    "01:30 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM"
]

const appointmentStatus = [
    "pending",
    "scheduled",
    "cancel",
    "confirmed",
    "InProgress",
    "Completed",
    "FollowUp",
    "archived"
]

export const appointemntStatusOption = appointmentStatus.map((item) => {
    return {
        label: item,
        value: item
    }
})

//Daignosis

const medical_diagnoses = [
    "Weed Infestation",
    "Soil Depletion",
    "Plant Diseases",
    "Overgrown Hedges",
    "Improper Pruning",
    "Irrigation System Failure",
    "Pest Infestation",
    "Lawn Patchiness",
    "Unkempt Garden Beds",
    "Neglected Plant Health",
    "Garden Drainage Issues",
    "Overcrowded Plantings",
    "Uneven Lawn Growth",
    "Thatch Buildup",
    "Invasive Plant Species",
    "Soil Erosion"
]
const medical_diseases = [
    "Weed Infestation",
    "Soil Depletion",
    "Plant Diseases",
    "Overgrown Hedges",
    "Improper Pruning",
    "Irrigation System Failure",
    "Pest Infestation",
    "Lawn Patchiness",
    "Unkempt Garden Beds",
    "Neglected Plant Health",
    "Garden Drainage Issues",
    "Overcrowded Plantings",
    "Uneven Lawn Growth",
    "Thatch Buildup",
    "Invasive Plant Species",
    "Soil Erosion",
    "Garden Pests",
    "Drought Stress",
    "Fungal Infections",
    "Overwatering",
    "Poor Soil Drainage"
];

const medicalCheckupList = [
    "Garden Soil Analysis",
    "Pest Inspection",
    "Plant Health Assessment",
    "Lawn Analysis",
    "Irrigation System Check",
    "Garden Bed Inspection",
    "Hardscape Evaluation",
    "Seasonal Maintenance Planning",
    "Weed Control Measures",
    "Fertilization Schedule",
    "Pruning Calendar",
    "Pest Management Plan",
    "Irrigation Optimization",
    "Mulching Strategy",
    "Planting Schedule",
    "Garden Cleanup Routine",
    "Garden Design Review"
];

const dosageList = [
    "1 Bag",
    "1 Gallon",
    "1 Liter",
    "1 Pound",
    "1 Scoop",
    "1 Sprayer",
    "1 Tube"
];
const frequenciesList = [
    "One-Time Application",
    "Weekly Application",
    "Bi-Weekly Application",
    "Monthly Application",
    "Seasonal Application"
];

const patientStatusList = [
    "New Client",
    "Active Client",
    "Inactive Client",
    "Prospective Client",
    "Former Client"
];

export const PatientStatus = patientStatusList.map((item) => {
    return {
        label: item,
        value: item
    }
})



export const DiagnosisOptions = medical_diagnoses.map((item) => {
    return { label: item, value: item }
})

export const DiseaseOptions = medical_diseases.map((item) => {
    return { label: item, value: item }
})

export const MedicalCheckupOptions = medicalCheckupList.map((item) => {
    return { label: item, value: item }
})

export const DosageOptions = dosageList.map((item) => {
    return {
        label: item,
        value: item
    }
})

export const FrequencyOptions = frequenciesList.map((item) => {
    return {
        label: item,
        value: item
    }
})

export const DateRangePresets = [
    {
        label: 'Next 3 Days',
        value: [dayjs(), dayjs().add(3, 'd')],
    },
    {
        label: 'Next 7 Days',
        value: [dayjs(), dayjs().add(7, 'd')],
    },
    {
        label: 'Next 10 Days',
        value: [dayjs(), dayjs().add(10, 'd')],
    },
    {
        label: 'Next 14 Days',
        value: [dayjs(), dayjs().add(14, 'd')],
    },
    {
        label: 'Next 30 Days',
        value: [dayjs(), dayjs().add(30, 'd')],
    },
    {
        label: 'Next 2 Month',
        value: [dayjs(), dayjs().add(60, 'd')],
    },
    {
        label: 'Next 3 Month',
        value: [dayjs(), dayjs().add(90, 'd')],
    },
];

export const DatePickerSinglePresets = [
    {
        label: 'Tomorrow',
        value: dayjs().add(1, 'd'),
    },
    {
        label: 'Next 3 Day',
        value: dayjs().add(3, 'd'),
    },
    {
        label: 'Next Week',
        value: dayjs().add(7, 'd'),
    },
    {
        label: 'Next 2 Week',
        value: dayjs().add(15, 'd'),
    },
    {
        label: 'Next Month',
        value: dayjs().add(30, 'd'),
    },
    {
        label: 'Next 2 Month',
        value: dayjs().add(60, 'd'),
    },
    {
        label: 'Next 3 Month',
        value: dayjs().add(90, 'd'),
    },
    {
        label: 'Next 6 Month',
        value: dayjs().add(180, 'd'),
    },
]