import { ProductDto } from 'src/DTO/product.dto';
import { ProductService } from './../../services/product/product.service';
import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { Product } from 'src/entities/product';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) { }
    @Post('create')
    async addProduct(@Body() productData: ProductDto) {
        await this.productService.addProduct(productData)
        return "product added successfully"
    }
   
    @Get('getAll')
    async getAll(){
       return await this.productService.getAll()
    }
    @Get('getOne/:id')
    async getById(@Param('id',ParseIntPipe)id:number):Promise<Product>{
        return await this.productService.getOne(id)
    }
}
