import React from 'react'
import PostInput from './PostInput'
import Posts from './Posts'
import { getAllPosts } from '@/lib/serveraction';

const Fedd = async ({user}:{user:any}) => {
    const userData = JSON.parse(JSON.stringify(user));
    const posts = await getAllPosts();
  return (
    <div className="flex-1">
      <PostInput user={userData}/>
      <Posts posts={posts!}/>
    </div>
  )
}

export default Fedd
