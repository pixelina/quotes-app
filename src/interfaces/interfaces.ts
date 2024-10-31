export interface Quote {
    _id?: string,
    content?: string,
    author?: string,
    tags?: [string],
    authorSlug?: string,
    length?: number,
    dateAdded?: string,
    dateModified?: string,
    date?: string
}

export interface Author {
    _id?: string,
    content?: string,
    author?: string,
    tags?: [string],
    authorSlug?: string,
    length?: number,
    dateAdded?: string,
    dateModified?: string
}

export interface Authors {
count?: number,
totalCount?: number,
page?: number,
totalPages?: number,
lastItemIndex?: number,
results?: [ Author ]
}

export interface Notification {
    isShown?: boolean,
    status?: number,
    message?: string
    }