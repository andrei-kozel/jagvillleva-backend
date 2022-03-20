import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({
    description: 'Title of the blog post.',
  })
  readonly title: string;

  @ApiProperty({
    description: 'Content of the post, including the markup.',
  })
  readonly content: string;
  readonly image: string;
  readonly userId: number;
}
