export interface IPatchData {
    id?:number,
    title?:string,
    imgUrl?:string,
    description?:string,
    scheduleStart:Date | string,
    scheduleEnd:Date | string,
    hall:number | string
}
