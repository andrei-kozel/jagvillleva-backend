import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FilesService } from 'src/files/files.service';
import { Dog } from './dogs.model';
import { CreateDogDto } from './dto/create-dog.dto';

@Injectable()
export class DogsService {
  constructor(
    @InjectModel(Dog) private dogRepository: typeof Dog,
    private fileService: FilesService,
  ) {}

  async create(dto: CreateDogDto, images): Promise<Dog> {
    const fileNames = await this.fileService.createFiles(images);
    const dog = await this.dogRepository.create({ ...dto, images: fileNames });
    return dog;
  }

  async getAll(): Promise<Dog[]> {
    return await this.dogRepository.findAll();
  }

  async getById(id: number): Promise<Dog> {
    return await this.dogRepository.findByPk(id);
  }

  // TODO Update images
  async update(id: number, dto: CreateDogDto): Promise<Dog> {
    await this.dogRepository.update(dto, { where: { id } });
    return await this.dogRepository.findByPk(id);
  }

  async delete(id: number) {
    return await this.dogRepository.destroy({ where: { id } });
  }
}
