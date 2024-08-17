import React from 'react'
import MagicButton from './MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { Button } from './ui/MovingBorders'

function About() {
  return (
    <section id="about">
        <h1 className="heading">
        <span className="text-purple">About </span>Me
        </h1>
        <div className='flex flex-col lg:flex-row lg:mt-0 mt-16'>
            <div className="flex-1 md:mt-4">
                <div className="">
                    <p className='text-justify text-lg indent-8'>
                    I’m Kalpesh Bhoir, a Machine Learning Engineer based in Mumbai with a strong foundation in data analysis and statistical modeling. I specialize in developing ML solutions to tackle complex challenges and have worked on projects in areas like object detection and NLP. I’m passionate about innovation and eager to apply my skills to create impactful, data-driven solutions.
                    </p>
                </div>
                <div className="flex mt-5 pb-4 space-x-2">
                    <h1 className='font-bold text-lg'>Profile : </h1>
                    <p className='font-thin text-current'>
                    Machine Learning Engineer
                    </p>
                </div>
                <div className="flex pb-4 space-x-4">
                    <h1 className='font-bold text-lg'>Education : </h1>
                    <p className='font-thin text-current'>
                    M.Sc in IT (CGPA : 8.79)     
                    </p>
                </div>
                <div className="flex pb-4 space-x-4">
                    <h1 className='font-bold text-lg'>Skills: </h1>
                    <p className='font-thin text-current'>
                    Python, Pandas, NumPy, Scikit-Learn, Matplotlib, Seaborn, Keras, Deep learning, Git, AWS
                    </p>
                </div>

                <div className="flex pb-4 space-x-4">
                    <h1 className='font-bold text-lg'>Language : </h1>
                    <p className='font-thin text-current'>
                    English, Hindi, Marathi
                    </p>
                </div>
            
                <div className=''>
                    <MagicButton
                        title="Download Resume"
                          link='https://drive.google.com/file/d/11G6VmyG2PeeBUi-7EjWjHXg5RoGF0TxH/view?usp=sharing'
                        position="right"
                    />
                </div>
            </div>
            <div className='flex-1 justify-center mt-4 flex items-center '>
                <img
                    src='/profile_photo.png'
                    alt="cover"
                    className="z-16 w-96 h-96 rounded-full"
                />
            </div>
        </div>
    </section>
  )
}

export default About