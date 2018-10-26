import { PostInterface } from "./post-interface";

export class Post implements PostInterface {
    title: String;
    content: String;
    loveIts: number;
    created_at : Date;


    constructor( post : PostInterface) { 
        this.created_at = new Date();
        this.title = post.title;
        this.content = post.content;
        this.loveIts = post.loveIts;
    }

}
