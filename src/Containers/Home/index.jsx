import { Avatar } from 'antd';
import img from '../../Assets/imgs/jacob.jfif';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import TypewriterComponent from 'typewriter-effect';
import About from '../../Components/About';
import Skills from '../../Components/Skills';
import Portfolio from '../../Components/Portfolio';

export function HomePage(){

    return(
        <div className="home-page">
           <div className="content">
               <div className="div-avatar" data-aos='fade-up'>
                   <Avatar style={{ border: '2px solid white' }} src={img} size={300} />
               </div>
               <div className="div-intro" data-aos='fade-down'>
                   <div className="greeting">
                        <TypewriterComponent
                            options={{
                                strings: "Hi there👋, I'm",
                                autoStart: true,
                                loop: false,
                                pauseFor: 3000
                            }}
                        />
                   </div>
                   <div className="intro-name">Jacob Developer</div>
                   <div className="intro-poste">Your software engeneer based in Goma</div>
                   <div className="div-socials">
                       <div> <a href="https://www.linkedin.com/in/merci-jacob-1b9776190/" target="_blank" rel="noopener noreferrer"> <LinkedinOutlined /> </a> </div>
                       <div> <a href="https://github.com/jacob-js" target="_blank" rel="noopener noreferrer"><GithubOutlined /></a> </div>
                   </div>
               </div>
           </div>
           <About />
           <Skills />
           <Portfolio />
        </div>
    )
}