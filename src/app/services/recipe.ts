import { Ingredient } from "./ingredient"
import { Material } from "./material"
import { Step } from "./step"

export interface Recipe {
  material: Material[]
  ingredients: Ingredient[]
  steps: Step[]
  name: string;
  summary: string[];
  type: string;
}
