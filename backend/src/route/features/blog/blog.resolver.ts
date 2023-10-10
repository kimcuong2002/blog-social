import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { BlogService } from './blog.service';
import { ResponseMutationBlogType } from './types/common.type';
import { CreateBlogType } from './types/create-blog.type';
import { BlogType } from './types/blog.type';
import { UserService } from '../user/user.service';
import { Blog } from './blog.entity';
import { UpdateBlogType } from './types/update-blog';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'route/auth/jwt-auth.guard';

@Resolver(() => BlogType)
export class BlogResolver {
  constructor(
    private blogService: BlogService,
    private userService: UserService,
  ) {}

  @Query(() => [BlogType])
  getBlogs() {
    return this.blogService.getBlogs();
  }

  @Query(() => BlogType)
  getBlogById(@Args('id') id: string) {
    return this.blogService.getBlogById(id);
  }

  @Mutation(() => ResponseMutationBlogType)
  @UseGuards(JwtAuthGuard)
  createBlog(@Args('body') body: CreateBlogType) {
    return this.blogService.createBlog(body);
  }

  @Mutation(() => ResponseMutationBlogType)
  @UseGuards(JwtAuthGuard)
  updateBlog(@Args('id') id: string, @Args('body') body: UpdateBlogType) {
    return this.blogService.updateBlog(id, body);
  }

  @Mutation(() => ResponseMutationBlogType)
  @UseGuards(JwtAuthGuard)
  deleteBlog(@Args('id') id: string) {
    return this.blogService.deleteBlog(id);
  }

  @ResolveField()
  async creator(@Parent() blog: Blog) {
    return this.userService.getUserById(blog.creator);
  }
}
