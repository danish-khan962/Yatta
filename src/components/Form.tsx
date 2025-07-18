'use client';

import React, { useState } from 'react';
import { Space_Mono } from 'next/font/google';
import { FaUpload } from 'react-icons/fa6';
import dynamic from 'next/dynamic'
import { FileUpload } from './ui/file-upload';
const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['700'],
});

const Form = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [details, setDetails] = useState('');

  const UploadPost = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ title, description, category, imageUrl, details });
  };

  return (
    <form
      onSubmit={UploadPost}
      className='max-w-[1100px] w-full bg-[#1b1b1b] p-3 md:p-[30px] lg:p-[60px] rounded-lg md:rounded-xl'
    >
      {/* Title */}
      <div className='flex flex-col gap-y-2 md:gap-y-5 lg:gap-y-7'>
        <label className={`${spaceMono.className} text-sm md:text-xl lg:text-2xl`}>
          Title
        </label>
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='w-full bg-[#090808] rounded-2xl py-2 px-4 md:px-8 placeholder:text-gray-500/60 max-sm:text-xs'
          placeholder='Enter Post Title...'
        />
      </div>

      {/* Description */}
      <div className='flex flex-col gap-y-2 md:gap-y-5 lg:gap-y-7 mt-[30px] md:mt-[60px]'>
        <label className={`${spaceMono.className} text-sm md:text-xl lg:text-2xl`}>
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className='w-full bg-[#090808] rounded-2xl py-2 px-4 md:px-8 placeholder:text-gray-500/60 max-sm:text-xs resize-none'
          placeholder='Enter Post Description...'
          rows={4}
        />
      </div>

      {/* Category */}
      <div className='flex flex-col gap-y-2 md:gap-y-5 lg:gap-y-7 mt-[30px] md:mt-[60px]'>
        <label className={`${spaceMono.className} text-sm md:text-xl lg:text-2xl`}>
          Category
        </label>
        <input
          type='text'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className='w-full bg-[#090808] rounded-2xl py-2 px-4 md:px-8 placeholder:text-gray-500/60 max-sm:text-xs'
          placeholder='Type Category like Seinen, Shonen, Rom-Com...'
        />
      </div>

      {/* Image URL */}
      <div className='flex flex-col gap-y-2 md:gap-y-5 lg:gap-y-7 mt-[30px] md:mt-[60px]'>
       <FileUpload />
      </div>

      {/* Markdown Editor */}
      <div className='flex flex-col gap-y-2 md:gap-y-5 lg:gap-y-7 mt-[30px] md:mt-[60px]'>
        <label className='text-sm md:text-xl lg:text-2xl'>Details</label>
        <div data-color-mode='dark' className='w-full'>
          <MDEditor
            id='details'
            value={details}
            onChange={(val = '') => setDetails(val)}
            preview='edit'
            height={300}
            style={{ borderRadius: 20, overflow: 'hidden' }}
            textareaProps={{
              placeholder: 'Describe your post details here...',
            }}
            previewOptions={{
              disallowedElements: ['style'],
            }}
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type='submit'
        className={`w-full flex flex-row justify-center items-center mt-[60px] md:mt-[120px] ${spaceMono.className} bg-blue-300 hover:bg-blue-200 transition-all ease-in-out duration-200 active:bg-black active:text-white text-black py-2 md:py-3 rounded-lg cursor-pointer min-sm:text-xl`}
      >
        <p>Upload Post</p>
        <FaUpload className='ml-[20px]' />
      </button>
    </form>
  );
};

export default Form;
