import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ProductGatway } from './products.gateway';

@Module({
  imports: [PrismaModule],
  providers: [ProductsService, ProductGateway],
  controllers: [ProductsController],
  exports: [ProductsService],
})
export class ProductsModule {}
