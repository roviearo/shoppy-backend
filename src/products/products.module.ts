import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ProductGateway } from './products.gateway';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [PrismaModule, AuthModule],
  providers: [ProductsService, ProductGateway],
  controllers: [ProductsController],
  exports: [ProductsService],
})
export class ProductsModule {}
