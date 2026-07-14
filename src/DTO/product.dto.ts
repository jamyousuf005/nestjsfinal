import { IsString, Min} from "class-validator";

export class ProductDto{
    @IsString()
  productName:string;

  @Min(0.01,{message:'price must be greater than 0'})
  price:number;
}