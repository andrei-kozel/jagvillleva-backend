import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { DogsService } from './dogs.service';
import { CreateDogDto } from './dto/create-dog.dto';

@ApiTags('Dogs')
@Controller('dogs')
export class DogsController {
  constructor(private dogsService: DogsService) {}

  @ApiOperation({ summary: 'Create a dog' })
  @ApiResponse({ status: 200, type: CreateDogDto })
  @UseInterceptors(FilesInterceptor('images'))
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() dto: CreateDogDto, @UploadedFiles() images) {
    return this.dogsService.create(dto, images);
  }

  @ApiOperation({ summary: 'Get all dogs' })
  @ApiResponse({ status: 200, type: [CreateDogDto] })
  @Get('/')
  getAll() {
    return this.dogsService.getAll();
  }

  @ApiOperation({ summary: 'Get dog by id' })
  @ApiResponse({ status: 200, type: CreateDogDto })
  @Get('/:id')
  getById(@Param('id') id: number) {
    return this.dogsService.getById(id);
  }

  @ApiOperation({ summary: 'Update dog info by id' })
  @ApiResponse({ status: 200, type: CreateDogDto })
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Post('/:id')
  update(@Param('id') id: number, @Body() dto: CreateDogDto) {
    return this.dogsService.update(id, dto);
  }

  @ApiOperation({ summary: 'Delete dog by id' })
  @ApiResponse({ status: 200 })
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.dogsService.delete(id);
  }
}
