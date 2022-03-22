import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { FilesModule } from 'src/files/files.module';
import { DogsController } from './dogs.controller';
import { Dog } from './dogs.model';
import { DogsService } from './dogs.service';

@Module({
  controllers: [DogsController],
  providers: [DogsService],
  imports: [
    forwardRef(() => AuthModule),
    SequelizeModule.forFeature([Dog]),
    FilesModule,
  ],
})
export class DogsModule {}
