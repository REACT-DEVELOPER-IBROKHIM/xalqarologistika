export const DOCUMENT_TYPES = {
    DRIVER: 'driver',
    MANAGER: 'manager',
    ADR: 'adr',
    ADR_TANK: 'adr_tank',
}

export const SIMILAR_DOCUMENT_TYPES = {
    DRIVER: ['driver', 'manager'],
    ADR: ['adr', 'adr-tank'],
}

export const DOCUMENT_TYPES_LIST = [
    {
        key: 'driver',
        label: 'Haydovchi sertifikat',
    },
    {
        key: 'manager',
        label: 'Manager sertifikat',
    },
    {
        key: 'adr',
        label: 'ADR sertifikat',
    },
    {
        key: 'adr-tank',
        label: 'ADR Tank sertifikat',
    },
]

export const EMPTY_DOCUMENT = 'Mavjud emas'
export const DATE_FORMAT = 'DD.MM.YYYY'