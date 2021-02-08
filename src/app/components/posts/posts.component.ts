import { PostService } from './../../service/post.service';
import { Post } from './../../models/Post';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts!: Post[];
  loadingIndicator?: boolean = true;

  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts => {
      
      this.posts = posts;
      this.loadingIndicator = false;
    })
  }

}
