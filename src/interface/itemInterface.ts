export interface itemI {
    "id": number,
    "mid": string,
    "vid": string,
    "song": string,
    "subtitle": string,
    "singer": string,
    "album": string,
    "pay": string,
    "time": string,
    "bpm": null | any,
    "quality": string,
    "interval": string,
    "size": string,
    "kbps": string,
    "cover": string,
    [propName: string]: string | any
}