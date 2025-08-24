export interface physican{
    physicianId: number,
    name: string,
    position: string
}

export interface trainedin{
    trainedInId: number,
    physicianId:number,
  physcianName:string,
  certificationDate: string,
  certificationExpires: string,
  treatment:treatment,
   physician:physican

}

export interface treatment {
      procedureId: number,
      name: string,
      cost: number,
      createdOn: string
    }