import { Injectable } from '@nestjs/common';
import { CreateProductRequest } from './dto/create-product.request';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private readonly prismaService: PrismaService) {}

  async createProduct(data: CreateProductRequest, userId: number) {
    try {
      return await this.prismaService.product.create({
        data: {
          ...data,
          userId: userId,
        },
      });
    } catch (err) {}
  }
}
