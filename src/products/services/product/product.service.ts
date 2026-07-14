import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductDto } from 'src/DTO/product.dto';
import { Product } from 'src/entities/product';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product) private productRepository: Repository<Product>,
    ) { }

    async addProduct(newProduct: ProductDto) {
        const { productName, price } = newProduct;
        const product = this.productRepository.create({
            productName,
            price
        })
        return await this.productRepository.save(product);
    }

    async getAll() {
        return await this.productRepository.find()
    }

    async getOne(id: number ) {
        const product=await this.productRepository.findOne({where:{id}})
        if(!product){
            throw new NotFoundException(`product with id ${id} was not found`)
        }
       return product;
    }
}
