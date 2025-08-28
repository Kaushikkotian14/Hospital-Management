import { treatment } from "./procedure.model"
import { physican } from "./physican.model"

export interface trainedInModel {
  trainedInId: number,
  physicianId: number,
  physcianName: string,
  certificationDate: string,
  certificationExpires: string,
  treatment: treatment,
  physician: physican
}