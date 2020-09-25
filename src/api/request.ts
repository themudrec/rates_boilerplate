const DEFAULT_ENDPOINT = `https://www.nbrb.by/api/`

export type TRequestMethods = 'GET' | 'POST'

export interface IRequestOptions {
    headers?: object
}

export const request = async (
        path: string, 
        method: TRequestMethods = 'GET', 
        body: object | null = null, 
        { headers = {}, ...options }: IRequestOptions = {}
    ): Promise<Response> => {

    const fetchBody: object = ( body ? {body: JSON.stringify(body)} : {} )

    return await fetch(`${DEFAULT_ENDPOINT}${path}`, {
        headers: {
            ...headers,

        },
        ...options,
        ...fetchBody,
        method,

    })
}

export const requestToJson = async (request: Response) => await request?.json?.()





