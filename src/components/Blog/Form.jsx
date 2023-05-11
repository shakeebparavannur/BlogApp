import React, { useRef, useContext } from 'react'
import { BlogComponent } from '../../App'
import './Blog.css'

function Form() {
    const {blog,setBlog} = useContext(BlogComponent)
    const titleRef = useRef(null)
    const descriptionRef = useRef(null)
    console.log(blog);

    const handleSubmit = (e)=>{
        e.preventDefault();
        setBlog([...blog,{id:Date.now(),title: titleRef.current.value, description: descriptionRef.current.value}])
        titleRef.current.value='';
        descriptionRef.current.value = '';
        
    }
  return (
    <div className='container'>
      <h1 className='form-title'>Enter the Blog Details</h1>
        <form onSubmit={handleSubmit}>
            <input required type='text' placeholder="Enter the title" ref={titleRef}/>
            <textarea required rows={10} placeholder = 'Enter the description' ref={descriptionRef}/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Form